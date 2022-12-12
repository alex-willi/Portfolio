import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");

    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      <img src={about.headshot} width="150px" />
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
