
// Using Promise
function getStuffFromDatabase(resolve,reject){
  var data = "whee"
  setTimeout(function(){
    // if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      resolve(data);
    // }
  }, 1000);
  // reject(); // comment this line in and out!
  // return data;
}

function requestDataFromDatabase(){
console.log('running');
//creates promise
var data = new Promise(function(resolve,reject){
  getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
});

// fires with resolve
data.then(function(data){
  console.log(data, "ASynchronous");
  for (var i = 0; i < data.length; i ++){
    console.log(data[i].name);
  }
});

// it fires with reject
data.catch(function(){
  console.log('failure');
})

console.log('shows end');
}
requestDataFromDatabase();



// // WITHOUT using callback correctly
// //simulated really slow DB call.
// function getStuffFromDatabase(callback){
//     // console.log(typeof(callback));
//     var data;
//     var myTimer = setTimeout(function(){
//     //   console.log("I am in setTimeout");
//       if (typeof(callback) == 'function'){
//         //it just got back from the DB!
//         data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//         callback(data);
//       }
//     }, 6000);
//     // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
//     return data;
//   }    

//   //simulated request (failing);
//   function requestDataFromDatabase(){
//     var data = getStuffFromDatabase(); // this should return my data right??
//     console.log(data);
//   }

//   function catchFly(){
//     console.log('I just caught a fly!');
//   }
//   requestDataFromDatabase();
//   // keep running my program!
//   console.log('Hello');
//   catchFly();
//   //etc.
  


// // Using Callback
// //simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   console.log(typeof(callback));
//   var data;
//   var myTimer = setTimeout(function(){

//     console.log("ready to check the callback if it is a function after 6 seconds. the result is", typeof(callback))

//     if (typeof(callback) == 'function'){
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       //  return data
//       callback(data);
    
//     }
//   }, 6000);
//   return data;
// }    
// // ************CHANGES HERE **************
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//     console.log("\n", data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   console.log(data, "Synchronous");
// }
// //***************** END CHANGES **********************

// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();


// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.
 