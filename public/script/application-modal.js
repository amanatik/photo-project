const pocketButton= document.querySelector('.pocket-button')
const cardBody = document.querySelectorAll('.card-body')
const sendFormButton = document.querySelector('#knopka')


cardBody.forEach((el) => {
  el.addEventListener('click', async (e) => {
  e.preventDefault()
  const findPocket = e.target.closest('.card-body')
  console.log(findPocket)
  console.log(findPocket.dataset.pocketid)
  const response = await fetch(`/test-submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: findPocket.dataset.pocketid
    })
  })
  const serverResponse = await response.json()
  console.log(serverResponse.title)
  const title = document.querySelector('.title')
  const price = document.querySelector('.price')
  const description = document.querySelector('.description')
  title.innerText = serverResponse.title
  price.innerText = `${serverResponse.price} ₽`
  description.innerText = `${serverResponse.description[0]}\n ${serverResponse.description[1]}\n ${serverResponse.description[2]} `
  
    
  })
})


sendFormButton.addEventListener('click', async (e) => {
  e.preventDefault()
  // console.log(sendFormButton)
  const company = document.querySelector('#company-name').value
  const name = document.querySelector('#full-name').value
  const phone = document.querySelector('#phone-number').value
  const message = document.querySelector('#message-text').value
  const price = document.querySelector('#price')
  const title = document.querySelector('#title')
  const description = document.querySelector('#description')

  console.log(description)
  const response = await fetch('/send-mailer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      company: company,
      phone: phone,
      message: message,
      title: title.innerText,
      price: price.innerText,
      descriptions: description.innerText
    })
  })

})
