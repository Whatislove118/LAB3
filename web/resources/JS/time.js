$(document).ready(function () {
        setInterval(getTime, 11000);
        getTime();
});
function getTime() {
    let date = new Date();
    document.getElementById('time').innerHTML=date;
}