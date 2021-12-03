
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const canvas3 = document.getElementById('canvas2');
const ctx3 = canvas2.getContext('2d');

canvas1.width = 500;
canvas1.height = 250;

canvas2.width = 500;
canvas2.height = 250;

canvas3.width = 500;
canvas3.height = 250;

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

console.log(document.getElementById('img2'));
const input = document.querySelector('input');
input.addEventListener('change', async function(e) {
  const [file] = e.target.files;
  //var img = new Image();
  //img.onload = function(){
    //ctx3.drawImage(img,0,0);
  //}
  //img.src = file;
  //ctx2.drawImage(file, 0,0, 500, 250);
  const arrayBuffer = await file.arrayBuffer();
  const byteArray = new Uint8Array(arrayBuffer);
  const signature = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82];
  const META_SIZE = 4;
  const chunks = [];
  const hexString = Array.prototype.map.call(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join(' ');
  const indivBits = hexString.split(' ');
  let tmpChunk = [];
  indivBits.forEach(i => {
    if  (tmpChunk.length < 8) tmpChunk.push(i);
    else {
      let str = '';
      tmpChunk.forEach(j => str += j);
      chunks.push(hex_to_ascii_self(str));
      tmpChunk = [];
      tmpChunk.push(i);
    }
  });

  console.log(chunks);
  let isIcc = false;
  for(let i = 0; i<chunks.length; i++) {
    if (chunks[i].includes('iCC')) {
      isIcc = true;
      alert('Image has ICC Profile !');
      break;
    }
    else if (chunks[i].includes('IDAT')) {

      break;
    }
  }
  if (!isIcc) {
    alert("Image doesn't have ICC Profile");
  }
});

function hex_to_ascii_self(str1)
{
  var hex  = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
