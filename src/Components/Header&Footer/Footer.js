import React from "react";
import "./H&H.css";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <p className="footer-text">
        Виконано в{"   "}
        <a
          className="app-link"
          href="https://prometheus.org.ua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prometheus
        </a>
        {"   "}
        &copy;{new Date().getFullYear()}
      </p>
    </div>
  );
}
export default Footer;
