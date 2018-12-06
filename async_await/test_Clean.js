// Promises
const makeRequest = () =>
getJSON() // return a promise
  .then(data => {
    console.log(data)
    return "done"
  })

makeRequest()

// ================================================================================
// Async/Await
const makeRequest = async () => {
    console.log(await getJSON()) // getJSON() return a promise
    return "done"
  }
  
makeRequest()
// makeRequest().then((result) => {
//     // do something
// })
