let fs=require('fs');

function task(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,function(err,data){
            if (err) reject(err);
            else resolve(data);
        })
    }).then(function(data){
        console.log(data+"");
    }).catch(function(err){
        fs.writeFile(path, 'Undertanding promises', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    })
}

task('f1.txt');
task('f4.txt');
task('f3.txt');