import React, { Component } from 'react';


import Splash from './components/Splash/index.jsx';
import Content from './components/Content/index.jsx';
import Footer from './components/Footer/index.jsx';
import HeaderStyle from './components/style.jsx';
class App extends Component {
  render() {
    const titles = ['Serial Hobbiest', 'Freestyle Drones', 'Photography', 'Programming', "I'm All Around You"];
    const text = ["Me and my dad have a tnedency to constantly trade and buy tuys going from hobby to hobby. We have been doing RC for a long time, we started out racing RC cars, then we moved to flying RC airplanes, then Helicopters, and now I am hooked on racing drones. I build, fly, and mostly crash racing drones with most of my free time. I have also been into downhill longboarding and photography for a long time. Due to my obsession with having as many hobbies as possible my friends dubbed me a Serial Hobbiest and now that's what I tell people.",
    "For over a year now I have been into 'racing drones', also called Mini Quads or Mini Quadcopters. I don't do much racing though, I am into freestyle. I use all the same technology in racing drones, but I stick a GoPro on the front and record my flights stringing together flips loops and dives striving to be artistic and smooth (key word is striving). You can find my YouTube channel Sp00f FPV below. I've just built my first full sized racing drone at the begining of this year, I tought myself the basics of CAD and designed the frame myself and had it cut by a friend, designing the entire thing from the ground up. You can see a short article I wrote about that build below. That frame had some issues with the tollerences though from a combination of a budget cut and poor design, so I have rebuilt it onto a nicer frame.",
    "For as long as I can remember I have been into photography. I went through several family digital cameras as a child untill I enherited my grandfathers old Cannon, then after that I got the Cannon Rebel t5i for christmas. My family goes on many adventures and I love taking this camera along to capture the memories. I have always entered my photos into the Morgan County 4H fair and typicly do pretty well, I have sent a couple to the state fair. I love geeking out over photography and I am always trying to learn how to make my images clearer and more creative.",
    "I have been coding snese about 7th grade. I started with a HTML class at my school, and quickly moved through HTML5. I have been through many different languages and aim to have a broad scope of programming experience. I have experience with front end web, front end javascript, mobile apps, games, light web servers with Node, basics of React, and more. I am always looking for my next programming challenge and pushing myself to stay ahead and ready for a career in programming.",]
    const listItems = ['HTML', 'Node.js', 'React.js', 'Python', 'Unity', 'Swift'];

    var content;
    if (window.innerWidth > 1120){
      content =
              <div>
                <Splash />
                <HeaderStyle />
                <Content title={titles[0]} text={text[0]} section="sec1"/>
                <div className="s2style1 style"></div>
                <Content title={titles[1]} text={text[1]} section="sec2"/>
                <div className="s3style1 style"></div>
                <Content title={titles[2]} text={text[2]} section="sec3"/>
                <div className="s4style1 style"></div>
                <Content title={titles[3]} text={text[3]} section="sec4" list={listItems}/>
                <div className="s5style1 style"></div>
                <Footer />
              </div>;
    }else {
      content =
          <div>
            <Splash />
            <Content title={titles[0]} text={text[0]} section="sec1"/>
            <Content title={titles[1]} text={text[1]} section="sec2"/>
            <Content title={titles[2]} text={text[2]} section="sec3"/>
            <Content title={titles[3]} text={text[3]} section="sec4" list={listItems}/>
            <Footer />
          </div>;
    }
    return(
      <div>{content}</div>
    );
  }
}

export default App;
