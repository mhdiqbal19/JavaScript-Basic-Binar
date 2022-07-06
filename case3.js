    const bulan = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const sekarang = new Date()
    
    const kemarin = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    const besok = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));

     document.writeln(`<h3>Tanggal Kemarin : ${kemarin.getDate()} ${bulan[kemarin.getMonth()]} ${kemarin.getFullYear()}</h3>`)
     document.writeln('<br>')
     document.writeln(`<h3>Tanggal Sekarang : ${sekarang.getDate()} ${bulan[sekarang.getMonth()]} ${sekarang.getFullYear()}</h3>`)
     document.writeln('<br>')
     document.writeln(`<h3>Tanggal Besok : ${besok.getDate()} ${bulan[besok.getMonth()]} ${besok.getFullYear()}</h3>`)