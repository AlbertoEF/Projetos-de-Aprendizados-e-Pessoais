function imprimir (){
    let name = document.querySelector('#name').value
    let cellphone = document.querySelector('#fone').value
    let street = document.querySelector('#street').value
    let number = document.querySelector('#number').value
    let district = document.querySelector('#district').value
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value

    alert(`Nome: ${name} \nCelular: ${cellphone} \nRua: ${street} \nNumero: ${number} \nBairro: ${district} \nCidade: ${city} \nEstado: ${state}`)
   
   

}