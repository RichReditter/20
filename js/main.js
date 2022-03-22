const requestedURL = 'https://randomuser.me/api/'
// let firstName;
// let lastName;
// let gender;
// let photo;
// let email;
// let phone;

async function getResponse(){
    let response = await fetch(requestedURL)
    let content = await response.json()

    let results = content.results;
    let requiredInfo = results[0]
    
    let firstName = requiredInfo.name.first
    let lastName = requiredInfo.name.last
    let gender = requiredInfo.gender
    let photo = requiredInfo.picture.large
    let email = requiredInfo.email
    let phone = requiredInfo.cell.replaceAll('(',' ').replaceAll(')',' ')
    console.log(firstName)
    const addBTN = document.body.querySelector('.btn-info')
    addBTN.addEventListener( 'click', function(e){
        e.preventDefault();

        const newPhoto = document.body.querySelector('#newPhoto')
        let tr = document.createElement('tr')
        let newTable = document.body.querySelector('tbody')
        let tdPhoto = document.createElement('td')
        let img = document.createElement('img')
        img.src = newPhoto.src
        tdPhoto.appendChild(img)
        tr.appendChild(tdPhoto)
        
        newTable.appendChild(tr)

    })
    
}
getResponse();