const bulan = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var start = new Date();

var end = new Date(new Date().getTime()+(540*24*60*60*1000));

var loop = new Date(start);
while(loop <= end){        
   var newDate = loop.setDate(loop.getDate() + 1);
   loop = new Date(newDate);
}
document.writeln(`<h3>Hari ke 540 adalah Tanggal : ${loop.getDate()} ${bulan[loop.getMonth()]} ${loop.getFullYear()}</h3>`);  
