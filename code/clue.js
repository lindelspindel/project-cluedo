// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She has few connections",
  age: 67
  image:"assets/white.png",
  occupation: "cook"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "has the most connections",
  age: 75,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "pink",
  description: "has no connections",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Dancer"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "black",
  description: "has somewhat manny connections",
  age: 42,
  image: "assets/peacock.png",
  occupation: "Madame"

}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "has the second most connections",
  age: 27,
  image: "assets/mustard.png",
  occupation: "Teacher"
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}

const knife = {
  name: "knife",
  weight: 5
}
const candlestick = {
  name: "candlestick",
  weight: 2
}
const dumbell = {
  name: "dumbell",
  weight: 14
}
const poison = {
  name: "poison",
  weight 4
}
const = axe {
  name: "axe",
  weight: 20
}
const = bat {
  name:"bat",
  weight: 9
}
const = Trophy {
  name: "trophy",
  weight: 8
}
const = Pistol {
  name: "pistol",
  weight: 3
}
  



// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  miss Scarlet, 
  mrs Peacock,
  mrMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  const diningroom = "Dinning Room",
  const conservatory = "Conservatory",
  const kitchen =  "Kitchen", 
  const study = "Study", 
  const library = "Library", 
  const billiardroom = "Billiard Room",
  const lounge = "Lounge", 
  const ballroom = "Ballroom", 
  const hall = "Hall", 
  const spa = "Spa",
  const livingroom = "Living Room", 
  const bservatory = "Observatory", 
  const theater = "Theater", 
  const guesthouse = "Guest House",
  cosnt patio = "Patio"
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
