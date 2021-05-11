// constants for room 1
const switch1 =  document.querySelector(".switch1")
const room1 =  document.querySelector(".room1")
const light1 = document.querySelector(".light1")
const wrong1 = document.querySelector(".wrong1")

// constsants for room 2
const switch2 = document.querySelector(".switch2")
const room2 =  document.querySelector(".room2")
const light2 = document.querySelector(".light2")
const wrong2 = document.querySelector(".wrong2")

// constsants for room 3
const switch3 =  document.querySelector(".switch3")
const room3 =  document.querySelector(".room3")
const light3 = document.querySelector(".light3")
const wrong3 = document.querySelector(".wrong3")

// constants for room 4
const switch4 =  document.querySelector(".switch4")
const room4 =  document.querySelector(".room4")
const light4 = document.querySelector(".light4")
const ghost = document.querySelector(".ghost-button")

// constants for room 5
const switch5 =  document.querySelector(".switch5")
const room5 =  document.querySelector(".room5")
const light5 = document.querySelector(".light5")
const wrong5 = document.querySelector(".wrong5")

// constants for the ghost when room 4 is turned on
const ghostoff = document.querySelector(".ghost-button")
const winner = document.querySelector(".win")

// Event listener for room 1 to turn on and off
switch1.addEventListener(
  "click", () => {
    switch1.classList.toggle("clicked");
    room1.classList.toggle("room-on");
    light1.classList.toggle("light-on");
    wrong1.classList.toggle("wrong");
  });

// Event listener for room 2 to turn on and off
switch2.addEventListener(
  "click", () => {
    switch2.classList.toggle("clicked");
    room2.classList.toggle("room-on");
    light2.classList.toggle("light-on");
    wrong2.classList.toggle("wrong");
  });

// Event listener for room 3 to turn on and off
switch3.addEventListener(
  "click", () => {
    switch3.classList.toggle("clicked");
    room3.classList.toggle("room-on");
    light3.classList.toggle("light-on");
    wrong3.classList.toggle("wrong");
  });

// Event listener for room 4 to turn on and off
switch4.addEventListener(
  "click", () => {
    switch4.classList.toggle("clicked");
    room4.classList.toggle("room-on");
    light4.classList.toggle("light-on");
    ghost.classList.toggle("ghost-on");

  });

// Event listener for room 5 to turn on and off
switch5.addEventListener(
  "click", () => {
    switch5.classList.toggle("clicked");
    room5.classList.toggle("room-on");
    light5.classList.toggle("light-on");
    wrong5.classList.toggle("wrong");
  });

// Event listener for ghost animation, ghost death, winner message
ghostoff.addEventListener(
  "click", () => {
    ghostoff.classList.toggle("ghostbuster");
    winner.classList.toggle("winner")
  });