
const flexPackege = document.querySelector('#flexPackege')
const form = document.querySelector('#packageForm')
let totalPrice = document.querySelector("#total")

const flexInModal = document.querySelector('#flexInModal')

 
flexPackege.addEventListener('click', async (event) => {
  
  if(event.target.name === 'buttonplus') {
    
   let tempCount = event.target.parentNode.childNodes[9].innerText
   tempCount = +tempCount + 1
   event.target.parentNode.childNodes[9].innerText = tempCount



    let tempTotal = totalPrice.innerText


    // console.log(tempTotal, 'pev Total');
    let itemsPrice = event.target.parentNode.childNodes[5].innerText
    let totalNeed = +tempTotal + (+itemsPrice)
    totalPrice.innerText = totalNeed

  }
  
  if(event.target.name === 'buttonminus') {
    let tempCount = event.target.parentNode.childNodes[9].innerText
   tempCount = +tempCount - 1
    event.target.parentNode.childNodes[9].innerText = tempCount

    let tempTotal = totalPrice.innerText


    // console.log(tempTotal, 'pev Total');
    let itemsPrice = event.target.parentNode.childNodes[5].innerText
    let totalNeed = +tempTotal - (+itemsPrice)
    totalPrice.innerText = totalNeed

  }
  


})

const needFlexItem = document.querySelectorAll('.needFlexItem')

flexInModal.addEventListener('click', async (event)=>{
  event.preventDefault()
  let flexInputArrAll = []
  for (let i = 0; i < needFlexItem.length; i += 1) {
    
    if(needFlexItem[i].childNodes[9].innerText !== '0') {
      // console.log(needFlexItem[i]);
      let flexInput = new Object({
        title: needFlexItem[i].childNodes[1].innerText,
        price: needFlexItem[i].childNodes[5].innerText,
        count: needFlexItem[i].childNodes[9].innerText
      })
      flexInputArrAll.push(flexInput)
    }
    // console.log(needFlexItem[i].childNodes[9].innerText); 
  }
  flexInputArrAll.push(totalPrice.innerText)
  console.log(flexInputArrAll);
})
