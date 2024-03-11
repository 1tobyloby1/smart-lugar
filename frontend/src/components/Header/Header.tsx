import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDateTime = currentDateTime.toLocaleDateString(
    "en-US",
    options
  );
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <header className="header">
      <img src="/assets/images/Logo.png" alt="Logo" height={50} />
      <div className="right-content">
        <h1>{formattedTime}</h1>
        <h4>{formattedDateTime}</h4>
      </div>
    </header>
  );
}

export default Header;
