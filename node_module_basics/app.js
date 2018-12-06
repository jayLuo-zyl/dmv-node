module.exports = {
    showMsg: function(){
        console.log("***I am now displaying an app in app.js!***");
    },

    sayHi: function(){
        console.log("***This is 2nd function in app.js!***");        
    },

    getSum: (num1, num2)=>{
        console.log("***This is an addition***", num1+num2)
        
        // create Promise constructor, Promise object
        // The constructor is primarily used to wrap functions that do not already support promises.
        var promise1 = new Promise(function(resolve, reject){
            setTimeout(function() {
                resolve('zyl~~ arrived!');
              }, 1000);
        })

        promise1.then(function(val){
            console.log(val)
        })
        
        console.log("I am faster than zyl~~");
    }


}

