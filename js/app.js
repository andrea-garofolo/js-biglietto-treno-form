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

//calcolo il costo al km
const costkm = 0.21 


buttonElement.addEventListener('click', function () {
	//console.log('click sul button')

     const km = parseFloat(kmElement.value) // number
	// console.log('numero di km percorsi: ', km)

 	const age = parseInt(ageElement.value) // number
	
    //calcolo costo al km
    const basePrice = km * costkm

    let discount = 0

    //calcolo sconti
    if(age > 18){
        discount = 0.2
    }
    else if(age < 65){
        discount = 0.4
    }

    console.log((basePrice-basePrice*discount).toFixed(2))
    
    resultElement.innerHTML = (basePrice-basePrice*discount).toFixed(2)
    

})