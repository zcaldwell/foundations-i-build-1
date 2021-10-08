// import functions and grab DOM elements
const button = document.getElementById('generate');
const randomNum = document.getElementById('random-num');
// initialize global state

// get user input
// use user input to update state 
// update DOM to reflect the new state

button.addEventListener('click', ()=> {
    var theRandomNum = Math.floor(Math.random() * 100) + 1 ;
    console.log(theRandomNum);
    randomNum.textContent = theRandomNum;
    
});
