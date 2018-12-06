// create Promise constructor, Promise object
// The constructor is primarily used to wrap functions that do not already support promises.

// var promise1 = new Promise(function(resolve, reject){
//     // throw "Oh~No!~"; // Error message, caught.

//     setTimeout(function() {        
//         resolve('zyl~~ arrived!');
//         // reject('#%$#^%*&684654dsaf');
//         console.log("where am i?")
//     }, 2000);
// })
// const makeRequest = async () => {
//     try{
//         data = await promise1;
//         console.log(data);
//     } catch (err){
//         console.log(`Error message ${err}`);
//     }
    
// }

// makeRequest();
// console.log("~~ I am faster than you think ! ~~\n");


// API calls
const request = require('request')
const rp = require('request-promise')

let myVal;
let options = {
    method:'get',
    uri: 'https://pokeapi.co/api/v2/pokemon/77',
    json: true
};

// return promise object
let myPro = rp(options)
    .then(function (data){
        // console.log(data);
        // console.log(data.abilities[0].ability.name);        
        return data;
    })
    .catch(function(err){
        console.log("API call failed!")
        // console.log(err)
    }
);

// return Promise object
console.log(`What's this 'myPro'? => Promise`, typeof(myPro)); 
console.log()

//  Async/Await built on top of Promise object 'myPro'
const makeRequest = async () => {
    try{
        let awData = await myPro; // using Promise object => myPro
        ability1 = awData.abilities[0].ability.name;
        ability2 = awData.abilities[1].ability.name;
        ability3 = awData.abilities[2].ability.name;
        name = (awData.name).toUpperCase();
        console.log(`Pokemon's name: ${name} ~ abilities: ${ability1}, ${ability2}, ${ability3}`);
        return awData.abilities[0].ability.name;
    } catch (err){
        console.log(`Async Await Error message : ${err}`);
    }    
}

// run the Async/Await function
makeRequest();
