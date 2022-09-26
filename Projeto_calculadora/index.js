const main = document.querySelector('main')
const root = document.querySelector(':root')
const input =  document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "] // teclas permitidas 

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){ // funcionalidade do click nas teclas da calculadora
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value // acessando o valor dataSet da classe do html
        input.value += value // acrescentando ao input o valor da tecla clicada
    })
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})    

})
input.addEventListener('keydown', function(ev){ // funcionalidade teclado
    ev.preventDefault() // previne que o evento seja desperado com qualquer tecla
    if (allowedKeys.includes(ev.key)){// se a tecla apertada(ev.key) esta dentro do array
        input.value += ev.key // acrescenta no valor do input
        return
    } if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }if (ev.key === 'Enter'){
        calculate()
    }if (ev.key ==='Escape'){

        input.focus()
        input.value =''

    }

})

document.getElementById('equal').addEventListener('click',calculate)

function calculate(){
    resultInput.value = 'Error'
    resultInput.classList.add('error')

    const result = eval(input.value) // método eval avalia e executa o codigo javascript como se fosse um console
    resultInput.value = result // valor resultado no input de resultado
    resultInput.classList.remove('error')
}
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if (button.innerText ==='Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value) // copiando o texto do input
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color','#f1f5f9' )
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme = 'light'

    }else{
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
    }
})