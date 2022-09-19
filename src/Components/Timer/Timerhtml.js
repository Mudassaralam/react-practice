import React, { useEffect, useState } from "react";
// import './timerhtml.css';
function Timerreact() {
    const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter === 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);
  return (
    <>
      <h2>Timer in React </h2>

      <div className="circular">
        <div className="inner"></div>
        <div className="number">100%</div>
        <div className="circle">
          <div className="bar left">
            <div className="progress"></div>
          </div>
          <div className="bar right">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Timerreact;
