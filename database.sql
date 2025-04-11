
-- Create the database
CREATE DATABASE IF NOT EXISTS community_db;
USE community_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT,
    profile_image VARCHAR(255),
    is_admin TINYINT(1) DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    max_attendees INT,
    created_by INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Event registrations
CREATE TABLE IF NOT EXISTS event_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY (event_id, user_id)
);

-- News table
CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255),
    created_by INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    news_id INT,
    event_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (news_id) REFERENCES news(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Insert sample admin user (password: admin123)
INSERT INTO users (username, email, password, is_admin) 
VALUES ('admin', 'admin@example.com', '$2y$10$8IjGZp.ZnPQs7KRQlnPyWe2bD/7lp.Go1rkTFKO0J9LCVjUUHT/4G', 1);

-- Insert sample events
INSERT INTO events (title, description, event_date, event_time, location, created_by)
VALUES 
('Community Meetup', 'Join us for our monthly community meetup where we discuss upcoming projects and initiatives.', DATE_ADD(CURDATE(), INTERVAL 5 DAY), '18:00:00', 'Community Center', 1),
('Charity Fundraiser', 'Help us raise funds for the local children\'s hospital. There will be games, food, and entertainment.', DATE_ADD(CURDATE(), INTERVAL 12 DAY), '14:00:00', 'City Park', 1),
('Workshop: Web Development Basics', 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.', DATE_ADD(CURDATE(), INTERVAL 15 DAY), '10:00:00', 'Tech Hub', 1),
('Past Event', 'This is a past event that has already happened.', DATE_SUB(CURDATE(), INTERVAL 10 DAY), '15:00:00', 'Main Street Auditorium', 1);

-- Insert sample news
INSERT INTO news (title, content, created_by)
VALUES 
('Community Website Launched', 'We are excited to announce the launch of our new community website. This platform will allow members to stay updated on local events, news, and initiatives.', 1),
('Volunteer Opportunities Available', 'We are looking for volunteers for our upcoming community garden project. If you are interested in helping, please register on our website.', 1),
('New Community Center Opening Soon', 'The construction of our new community center is almost complete. The grand opening is scheduled for next month.', 1);
