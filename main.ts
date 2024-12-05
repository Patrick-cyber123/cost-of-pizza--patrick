game.splash("Lets make a pizza!")
let LABOUR = 0.75
let RENT = 1
let MATERIAL = 0.5
let HST = 0.13
let diameter = game.askForNumber("What is the diameter of the pizza? (inch) ")
let subtotal = RENT + (LABOUR + MATERIAL * diameter)
let total = subtotal + HST
game.splash("The pizza total value will be added up with the following: Labour " + LABOUR + " Rent " + RENT + " Material " + MATERIAL + " Then times material by the diameter you get the subtotal of " + subtotal + " And lastly adding the subtotal with tax (0.13) the pizza will cost " + total + "  ")
