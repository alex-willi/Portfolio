import { Link } from "react-router-dom";
import React from "react";

function Footer(props) {
  return (
    <div>
      <h1>Footer</h1>
      <a href={"https://www.linkedin.com/in/alex-willi/"} target="_blank">
        Linkedin
      </a>
      &emsp;
      <a href={"https://github.com/alex-willi"} target="_blank">
        Github
      </a>
      &emsp;
      <a
        href={"https://app.netlify.com/teams/alex-willi/overview"}
        target="_blank"
      >
        Netlify
      </a>
    </div>
  );
}

export default Footer;
