
// function sendRequest(method,url,body = null){
//     return fetch(url).then( response =>{
//         return response.json()
//     })
// }

// sendRequest('GET',requestedURL)
//     .then(data => console.log(data))
//     .catch( error => console.error(error))

let firstName;
let lastName;
let gender;
let photo;
let email;
let phone;
const requestedURL = 'https://randomuser.me/api/'

async function getResponse(){
    let response = await fetch(requestedURL)
    let content = await response.json()

    let results = content.results;
    let requiredInfo = results[0]
    firstName = requiredInfo.name.first
    lastName = requiredInfo.name.last
    gender = requiredInfo.gender
    photo = requiredInfo.picture.large
    email = requiredInfo.email
    phone = requiredInfo.cell.replaceAll('(',' ').replaceAll(')',' ')
    console.log(firstName)
}

getResponse();

const addBTN = document.body.querySelector('.btn-info')
addBTN.addEventListener( 'click', function(e){
    e.preventDefault();
    let tr = document.createElement('tr')
    let firstTable = document.body.querySelector('tbody')
    let tdName = document.createElement('td')
    
    tdName.textContent = firstName
    firstTable.append(tr)
    
})

console.log(firstName)