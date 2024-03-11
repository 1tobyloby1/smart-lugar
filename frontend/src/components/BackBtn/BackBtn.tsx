import "./BackBtn.css";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();

  const elm = useMemo(() => {
    return (
      <div className="BackBtn-parent" onClick={() => navigate(-1)}>
        Back
      </div>
    );
  }, [navigate]);

  const btn = useMemo(() => {
    return window.location.pathname !== "/" && elm;
  }, [elm]);

  return <>{btn}</>;
}

export default BackBtn;
