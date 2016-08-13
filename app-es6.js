require("babel-polyfill");

import request from "request";

// promise returning function
function get (url){
  return new Promise(function(resolve, reject){
    request({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function(err, resp, body){
      if(err){
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}


// create a new "async" function so we can use the "await" keyword
async function printPublicGists(){
  // "await" resolution or rejection of the promise
  // use try/catch for error handling
  try {
    console.log("Before1")
    console.log("Before2")
    console.log("Before3")
    console.log("Before4")
    console.log("Before5")
    console.log("Before6")
    console.log("Before7")
    console.log("Before8")
    var gists = await get('http://www.mocky.io/v2/5185415ba171ea3a00704eed');
    console.log("After1")
    console.log("After2")
    console.log("After3")
    console.log("After4")
    console.log(gists.hello)
    console.log("After5")
    console.log("After6")
    console.log("After7")
    console.log("After8")
    console.log("After9")
    console.log("After10")
  } catch (e) {
    // promise was rejected and we can handle errors with try/catch!
  }
}

console.log("Starting..")
printPublicGists();
console.log("Ending1..")
console.log("Ending2..")
console.log("Ending3..")
console.log("Ending4..")
console.log("Ending5..")


