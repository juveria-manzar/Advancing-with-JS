if (10 || 100) {
    console.log(10 || 100)
}

10 || 100 //this returns 10
0 || 100 //this returns 100

function doThis() {
    console.log('do it')
}

10 || doThis()

10 && 100 //100 returned

var obj = {
    doSomething: function() {
        console.log('...Something')
    }
}


//this acts like a gaurd variable. avoids error
obj.doSomething && obj.doSomething()
