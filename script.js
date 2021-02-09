const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

//initialise load value
let load = 0;

//setInterval function for increamenting the load value every 30 seconds
let int = setInterval(blurring,30);

//create a function to increament load value by 1
function blurring(){
  load++
  if(load > 99){
    //user clearInterval function to clear the setInterval value after it reached load value of 99
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  //this reduce text opacity from 1 to 0 as the text value increase from 0% to 100%
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  //this will blur the background from 30px to 0 as the text value increase from 0% to 100%
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0 )}px)`
}
//Function to map on range of number to another from stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}