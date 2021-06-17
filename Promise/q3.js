function test(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(5);
        },2000)
    })
}

let p=test();

setTimeout(function(){
    p.then(function(){
        console.log(2);
    })
},3000)

p.then(function(){
    console.log(1);
})
