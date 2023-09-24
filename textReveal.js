const textEl = document.getElementById('text');
const text = "Never stop exploring..."
let idx = 1;
let speed = 300;

writeText();
function writeText(){
  
  
  textEl.innerText = text.slice(0,idx)
  idx++

  if(idx>text.length){
    idx =1
  }

setTimeout(writeText,speed)

}