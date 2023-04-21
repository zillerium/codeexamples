const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ position: 'absolute', top: '50%', left: 0, zIndex: 1, cursor: 'pointer' }}
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
      style={{ position: 'absolute', top: '50%', right: 0, zIndex: 1, cursor: 'pointer' }}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};
