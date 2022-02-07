// Declarations
let youWinIterator = 0
let turnedCardsCount = 0
let clicks = 0

// Card Functions
const cards = {
  cardsContainer: document.querySelector(".cards-container"),
  clickedCards: [],

  getNumberOfCards() {
    const numberOfCards = parseInt(prompt("Digite um número par entre 4 e 14 para jogar", "Ex.: '4', '6', '12'"))

    const validateEvenNumber = (numberOfCards % 2 == 0)
    const validateNumberOfCards = ((numberOfCards >= 4) && (numberOfCards <= 14))
    const isNotValid = ((!validateEvenNumber === false) && (!validateNumberOfCards === false))

    if(isNotValid !== true) {
      this.getNumberOfCards();
    } else {
      return numberOfCards;
    }
  },

  addCards() {
    this.cardsContainer.innerHTML = this.createCardsRandomizedStructure()
  },

  createCardsRandomizedStructure() {
    const bgNumbers = []

    let bgNumber = null
    let cardStructure = ''

    for(let index = 0; index < validNumberOfCards; index++) {
      do {
        bgNumber = getRandomNumber(validNumberOfCards / 2)

        // Verifies if the same background has already been aplied two times
        sameRandomBgs = (bgNumbers.filter((number) => number === bgNumber))
      } while(sameRandomBgs.length === 2)

      cardStructure += `
        <div class="card" data-identifier="card">
          <div class="front-face face" data-identifier="front-face"></div>
          <div class="back-face face bg${bgNumber}" data-identifier="back-face"></div>
        </div>
        `

      // stores applied background number 
      bgNumbers.push(bgNumber)
    }
    console.log("Randomized, returning HTML whith all cards")
    return cardStructure
  },

  // Card click functions
  handleCardClick() {
    const allCards = document.querySelectorAll(".card")

    allCards.forEach((card) => {
      card.addEventListener('click', () => {
        this.clickedCards.push(card)
        turnedCardsCount++
        clicks++

        // Start counting time
        if(turnedCardsCount === 1) {
          timer.startTimer()
        }

        const firstClick = (clicks === 1)
        const secondClick = (clicks === 2)

        if(firstClick) {
          this.flipClickedCard(card)
        } else if(secondClick) {
          this.flipClickedCard(card)
          this.compareClickedCards()
        } else {
          turnedCardsCount--
          clicks--
        }
      })
    })
  },

  compareClickedCards() {
    const firstClickedCardClassList = (this.clickedCards[0].children[1].classList.value)
    const secondClickedCardClassList = (this.clickedCards[1].children[1].classList.value)
    const firstClickedCardParents = (this.clickedCards[0].children[1].parentNode)
    const secondClickedCardParents = (this.clickedCards[1].children[1].parentNode)

    // Make sure clicked cards have same BG but are not the same card
    const cardsAreEqual = firstClickedCardClassList == secondClickedCardClassList
    const cardsHaveDiffParents = firstClickedCardParents !== secondClickedCardParents

    if(cardsAreEqual && cardsHaveDiffParents) {
      youWinIterator += 2

      this.resetClickCount()
      this.areAllCardsFacedUp()

    } else if(cardsHaveDiffParents) {
      this.flipClickedCardsBack()
    }
    else {
      clicks--
      this.clickedCards.pop()
    }
  },

  areAllCardsFacedUp() {
    if(youWinIterator === validNumberOfCards) {
      timer.stopTimer()

      setTimeout(() => {
        alert(`Você ganhou em ${timer.element.innerHTML} segundos e ${turnedCardsCount} jogadas!`)
      }, 500)

      setTimeout(() => {
        const answer = prompt('Deseja testar sua memória outra vez? Y/N')
        const validAnswer = answer.trim().toUpperCase()

        if(validAnswer === 'Y' || validAnswer === 'YES') {
          restartGame()
        }
      }, 500)
    }
  },

  resetClickCount() {
    clicks = 0

    console.log('clickeCardsBefore:', this.clickedCards)

    for(let index = 0; index <= this.clickedCards.length; index++) {
      this.clickedCards.pop()
    }
    console.log('clickeCardsAfter:', this.clickedCards)
  },

  flipClickedCard(card) {
    // Flip card
    card.querySelector('.back-face').style.transform = 'rotateY(0deg)'
    card.querySelector('.front-face').style.transform = 'rotateY(-180deg)'
  },

  flipClickedCardsBack() {
    // Return card to initial position
    this.clickedCards.forEach((card) => {
      setTimeout(() => {
        card.querySelector('.back-face').style.transform = 'rotateY(180deg)'
        card.querySelector('.front-face').style.transform = 'rotateY(0deg)'
      }, 1000)
    })
    this.resetClickCount()
  }
}

// Timer Functions - Bonus (training object usage)
const timer = {
  element: document.querySelector('header .timer'),
  interval: 0,

  startTimer() {
    const interval = setInterval(() => {
      this.element.innerHTML = parseInt(this.element.innerHTML) + 1
    }, 1000)

    this.interval = interval
  },

  stopTimer() {
    clearInterval(this.interval)
  }
}

// Randomizer
function getRandomNumber(number) {
  const randomNumber = (Math.floor(Math.random() * number))

  return randomNumber + 1
}

// Restar game -> Bonus
function restartGame() {
  youWinIterator = 0
  turnedCardsCount = 0
  cards.resetClickCount()

  timer.element.innerHTML = '0'

  // const cardsContainer = document.querySelector('.cards-container')
  cards.cardsContainer.innerHTML = ''

  validNumberOfCards = cards.getNumberOfCards()

  setTimeout(() => {cards.addCards()}, 500)
  setTimeout(() => {cards.handleCardClick()}, 500)
}

let validNumberOfCards = cards.getNumberOfCards()

cards.addCards()
cards.handleCardClick()

