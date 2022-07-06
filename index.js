// console.log("Hello world");
// console.log(5+5);
// const yash= require("./logger");
// console.log(yash);

const os= require("os");
console.log(os.platform());
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.type());
console.log(os.release());
// console.log(os.homedir());
console.log(os.hostname());


const log= require("./logger");
log.log1();
