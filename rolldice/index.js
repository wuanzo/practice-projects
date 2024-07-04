
function roll(){

  const numberOfDices = document.getElementById("numberOfDices").valueAsNumber
  const diceValues = document.getElementById("diceValues")
  const diceImages = document.getElementById("diceImages")
  let values = []
  let images = []


  for(let i = 0; i < numberOfDices; i++) {
    let value = Math.floor(Math.random() * 6) + 1
    values[i] = value
    images[i] = `<img src = "diceImages/${value}.png">`
  }

  diceValues.textContent = `rolled #: ${values.join(`, `)}`
  diceImages.innerHTML = images.join(``)
}
