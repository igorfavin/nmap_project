const nmap = require('libnmap');
const opts = {
    range:[
    '192.168.15.5',
    '127.0.0.1'
    ]
};

nmap.scan(opts, function(err, report){
    if (err) throw new Error(err);

    for (let item in report){
        console.log(JSON.stringify(report[item]));
    }
});