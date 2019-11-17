let canvas = document.getElementById('graph');
let ctx = canvas.getContext('2d');
$(document).ready(function () {
    widget = ice.ace.instance('j_idt8-R').getValue();
   //document.getElementById('j_idt8-R').addEventListener(s,drawGraphWithR(ice.ace.instance('j_idt8-R').getValue()));
    for(let i=1;i<10;i++){
        $('#j_idt8-cb'+i).click(function () {
            $('#j_idt8-xValue').val( $('#j_idt8-cb'+i).val());
        })
    }

});

let listOfPoint = [];
class Point {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
function drawPicture() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, 140);
    ctx.lineTo(280, 140);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 0);
    ctx.lineTo(140, 280);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 0);
    ctx.lineTo(136, 5);
    ctx.moveTo(140, 0);
    ctx.lineTo(144, 5);
    ctx.stroke();
    ctx.moveTo(280, 140);
    ctx.lineTo(275, 136);
    ctx.moveTo(280, 140);
    ctx.lineTo(275, 144);
    ctx.stroke();
    for (let i = 28; i <= 252; i += 28) {
        ctx.beginPath();
        ctx.moveTo(i, 140);
        ctx.lineTo(i, 144);
        ctx.lineTo(i, 136);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(140, i);
        ctx.lineTo(144, i);
        ctx.lineTo(136, i);
        ctx.stroke();
    }
    let countI = -4;
    for (let i = 28; i <= 252; i += 28) {
        if (i <= 112) {
            ctx.fillText(countI / 2 + 'R', i - 8, 155);
            ctx.fillText(-countI / 2 + 'R', 148, i + 4);
            countI++;
        } else if (i == 140) {
            ctx.fillText(countI, i + 5, 155);
            countI++;
        } else {
            ctx.fillText(countI / 2 + 'R', i - 8, 155);
            ctx.fillText(-countI / 2 + 'R', 148, i + 4);
            countI++;
        }
    }
}

function drawGraphWithR(r) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    r=Number(r)*28/2;
    console.log("start draw graph with R="+ ice.ace.instance('j_idt8-R').getValue());
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.moveTo(140,140);
    ctx.arc(140,140,r,-Math.PI,-Math.PI/2,false);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(140,140);
    ctx.fillRect(140,140,-r/2,r);
    ctx.beginPath();
    ctx.lineTo(140+r,140);
    ctx.lineTo(140 ,140-r/2);
    ctx.lineTo(140,140);
    ctx.fill();
    drawPicture();
}

