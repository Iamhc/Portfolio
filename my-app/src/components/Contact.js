import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div id="social">
     

      <div style={{ marginTop: "3px" }}>
        <a
          href="https://github.com/Iamhc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="GitHub" width="25px" height="25px" />
        </a>
      </div>

      <div style={{ marginTop: "1px" }}>
        <a
          href="https://www.linkedin.com/in/himanshu-choudhary-188161218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.jpg" alt="LinkedIn" width="25px" height="25px" />
        </a>
      </div>
    {/* ✅ Gmail Added */}
      <div style={{ marginTop: "1px" }}>
        <a href="mailto:himanshuchaudhary586@gmail.com">
          <img src="/gmail.png" alt="Gmail" width="25px" height="25px" />
        </a>
      </div>


      <div style={{ marginTop: "1px" }}>
        <a
          href="https://www.sololearn.com/en/profile/19733358"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/sololearn.png" alt="SoloLearn" width="25px" height="25px" />
        </a>
      </div>

     
    </div>
  );
};

export default Contact;