import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({ loading, size = 18, color = "#333" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <ClipLoader
        loading={loading}
        size={size}
        color={color}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
