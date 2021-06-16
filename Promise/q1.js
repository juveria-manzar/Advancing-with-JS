let promise=new Promise(function(resolve,reject){
    reject('Rejected')
    reject('Rejected 1')
    reject('Rejected 2')
    reject('Rejected 3')
    reject('Rejected 4')
}).catch(function(err){
    console.log(err);
});