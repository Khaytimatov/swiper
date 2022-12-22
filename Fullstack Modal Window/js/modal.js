

const coverBtn = document.querySelector('.cover__button')
const backdropModal = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modalCloseButton')
const thankYou = document.querySelector('.thankYou')
const modalApplyButton = document.querySelector('.modalApplyButton')
const modalContent = document.querySelector('.modalContent')
const form = document.querySelector('form')
const message = document.querySelector('.inputMessage')
const number = document.querySelector('.inputNumber')

const bot = {
    TOKEN: '5984755511:AAFt2O7q0jg5B_nt4x3JxMW3YkGnZr1z__s',
    chatID: '-744803930'
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(message.value.trim() && number.value){
        const data = `message:${message.value.trim()},number:${number.value}`
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${data}`)
        .then(response => {
            if (response.ok) {
                modalContent.classList.add('hideContent')
                thankYou.innerHTML = `
                <h2>THANK YOU</h2>
                <p>Our operator will answer you</p>`
                boxTimeout = setTimeout(handleModalRemove, 2000)
            }
        }, error => {
            modalContent.classList.add('hideContent')
            thankYou.innerHTML = `
        <h2>ERROR</h2>
        <p>SORRY</p>`
        boxTimeout = setTimeout(handleModalRemove, 2000)
        })
    }else{
        alert('недостаточно символов')
    }
    
       
})

let boxTimeout;

const handleModalRemove = () => {
    clearTimeout(boxTimeout)
    backdropModal.classList.remove('backdropActive')
    modal.classList.remove('modalActive')
}


coverBtn.addEventListener('click', () => {
    backdropModal.classList.add('backdropActive')
    modal.classList.add('modalActive')
    modalContent.classList.remove('hideContent')
    thankYou.innerHTML = ''

})

modalCloseButton.addEventListener('click', handleModalRemove)

backdropModal.addEventListener('click', handleModalRemove)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})


// setTimeout(()=>alert('hello'),2000)

// modalApplyButton.addEventListener('click', () => {
//     modalContent.classList.add('hideContent')
//     // thankYou.innerHTML = `
//     //     <h2>THANK YOU</h2>
//     //     <p>Our operator will answer you</p>`
  
// })

// inputs должен проверить на наличие value
// inputs не должен принять пробелы
// после отправки сообщения очистить все inputs
// Красиво сверстать form block и всплывающее сообщение










// const time = document.querySelector('.time')

// const modalAlert = (first, second, third) => {
//     alert('hello' + first + second + third)
// }

// const timeOut = setTimeout(modalAlert, 2000, 'world', 'is', 'beautiful')

// time.addEventListener('click', () => {
//     clearTimeout(timeOut)
// })

