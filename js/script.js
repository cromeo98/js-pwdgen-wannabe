var nome = prompt('Inserisci il tuo nome')
console.log(nome)

var cognome = prompt('Inserisci il tuo cognome')
console.log(cognome)

var età = parseInt(prompt('Inserisci la tua età'))
console.log(età)

var password = nome + cognome + età
document.getElementById('password').innerHTML = password
console.log(password)

document.getElementById('testo').innerHTML = 'La tua password è stata creata:'