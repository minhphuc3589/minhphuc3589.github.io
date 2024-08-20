import { useState } from 'react'
import './App.css';

function App() {
  const [previousHeaderID, setPreviousHeaderID] = useState('about')

  const chosenHeader = (e) => {
    var previousHeader = document.getElementById(previousHeaderID)
    var presentHeader = document.getElementById(e.id)

    if (e.id !== previousHeaderID) {
        presentHeader.classList.add("chosen")
        previousHeader.classList.remove("chosen")
        setPreviousHeaderID(presentHeader.id)
    }
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="background-header">
          <h1 id="about" className="text-header chosen" onClick={(e) => chosenHeader(e.target)}>ABOUT ME</h1>
          <h1 id="experience" className="text-header" onClick={(e) => chosenHeader(e.target)}>EXPERIENCE</h1>
          <h1 id="contact" className="text-header" onClick={(e) => chosenHeader(e.target)}>CONTACT ME</h1>
        </div>
      </div>

      <div className="type-mode">
        <div className="card">
          <div className="left-point">
            <img className="avatar" alt="" src={require("./pictures/newAvt.jpg")}/>
            <p className="nickname">Apollous</p>
            <br />
            <p className=""></p>
          </div>
          <div className="right-point">
            <p className="information">
              Họ tên: Trương Đoàn Minh Phúc
              <br />
              Năm sinh: xx/xx/2005
              <br />
              Quê quán: Cần Thơ
              <br />
              Học tại: Trường Đại học FPT
              <br />
              Sở thích: Đàn hát, Lập trình, Thiết kế 3D
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
