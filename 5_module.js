var filter = require('./5_module_supported');


var path = process.argv[2];
var filerStr = process.argv[3];

filter(path, filerStr, (err, list)=>{
    if(err){
        console.log('There was an error, please try again!');
        
    }

    list.forEach(element => {
        console.log(element);
        
    });
})

