// // for in loop
// arr = [1,2,3,4,5,6]
// for (let el in arr){
//     console.log(el, arr[el]);
// }

var _ = {
    each: function each(arr, callback) {
        console.log("Array:", arr);
        for(var i = 0; i < arr.length; i++) {            
             callback(arr[i]); // invoking the callback many times... delegation!
        }        
    },
    map: function map(arr, callback) {
        console.log("Array:", arr);
        for(var i = 0; i < arr.length; i++) {            
             callback(arr[i]); // invoking the callback many times... delegation.
        }  
    },
    find: function find(arr, callback) {   
        console.log("Array:", arr);
        for(var i = 0; i < arr.length; i++) {            
             callback(arr[i]); // invoking the callback many times... delegation.
            //  console.log(finds)
             if (finds.length != 0){ return finds}
        }  
    },
    filter: function filter(arr, callback) { 
        console.log("Array:", arr);
        for(var i = 0; i < arr.length; i++) {
            callback(arr[i]); // invoking the callback many times... delegation.
        }  
    },
    reject: function reject(arr, callback) { 
        console.log("Array:", arr);
        for(var i = 0; i < arr.length; i++) {
            callback(arr[i]); // invoking the callback many times... delegation.
        }  
    },
    reduce: function reduce(arr, callback, memo) { 
        console.log("Array:", arr);        
        for(var i = 0; i < arr.length; i++) {  
            if (i==0){ reduces = memo}            
            // console.log(reduces, arr[i]);
            callback(reduces, arr[i]); // invoking the callback many times... delegation.
            // console.log(reduces, arr[i]);
            // console.log("~~~~~~~~~~~~~~~~~~~")
        }  
    },
}
var res = [];
_.each( [1,2,3], function(n){ res.push(n) })
console.log(`"each" Result => ${res}`); // this will return [1,2,3].
console.log()

var evens = [];
_.filter([1,2,3,4,5,6], function(num){num % 2 ==0 ? evens.push(num):undefined });
console.log(`"filter -> even" Result => ${evens}`); // this will return [2,4,6].
console.log()

var odds = [];
_.reject([1,2,3,4,5,6,7,8,9], function(num){ num % 2 != 0 ? odds.push(num):undefined });
console.log(`"reject -> even" Result => ${odds}`); // this will return [1,3,5,7,9].
console.log()

var maps = [];
_.map([1, 2, 3], function(num){  maps.push(num * 3); });
console.log('"map" Result => ' + maps); // this will return [3,6,9].
console.log()

var finds = [];
_.find([1, 2, 3, 4, 5, 6, 7, 8, 9], function(num){ num % 2 == 0 ? finds.push(num):undefined});
console.log('"find -> 1st even" Result => ' + finds);  // this will return [2].
console.log();

var reduces = 0;
_.reduce([1, 2, 3, 4], function(memo, num){ reduces = memo + num; }, 0);
console.log('"reduce -> based on init value " Result => ' + reduces); // this will return 10.
console.log()