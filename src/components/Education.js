import React from 'react';
import '../styles/Education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className="Education">
        <h3>EDUCATION</h3>
        <ul>
          <li>
            <span className="years">1990</span>
            <div className="education">
              <span className="firstLine">I was born in Katowice</span>
              <br />
              <span className="secondLine">
                {' '}
                Lorem ipsum dolor sit amet,consectetur adipisicing
                elit.Sapiente, exercitationem,totam,dolore est aut modi.
              </span>
            </div>
          </li>
          <li>
            <span className="years">2005</span>
            <div className="education">
              <span className="firstLine">
                Second school specializing in artistic
              </span>
              <br />
              <span className="secondLine">
                {' '}
                Eos,explicabo,nam,tenetur et ab elus deserunt adpematur ipsum
                ducimus quibusdam quis voluptatibus.
              </span>
            </div>
          </li>
          <li>
            <span className="years">2009</span>
            <div className="education">
              <span className="firstLine">
                First level graduation in Graphic Design
              </span>
              <br />
              <span className="secondLine">
                {' '}
                Aspermatur,mollitia,quos maxime eius suscipit sed beatae ducimus
                quibusdam perferendis?lusto,quibusdam adperiores unde repellat.
              </span>
            </div>
          </li>
          <li>
            <span className="years">2012</span>
            <div className="education">
              <span className="firstLine">
                Second level graduation in Graphic Design
              </span>
              <br />
              <span className="secondLine">
                {' '}
                Ducimus,aliquam tempore tempore autem itaque et accusamtium!
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Education;
