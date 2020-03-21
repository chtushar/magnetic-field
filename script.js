let grid = document.querySelector('.grid');
let lineArray = [];
function createGrid(g, n) {
  for (let i = 0; i < n; i++) {
    let node = document.createElement('div');
    node.className = 'line';
    lineArray.push(node);
    g.appendChild(node);
  }
}

createGrid(grid, 200);

function setPositionOfLine(l, x, y){
  let slopeOfLine = y/x;
  let angleTheta = Math.atan(slopeOfLine) * (180/ Math.PI);

  l.style.transform = `rotate(${angleTheta}deg)`;
}


function positionMouse(e){
  lineArray.forEach(el => {
    const x = e.x - el.offsetLeft - 550;
    const y = e.y - el.offsetTop - 230;

    setPositionOfLine(el, x, y);
  });
}

document.addEventListener('mousemove', _.throttle(positionMouse, 50));
