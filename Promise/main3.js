//Promise chaining-> async->sequential code

let fs=require('fs');

function task(path){
    //async promise
    return new Promise(function(resolve,reject){
        fs.readFile(path,function(err,data){
            if (err) reject(err);
            else resolve(data);
        })
    })
}

let p1=task('f1.txt');
p1.then(function(data){
    console.log('task 1');
    console.log(data+"");
})

p1.then(function(){
    console.log('task 2');
})

