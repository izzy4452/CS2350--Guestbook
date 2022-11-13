//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let guests =  []

export function addGuest(e){
  e.preventDefault()
  
  let guest = {
        f_name: document.getElementById('fname').value,
        l_name: document.querySelector('#lname').value
    }

    if (guest.f_name.trim() && guest.l_name.trim()) {

        if (localStorage.getItem('guests')){
            guests = JSON.parse(localStorage.getItem('guests'))
        }

        guests.push(guest)

        localStorage.setItem('guests', JSON.stringify(guests))

        displayGuests(guests)
    }

}

function displayGuests(guests){
    let table_body = document.querySelector('tbody')
    let html = ''
    for(let g of guests){
        let table_body = document.querySelector('tbody')
        html += `<tr>
            <td>${g.f_name}</td>
            <td>${g.l_name}</td>
        </tr>`
    }

    table_body.innerHTML = html
}

if (localStorage.getItem('guests')){
    guests = JSON.parse(localStorage.getItem('guests'))
}
displayGuests(guests)

//events
document.querySelector(".btn-danger").onclick = function(){
    localStorage.removeItem('guests')
    displayGuests([])
}
document.querySelector("form").onsubmit = addGuest
