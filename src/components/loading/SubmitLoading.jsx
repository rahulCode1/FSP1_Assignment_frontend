const SubmitLoading = ({size = 18}) => {
  return (
    <span
      className="spinner-border spinner-border-sm"
      style={{ width: size, height: size }}
      role="status"
      aria-hidden="true"
    />
  );
};


export default SubmitLoading