const os = require('os')
const Events = require('events')
class Logger extends Events{
    log(a, b) {
        this.emit('calc', a+b)
    }
}

const logger = new Logger()
logger.on('calc', data => {
    console.log(data);
})
logger.log(3,2);
logger.log(1,2);
logger.log(5,2);
// console.log(os.platform());
// info cpu

// console.log(os.cpus());
// architect
// console.log(os.arch());

// memory
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
