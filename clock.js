function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function changeColor() {
    document.getElementById('h3').style.color = 'red';
}

function ChangeMe() {
	document.getElementById('h4').style.color = 'Orange';
}

let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];
let index = 0;
function TouchMe() {
	document.getElementById('h5').style.color =  colors[index];
	index = (index + 1) % colors.length;
	
}

const button = document.getElementById('button');
button.addEventListener('click', function() {
	const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = randomColor;
  document.body.style.backgroundColor = randomColor;
  button.style.color = 'black';
})
 

 