let includeLowercase = false
let includeUppercase = false
let includeNumbers = false
let includeSpecialchars = false

let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "01234567890"
let specialchars = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/"


function generate() {

  const includeLowercase = document.getElementById("lowercase_yes").checked
  const includeUppercase = document.getElementById("uppercase_yes").checked
  const includeNumbers = document.getElementById("numbers_yes").checked
  const includeSpecialchars = document.getElementById("specialchars_yes").checked
  const length = document.getElementById("length").valueAsNumber
  const password_box = document.getElementById("password_box")
  
  let allowedchars = ""
  let password = []
    
    allowedchars += includeLowercase ? lowercase : ""
    allowedchars += includeUppercase ? uppercase : ""
    allowedchars += includeNumbers ? numbers : ""
    allowedchars += includeSpecialchars ? specialchars : ""
    
    if (allowedchars.length === 0) {
      console.log(`you have to select one of the options at least`)
    }
    else {
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedchars.length)
        password += allowedchars[randomIndex]
      }

      password_box.textContent =` ${password}`
    } 
  
}



