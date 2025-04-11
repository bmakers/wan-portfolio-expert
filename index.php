
<?php
session_start();
require_once 'config/database.php';

// Fetch recent news
$sql_news = "SELECT * FROM news ORDER BY created_at DESC LIMIT 3";
$result_news = $conn->query($sql_news);

// Fetch upcoming events
$sql_events = "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC LIMIT 3";
$result_events = $conn->query($sql_events);

include 'includes/header.php';
?>

<div class="jumbotron bg-light p-5 rounded">
    <h1 class="display-4">Welcome to our Community Portal</h1>
    <p class="lead">Stay connected, informed, and engaged with our community events and news.</p>
    <hr class="my-4">
    <p>Join our community to participate in events and receive updates.</p>
    <?php if(!isset($_SESSION['user_id'])): ?>
        <a class="btn btn-primary btn-lg" href="register.php">Register Now</a>
    <?php endif; ?>
</div>

<div class="row mt-5">
    <div class="col-md-6">
        <h2>Upcoming Events</h2>
        <?php if($result_events && $result_events->num_rows > 0): ?>
            <?php while($event = $result_events->fetch_assoc()): ?>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo htmlspecialchars($event['title']); ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <?php echo date('F d, Y', strtotime($event['event_date'])); ?> at 
                            <?php echo date('g:i A', strtotime($event['event_time'])); ?>
                        </h6>
                        <p class="card-text"><?php echo htmlspecialchars(substr($event['description'], 0, 100)) . '...'; ?></p>
                        <a href="event_details.php?id=<?php echo $event['id']; ?>" class="card-link">Read More</a>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php else: ?>
            <p>No upcoming events at this time.</p>
        <?php endif; ?>
        <a href="events.php" class="btn btn-outline-primary">View All Events</a>
    </div>
    
    <div class="col-md-6">
        <h2>Latest News</h2>
        <?php if($result_news && $result_news->num_rows > 0): ?>
            <?php while($news = $result_news->fetch_assoc()): ?>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo htmlspecialchars($news['title']); ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <?php echo date('F d, Y', strtotime($news['created_at'])); ?>
                        </h6>
                        <p class="card-text"><?php echo htmlspecialchars(substr($news['content'], 0, 100)) . '...'; ?></p>
                        <a href="news_details.php?id=<?php echo $news['id']; ?>" class="card-link">Read More</a>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php else: ?>
            <p>No news articles at this time.</p>
        <?php endif; ?>
        <a href="news.php" class="btn btn-outline-primary">View All News</a>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
