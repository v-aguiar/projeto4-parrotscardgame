function getNumberOfCards() {
  const numberOfCards = parseInt(prompt("Digite um número par entre 2 e 14 para jogar", "Ex.: '2', '6', '12'"))

  const validateEvenNumber = (numberOfCards % 2 == 0)
  const validateNumberOfCards = ((numberOfCards >= 4) && (numberOfCards <= 14))
  const isNotValid = ((!validateEvenNumber === false) && (!validateNumberOfCards === false))

  if(isNotValid !== true) {
    getNumberOfCards();
  } else {
    return numberOfCards;
  }
}

const validNumberOfCards = getNumberOfCards()

addCards()

// ***************** Flip card on click function

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

// ***************** Card Functions

function addCards() {
  const cardsContainer = document.querySelector(".cards-container")
  console.log(cardsContainer)
  const cardStructure = `
    <div class="card">
      <div class="front-face face"></div>
      <div class="back-face face"></div>
    </div>
  `

  for(let index = 0; index < validNumberOfCards; index++) {
    cardsContainer.innerHTML += cardStructure
  }
}

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener('click', () => {flipClickedCard(card)})
})


