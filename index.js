// const mainBar = document.getElementById('Main-bar')
// const characterBar = document.getElementById('stock-bar')
// const characterInfo = document.getElementById('detailed-info')
// const characterInfoName = document.getElementById('name')
// const characterInfoimage = document.getElementById('image')
// const characterInfoVotesH4 = document.getElementById('votesHead')
// const characterInfovotes = document.getElementById('vote-count')

// //get VoteForm elements
// const votesform = document.getElementById('votes-form')
// const votesFormText = document.getElementById('votes')
// const formAddVotesButton = document.getElementById('add-btn')
// const formResetVotesButton= document.getElementById('reset-btn')

// //get CharacterForm elements

// const characterForm = document.getElementById('character-form')
// const characterFormName = document.getElementById('name1')
// const characterFormImage = document.getElementById('image-url')
// const characterFormButton= document.getElementById('addCharacter-btn')

// Get coin data
var baseUrl = "https://api.coinranking.com/v2/coins";
// Bypass CORS error
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinranking9c9af1221d4e2fb94b5a56bb20dadd4e419243995005e8d9";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //from documentation to access data
      'X-My-Custom-Header': `${apiKey}`,
      //to prevent cors error
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
      //if statement to catch error 
    if (response.ok) {

      response.json().then((json) => {
        console.log(json.data);
        // access the coin data using its endpoint
        let coinsData = json.data.coins;
        console.log(coinsData)
        // create the cryptoCoin variable to hold api data
        while (coinsData.length > 0) {
            //this is why the variable is empty
          var cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
            cryptoCoin += "<tr>";
            cryptoCoin += `<td> ${coin.rank}</td>`;
            cryptoCoin += `<td> ${coin.symbol}</td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> ${coin.price} </td>`;
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      })
      
      ;

    }
  })
  .catch((error) => {
    console.log(error);
  });

    // characterData.forEach(character => {
    //         const characterName = document.createElement('span')
    //         characterName.textContent = character.name
    //         characterBar.appendChild(characterName)
    //         characterName.addEventListener('click', () => {
    //             // assign value to elements
    //             characterInfoName.innerHTML = character.name
    //             characterInfoimage.src = character.image
    //             characterInfovotes.textContent = character.votes
    //             // add them to DOM
    //             characterInfo.appendChild(characterInfoName)
    //             characterInfo.appendChild(characterInfoimage)
    //             characterInfo.appendChild(characterInfoVotesH4)
    //             characterInfoVotesH4.appendChild(characterInfovotes)
    //         });
            
    // })

// votesform.addEventListener ('submit', (e) => {
//     e.preventDefault();
//     const numberOfVotes = votesFormText.value
//     characterInfovotes.textContent = numberOfVotes
//     votesform.reset()
//     formResetVotesButton.addEventListener('click',(e)=> {
//         characterInfovotes.textContent = '0'
//     })
// })