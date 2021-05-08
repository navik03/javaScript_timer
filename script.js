"use strict";

const countdown = () => {
  const countDate = new Date("May 17,2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //Working the timing
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMin = Math.floor((gap % hour) / min);
  const textSec = Math.floor((gap % min) / sec);
  console.log(textDay);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".min").innerHTML = textMin;
  document.querySelector(".sec").innerHTML = textSec;
};

setInterval(countdown, 1000);
