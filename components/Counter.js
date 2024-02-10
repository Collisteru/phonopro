const Counter = ({ label, numerator, denominator, style }) => {
  return (
    <div>
      <div>{label}:</div>
      <div style={{ textAlign: "center" }}>
        {numerator} / {denominator}
      </div>
    </div>
  );
};
