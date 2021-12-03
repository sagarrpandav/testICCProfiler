
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');


canvas1.width = 500;
canvas1.height = 250;

canvas2.width = 500;
canvas2.height = 250;

const tenShades = [
  [255, 255, 255],
  [226, 226, 226],
  [198, 198, 198],
  [171, 171, 171],
  [145, 145, 145],
  [119, 119, 119],
  [94, 94, 94],
  [71, 71, 71],
  [48, 48, 48],
  [27, 27, 27]
];

const width = 100;
const height = 1000;
let x = 10, y = 10;

/*tenShades.forEach(i => {
  ctx.fillStyle = `rgb(${i[0]}, ${i[1]}, ${i[2]})`;
  ctx.fillRect(x, y, width, height);
  x += width;
});*/
ctx1.drawImage(document.getElementById('img1'), 0,0, 500, 250);
ctx2.drawImage(document.getElementById('img2'), 0,0, 500, 250);


/*const input = document.querySelector('input');
input.addEventListener('change', async function(e) {
  const [file] = e.target.files;
  const arrayBuffer = await file.arrayBuffer();
  console.log('arrayBuffer', arrayBuffer);
  // TODO: Let's decode arrayBuffer
  const imageData = decode(arrayBuffer);
  console.log('imageData', imageData);
});*/
