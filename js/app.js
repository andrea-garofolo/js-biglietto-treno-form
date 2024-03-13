//console.log("test di connessione")


const buttonElement = document.getElementById("submit")
// console.log(buttonElement)

//recupero i km
const kmElement = document.getElementById("km") // object | null
// console.dir(kmElement)

//recupero l'età
const ageElement = document.getElementById("age") // object | null
// console.dir(ageElement)

//recupero variabile di stampa
const resultElement = document.getElementById("result") //object | null

//recupero variabile di stampa
const rpKmElement = document.getElementById("rpKm") //object | null

//recupero variabile di stampa
const rpPrezzoBaseElement = document.getElementById("rpPrezzoBase") //object | null

//recupero variabile di stampa
const rpScontoElement = document.getElementById("rpSconto") //object | null

//calcolo il costo al km
const costkm = 0.21


buttonElement.addEventListener('submit', function (event) {
    //console.log('click sul button')
    event.preventDefault()

    const km = parseFloat(kmElement.value) // number
    // console.log('numero di km percorsi: ', km)

    const age = ageElement.value // number

    //calcolo costo al km
    const basePrice = km * costkm

    let discount = 0

    //calcolo sconti
    if (age === "Minorenne") {
        discount = 0.2
        rpScontoElement.innerHTML = "20%"
    }
    else if (age === "Old") {
        discount = 0.4
        rpScontoElement.innerHTML = "40%"
    }
    else {
        rpScontoElement.innerHTML = "n/a"
    }

    //console.log((basePrice-basePrice*discount).toFixed(2))

    resultElement.innerHTML = ("€ " + (basePrice - basePrice * discount).toFixed(2))
    rpKmElement.innerHTML = km
    rpPrezzoBaseElement.innerHTML = "€ " + costkm
})