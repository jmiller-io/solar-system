console.log('hi from main')

var mercury = document.getElementById('mercury')
console.log(mercury);

var t = 0;

function render() {
  t+= 0.01;
  requestAnimationFrame(render);
  mercury.setAttribute('position', '3 ' +(Math.sin(t*2)+1)+' 5')
}

render();
