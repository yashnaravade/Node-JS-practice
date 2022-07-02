const fs= require('fs');
fs.readFile('path.js', 'utf8', (err, data)=>{
    console.log(data);
    console.log(err);

})
