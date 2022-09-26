
let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")

let homeVal1 = document.getElementById("home-val1")
let homeVal2 = document.getElementById("home-val2")
let homeVal3 = document.getElementById("home-val3")

let guestVal1 = document.getElementById("guest-val1")

let countForHome = 0
let countForGuest = 0 

 
function plusOneForHome() {
    countForHome += 1
    homePoint.textContent = countForHome

}
function plusTwoForHome() { 
    countForHome += 2
    homePoint.textContent = countForHome 
}
function plusThreeForHome() {
    countForHome += 3
    homePoint.textContent = countForHome 
}

function plusOneForGuest() {
    countForGuest += 1
    guestPoint.textContent = countForGuest

}
function plusTwoForGuest() { 
    countForGuest += 2
    guestPoint.textContent = countForGuest 
}
function plusThreeForGuest() {
    countForGuest += 3
    guestPoint.textContent = countForGuest 
}
