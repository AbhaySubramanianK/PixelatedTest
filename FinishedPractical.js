//Dependencies
const https = require('https');
const fs = require('fs');
const robot = require('robotjs')

robot.moveMouseSmooth(500, 500)
//list declarations
//let jsonString = [];
let count = 0
let getData = [];
let movieTitles = ["The%20Godfather", "The%20Conjuring","The%20Prestige","The%20Sixth%20Sense","Schindler's%20List","Saving%20Private%20Ryan","The%20Shawshank%20Redemption", "Pulp%20Fiction", "The%20Matrix", ];
let promises = [];

//function to fetch the movie data from the API
let getMovie = (movieTitle) => {
  return new Promise(function(resolve, reject){

    //defining the request packet
    let options = {
      hostname: 'api.themoviedb.org',
      port: 443,
      path: '/3/search/movie?api_key=47c8864e95442b34dd32054f4adc590b&language=en-US&page=1&include_adult=false&query=' + movieTitle,
      method: 'GET'
    };

    //success callback
    //sending the request packet to the API Url
    let req = https.request(options, (res) => {
      res.on('data', (d) => {
        try{
          let result = JSON.parse(d);
          obj = {Movie : result.results[0].original_title, Synopsis: result.results[0].overview  }
          resolve(obj);
        } catch(ex) {
            reject(ex);
        }
     });
    });

    //failure callback
    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
  //End Promise
}

//execute and push the returned json objects to promises array
for(let i = 0; i < movieTitles.length; i++){
  promises.push(getMovie(movieTitles[i]));
}

//creating a promise chain using loop
Promise.all(promises).then(function(result){
  //creating and storing the json object to a .json file
  let result1 = JSON.stringify(result, null, 2);
  fs.writeFile('example2.json', result1, (err,data) => {
        if (err) throw err;
            console.log("Data written to the file");
    });   
});

//reading and printing the json objects on the console
Promise.all(promises).then(function(result){
    console.log("inside Promise.all");
    fs.readFile('example2.json', (err, data) => {
        if (err) throw err;
        getData = JSON.parse(data);
        //console.log(getData);
    });
     func(); 
});

let func = () =>{
  let interval = setInterval(function(){ 
    console.log(getData[count]);
    console.log("\n")
    count++;
    if(count === getData.length){
      clearInterval(interval);
    }
   }, 1000);
}

console.log("Program");