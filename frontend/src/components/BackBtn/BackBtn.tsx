import "./BackBtn.css";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  const elm = useMemo(() => {
    return (
      <img
        className="Back"
        src="/assets/images/BackBtn.png"
        onClick={() => navigate(-1)}
        alt="back-btn"
      />
    );
  }, [navigate]);

  const btn = useMemo(() => {
    return window.location.pathname !== "/" && elm;
  }, [elm]);

  return <>{btn}</>;
}

export default BackBtn;
