import React from 'react';
class Content extends React.Component {
  render() {
    const section = this.props.section;
    var stuff;

    if (section !== 'sec4') {
      stuff = <div className={ "sections " + ( this.props.section || "") }>
                  <h1>{this.props.title}</h1>
                  <p className="storyText">{this.props.text}</p>
                </div>;
    } else {
      stuff = <div className="sec4 sections">
                  <h1>{this.props.title}</h1>
                    <div className="content4"><div className="story4wrapper"><p className="storyText story4">{this.props.text}</p></div>
                    <div className="ul4Wrapper">
                      <ul className="ul4">
                        <li>HTML5</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>Python</li>
                        <li>Unity</li>
                        <li>Swift</li>
                      </ul>
                    </div></div>
                  </div>;
    }
    return(
      <div>
        {stuff}
      </div>
    );
  }
}
export default Content;
