onst PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-0s9sZ7tj0D5fCw0QmmIvOyKxOyJGg0+8XpHbXjLH1GJLjJ8fNn0zv2x4y3Kz+8sWJ9s9sKjZmJgZ1tQ/sYtYJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
