import React from 'react';

export default class Footer extends React.Component {
  render (){
    return(
      <div className="sections sec5">
          <h1>I'm All Around You</h1>
          <div className="linkWraper">
            <div className="contactDivWrapper"><a href="https://github.com/DavidRichardson2019"><div className="contactDiv GitLink"></div><p>GitHub</p></a></div>
            <div className="contactDivWrapper"><a href="https://www.youtube.com/channel/UCjsB8JFeTk01vV01NaFUMXg?view_as=subscriber"><div className="contactDiv MainYoutubeLink"></div><p>Main Youtube</p></a></div>
            <div className="contactDivWrapper"><a href="https://www.youtube.com/channel/UCaprf5plnAIh4oaf1zo7KUA"><div className="contactDiv KwadYoutubeLink"></div><p>sp00f FPV</p></a></div>
            <div className="contactDivWrapper"><a href="https://www.facebook.com/profile.php?id=100004653886281"><div className="contactDiv FacebookLink"></div><p>Facebook</p></a></div>
            <div className="contactDivWrapper"><a href="https://rotorbuilds.com/profile/4094/"><div className="contactDiv RotorBuildsLink"></div><p>Rotor Builds</p></a></div>
          </div>
      </div>
    );
  }
}
