const ShimmerUI = () => (
  <>
    <div className="resturantcard">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards"></div>
        ))}
    </div>
  </>
);

export default ShimmerUI;
