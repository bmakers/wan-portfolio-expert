
<?php
session_start();
require_once 'config/database.php';

// Fetch all upcoming events
$sql = "SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC";
$result = $conn->query($sql);

include 'includes/header.php';
?>

<h1>Upcoming Events</h1>
<hr>

<div class="row mt-4">
    <?php if($result && $result->num_rows > 0): ?>
        <?php while($event = $result->fetch_assoc()): ?>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <?php if(!empty($event['image'])): ?>
                        <img src="assets/images/events/<?php echo htmlspecialchars($event['image']); ?>" class="card-img-top" alt="Event Image">
                    <?php endif; ?>
                    <div class="card-body">
                        <h5 class="card-title"><?php echo htmlspecialchars($event['title']); ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <?php echo date('F d, Y', strtotime($event['event_date'])); ?> at 
                            <?php echo date('g:i A', strtotime($event['event_time'])); ?>
                        </h6>
                        <p class="card-text"><?php echo htmlspecialchars(substr($event['description'], 0, 100)) . '...'; ?></p>
                    </div>
                    <div class="card-footer">
                        <a href="event_details.php?id=<?php echo $event['id']; ?>" class="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php else: ?>
        <div class="col-12">
            <p>No upcoming events at this time.</p>
        </div>
    <?php endif; ?>
</div>

<h2 class="mt-5">Past Events</h2>
<hr>

<?php
// Fetch past events
$sql_past = "SELECT * FROM events WHERE event_date < CURDATE() ORDER BY event_date DESC LIMIT 6";
$result_past = $conn->query($sql_past);
?>

<div class="row mt-4">
    <?php if($result_past && $result_past->num_rows > 0): ?>
        <?php while($past_event = $result_past->fetch_assoc()): ?>
            <div class="col-md-4 mb-4">
                <div class="card h-100 bg-light">
                    <div class="card-body">
                        <h5 class="card-title"><?php echo htmlspecialchars($past_event['title']); ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <?php echo date('F d, Y', strtotime($past_event['event_date'])); ?>
                        </h6>
                        <p class="card-text"><?php echo htmlspecialchars(substr($past_event['description'], 0, 100)) . '...'; ?></p>
                        <a href="event_details.php?id=<?php echo $past_event['id']; ?>" class="card-link">View Details</a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php else: ?>
        <div class="col-12">
            <p>No past events to display.</p>
        </div>
    <?php endif; ?>
</div>

<?php include 'includes/footer.php'; ?>
