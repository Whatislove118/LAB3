
$(document).ready(function () {
    document.getElementById('rValue').innerText='1.0';
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    canvas.addEventListener('click',checkClick,false);
    $('#R_hidden').val(0);
    for(let i=-5; i<4;i++){
        $('#cb'+i).click(function () {
            changeX(i)
        });
    }
    refresh();
    drawGraphWithR(ice.ace.instance('R').getValue());
    drawPicture();
    $('#rHid').val('');
    $('#result').bind("DOMSubtreeModified",function(){
        drawPoints();
        refresh();
    });


});

function refresh() {
    $('#textY').val('');
    $('#xHid').val('');
    $('#yHid').val('');
    for(let i=-5; i<4;i++){
        $('#cb'+i).css('color','blue');
    }
}

function changeX(valueX) {
    for(let i=-5; i<4;i++){
        $('#cb'+i).css('color','blue');
    }
    $('#cb'+valueX).css('color','red');
    $('#xValue').val(valueX);
    console.log($('#xHid').val());
}

function paintArc(x,y) {
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    let xArc=x*28 +140;
    let yArc=y;
    ctx.beginPath();
    ctx.arc(xArc, yArc, 3, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();


}


function checkClick(e) {
    let r=ice.ace.instance('R').getValue();
    console.log('R in draw = '+r);
    let x = e.offsetX;
    let y = e.offsetY;
    x=(x-140)/28;
    y=-(y-140)/28;
    $('#xHid').val(x);
    $('#yHid').val(y);
    $('#rHid').val(r);
    $('#submitCanvas').trigger('click');
    console.log($('#xHid').val()+"  " + $('#yHid').val()+"  " + $('#rHid').val());
    drawPoints();
}
function drawPoints(){
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    let rows = $('#result_table').find('tr');
    let number = rows.length;
    console.log("Count rows = " + number);
    for(let i = 1; i < number; i++){
        let tdSet = $(rows[i]).find('td');
        let r = Number($(tdSet[2]).text().trim()*2);
        let R = Number($('#rHid').val());
        if(r == R) {
            if ($(tdSet[3]).text().trim() == 'HEADSHOT') {
                ctx.fillStyle = 'green';
            } else {
                ctx.fillStyle = 'red';
            }
        } else {
            ctx.fillStyle = 'grey';
        }
        if(String($(tdSet[0]).text().trim())!=""){
            paintArc($(tdSet[0]).text(), $(tdSet[1]).text());
        }
        console.log($(tdSet[0]).text(), $(tdSet[1]).text(),$(tdSet[3]).text());
    }
}
function drawPicture() {
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
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
    if(r==0){
        $('#err3').css("visibility", 'visible');
        return false;
    }
    let canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    $('#rHid').val(r);
    r=Number(r)*28/2;
    console.log("start draw graph with R="+ ice.ace.instance('R').getValue());
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.moveTo(140,140);
    ctx.arc(140,140,r/2,1/2*Math.PI,Math.PI,false);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(140,140);
    ctx.fillRect(140,140,r,-r/2);
    ctx.beginPath();
    ctx.lineTo(140+r/2,140);
    ctx.lineTo(140 ,140+r/2);
    ctx.lineTo(140,140);
    ctx.fill();
}
function checkX(){
    let countX=0;
    for(let i=-5; i<4;i++){
        if($('#cb'+i).prop('style').color=='blue'){
            countX++;
            // console.log("countX = " + countX);
        }
    }
    if(countX==9){
        $("#err1").css("visibility", 'visible');
        return false;
    }else{
        return true;
    }
}
function checkY() {
    let checkY = document.forms['form'].elements['textY'].value.trim();
    if (checkY ==="") {
        $("#err2").css("visibility", 'visible');
        return false;
    } else {
        if (!/^(-?\d+)([.,]\d+)?$/.test(checkY)) {
            $("#err2").css("visibility", 'visible');
            $("#err2").text("Y может быть только числом!")
            return false;
        }
        if (checkY <= -5 || checkY >= 3) {
            $("#err2").css("visibility", 'visible');
            $("#err2").text("Y не входит в ОДЗ");
            return false;
        }
    }
    return true;
}

function checkAll() {
    console.log(checkY())
    console.log(checkX())
    chY=checkY();
    chX=checkX();
    return (chX && chY);
}
