function Loading() {
  const spinnerStyle = {
    width: "8rem",
    height: "8rem",
    border: "0.8rem solid #e0e0e0",
    borderTop: "0.8rem solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    background: "conic-gradient(from 0deg, #6a11cb, #2575fc)", // purple to blue gradient
    WebkitMask:
      "radial-gradient(farthest-side, transparent calc(100% - 0.8rem), black calc(100% - 0.8rem))",
    mask: "radial-gradient(farthest-side, transparent calc(100% - 0.8rem), black calc(100% - 0.8rem))",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffffff",
    flexDirection: "column",
  };

  const textStyle = {
    marginTop: "16px",
    fontSize: "18px",
    color: "#555",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <div style={textStyle}>Loading...</div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Loading;
