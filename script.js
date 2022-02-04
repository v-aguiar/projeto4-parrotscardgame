// Array randomizer
function comparador() {
  return Math.random() - 0.5;
}

function getRandomNumber(number) {
  const randomNumber = (Math.floor(Math.random() * number))

  return randomNumber + 1
}

// Get valid number of card
function getNumberOfCards() {
  const numberOfCards = parseInt(prompt("Digite um número par entre 4 e 14 para jogar", "Ex.: '4', '6', '12'"))

  const validateEvenNumber = (numberOfCards % 2 == 0)
  const validateNumberOfCards = ((numberOfCards >= 4) && (numberOfCards <= 14))
  const isNotValid = ((!validateEvenNumber === false) && (!validateNumberOfCards === false))

  if(isNotValid !== true) {
    getNumberOfCards();
  } else {
    return numberOfCards;
  }
}

// Card Functions

function addCards() {
  const cardsContainer = document.querySelector(".cards-container")

  cardsContainer.innerHTML = createCardsRandomizedStructure()
}

function createCardsRandomizedStructure() {
  const arrayOfNumbers = []

  let bgNumber = null
  let cardStructure = ''

  for(let index = 0; index < validNumberOfCards; index++) {
    bgNumber = getRandomNumber(validNumberOfCards / 2)

    let maxRandomBgArray = (arrayOfNumbers.filter((number) => number === bgNumber))

    // Verifies if the same background has already been aplied two times
    while(maxRandomBgArray.length === 2) {
      bgNumber = getRandomNumber(validNumberOfCards / 2)

      maxRandomBgArray = (arrayOfNumbers.filter((number) => number === bgNumber))
    }

    cardStructure += `
      <div class="card">
      <div class="front-face face"></div>
      <div class="back-face face bg${bgNumber}"></div>
      </div>
      `

    arrayOfNumbers.push(bgNumber)
  }
  return cardStructure
}

// Flip card on click function

function flipClickedCard(card) {
  // Flip card
  card.querySelector('.back-face').style.transform = 'rotateY(0deg)'
  card.querySelector('.front-face').style.transform = 'rotateY(-180deg)'

  // Return card to initial position
  setTimeout(() => {
    card.querySelector('.back-face').style.transform = 'rotateY(180deg)'
    card.querySelector('.front-face').style.transform = 'rotateY(0deg)'
  }, 2000)

}

const validNumberOfCards = getNumberOfCards()

addCards()

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {flipClickedCard(card)})
})
