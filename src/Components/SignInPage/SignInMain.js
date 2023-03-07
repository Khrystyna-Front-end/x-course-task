import React from "react";
import "./SignInMain.css";
import SignInForm from "./SignInForm.js";
// import "./H&H.css";
import avatar from "../.././images/avatar.png";
import img1 from "../.././images/img1.jpg";
import ReactAudioPlayer from "react-audio-player";
import People from "../../audio/People.mp3";

function SignInMain() {
  return (
    <>
      <div className="sign-in-container container-fluid d-flex justify-content-evenly">
        <main className="order-2">
          <h2 className="animationPulse">❤Pray for Ukraine❤</h2>
          <img
            src={avatar}
            alt="Фото"
            className="avatar d-block shadow-lg p-3 mb-5 bg-body rounded"
          />

          <SignInForm />
        </main>

        <div id="slides" className="slide-show">
          <div className="slides-inner">
            <img
              src={img1}
              width="405"
              height="410"
              alt="God'sMother"
              className="shadow"
              id="img"
            />
          </div>
        </div>
      </div>
      <ReactAudioPlayer src={People} autoPlay controls className="w-25" />
    </>
  );
}

export default SignInMain;
