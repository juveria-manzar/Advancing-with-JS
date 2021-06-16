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
    console.log(data+"");
    let p2=task('f2.txt');
    return p2;
}).then(function(data){
    console.log(data+"");
    let p3=task('f5.txt');
    return p3;
}).then(function(data){
    console.log(data+"");
    let p4=task('f4.txt');
    return p4;
}).catch(function(err){
    console.log(err);
})