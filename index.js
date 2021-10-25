const mainBar = document.getElementById('Main-bar')
const characterBar = document.getElementById('stock-bar')
const characterInfo = document.getElementById('detailed-info')
const characterInfoName = document.getElementById('name')
const characterInfoimage = document.getElementById('image')
const characterInfoVotesH4 = document.getElementById('votesHead')
const characterInfovotes = document.getElementById('vote-count')

//get VoteForm elements
const votesform = document.getElementById('votes-form')
const votesFormText = document.getElementById('votes')
const formAddVotesButton = document.getElementById('add-btn')
const formResetVotesButton= document.getElementById('reset-btn')

//get CharacterForm elements

const characterForm = document.getElementById('character-form')
const characterFormName = document.getElementById('name1')
const characterFormImage = document.getElementById('image-url')
const characterFormButton= document.getElementById('addCharacter-btn')

fetch (' http://localhost:3001/characters')
.then(response => response.json())
.then(characterData => {
    characterData.forEach(character => {
            const characterName = document.createElement('span')
            characterName.textContent = character.name
            characterBar.appendChild(characterName)
            characterName.addEventListener('click', () => {
                // assign value to elements
                characterInfoName.innerHTML = character.name
                characterInfoimage.src = character.image
                characterInfovotes.textContent = character.votes
                // add them to DOM
                characterInfo.appendChild(characterInfoName)
                characterInfo.appendChild(characterInfoimage)
                characterInfo.appendChild(characterInfoVotesH4)
                characterInfoVotesH4.appendChild(characterInfovotes)
            });
            
    })
})


votesform.addEventListener ('submit', (e) => {
    e.preventDefault();
    const numberOfVotes = votesFormText.value
    characterInfovotes.textContent = numberOfVotes
    votesform.reset()
    formResetVotesButton.addEventListener('click',(e)=> {
        characterInfovotes.textContent = '0'
    })
})