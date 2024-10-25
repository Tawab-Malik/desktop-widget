import React from 'react';
import './section.css';

const Section = () => {
  return (
    <div>
      <div className="header">
        <div className="leftheader">
          <h2>Beginnen Sie Ihre Verkaufsreise 👋</h2>
          <p>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
        </div>
        <div className="reload-div">
          <img src="/images/help.svg" className="helpicon" alt="icon" />
          <a href="/" className="reload-button">Reload</a>
        </div>
      </div>

      <div className="main-grid">
        <div className="container">
          {/* Top Left Boxes */}
          <div className="box small-box box1 box-shadow">
            <img src="/images/image1.png" className="full-width-image" height="174" alt="blockimg1" />
          </div>
          <div className="box small-box box-shadow">
            <img src="/images/block2.png" className="full-width-image" height="174" alt="blockimg2" />
          </div>
          <div className="box small-box box-shadow">
            <img src="/images/block3.png" className="full-width-image" height="174" alt="blockimg3" />
          </div>
          <div className="fourmain">
            <div className="box small-box">
              <img src="/images/block4.png" className="full-width-image" height="145" alt="blockimg4" />
            </div>
          </div>

          {/* Middle Section */}
          <div className="box extra-large-box background-layer box-shadow textbox">
            <h3>Insert Random Video</h3>
            <button className="btn">Nesting</button>
          </div>
          <div className="box small-box box-shadow textbox">
            <input className="input" type="text" placeholder="Insert Random Quote" />
          </div>
          <div className="box small-box box-shadow">
            <img src="/images/block7.png" className="full-width-image" height="175" alt="blockimg7" />
          </div>
        </div>

        <div className="combine">
          {/* Bottom Section */}
          <div className="box large-box box-shadow textbox">
            <input className="input-block" type="text" placeholder="Insert textblock" />
          </div>
          <div className="box small-box box-shadow">
            <img src="/images/image1.png" className="full-width-image"  height="315" alt="blockimg8" />
          </div>
        </div>
      </div>


      {/* footer */}
      <div className='footer'>
          <p>Bereitgestellt von</p>
          <img src='/images/footer.svg' height='40px' width="130px" alt='img'></img>
      </div>
    </div>
  );
};

export default Section;
