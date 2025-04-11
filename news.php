
<?php
session_start();
require_once 'config/database.php';

// Pagination setup
$items_per_page = 6;
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $items_per_page;

// Get total number of news articles
$sql_count = "SELECT COUNT(*) AS total FROM news";
$count_result = $conn->query($sql_count);
$total_items = $count_result->fetch_assoc()['total'];
$total_pages = ceil($total_items / $items_per_page);

// Fetch news with pagination
$sql = "SELECT * FROM news ORDER BY created_at DESC LIMIT ?, ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $offset, $items_per_page);
$stmt->execute();
$result = $stmt->get_result();

include 'includes/header.php';
?>

<h1>Community News</h1>
<hr>

<div class="row mt-4">
    <?php if($result && $result->num_rows > 0): ?>
        <?php while($news = $result->fetch_assoc()): ?>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <?php if(!empty($news['image'])): ?>
                        <img src="assets/images/news/<?php echo htmlspecialchars($news['image']); ?>" class="card-img-top" alt="News Image">
                    <?php endif; ?>
                    <div class="card-body">
                        <h5 class="card-title"><?php echo htmlspecialchars($news['title']); ?></h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <?php echo date('F d, Y', strtotime($news['created_at'])); ?>
                        </h6>
                        <p class="card-text"><?php echo htmlspecialchars(substr($news['content'], 0, 100)) . '...'; ?></p>
                    </div>
                    <div class="card-footer">
                        <a href="news_details.php?id=<?php echo $news['id']; ?>" class="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    <?php else: ?>
        <div class="col-12">
            <p>No news articles available.</p>
        </div>
    <?php endif; ?>
</div>

<!-- Pagination -->
<?php if($total_pages > 1): ?>
    <nav aria-label="News pagination">
        <ul class="pagination justify-content-center">
            <li class="page-item <?php echo ($page <= 1) ? 'disabled' : ''; ?>">
                <a class="page-link" href="?page=<?php echo $page - 1; ?>" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            
            <?php for($i = 1; $i <= $total_pages; $i++): ?>
                <li class="page-item <?php echo ($page == $i) ? 'active' : ''; ?>">
                    <a class="page-link" href="?page=<?php echo $i; ?>"><?php echo $i; ?></a>
                </li>
            <?php endfor; ?>
            
            <li class="page-item <?php echo ($page >= $total_pages) ? 'disabled' : ''; ?>">
                <a class="page-link" href="?page=<?php echo $page + 1; ?>" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
<?php endif; ?>

<?php include 'includes/footer.php'; ?>
