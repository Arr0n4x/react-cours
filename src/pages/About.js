import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>A propos</h1>
      <br />
      <p>
        Ce projet à été réalisé dans le but de m'entrainer et de découvrir
        React.js il s'agit d'un tuto fait par le youtoubeur From Scratch -
        Développement Web. lien à copier vers la vidéo :
        https://www.youtube.com/watch?v=K3D2rjAUQ3o&t=4710s Merci à lui pour son
        excellent travail :-)
      </p>
    </div>
  );
};

export default About;
