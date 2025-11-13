


    let resposta = document.getElementById('resposta')

function principal(){
let nome = document.getElementById("nome").value

if(nome === 'geovana'){
   console.log('100%') 
   resposta.innerHTML = `100% ???`
 }else if(nome === 'geo'){
    console.log('100%') 
resposta.innerHTML = `100% taix tola`
 }else if(nome === 'olaf'){
    console.log('100%') 
    resposta.innerHTML `100% obv`
 }else if(nome === 'macaca'){
 resposta.innerHTML += `100% preta!!`
 }
 else if(nome != geovana){
 
  console.log('0% NUNCA!!!')
    
 resposta.innerHTML += `0% NUNCA!!!!!!!!`
}
else if(nome != geo){
 
   console.log('0% NUNCA!!!')
     
  resposta.innerHTML += `0% NUNCA!!!!!!!!`
 }
 else if(nome != olaf){
 
   console.log('0% NUNCA!!!')
     
  resposta.innerHTML += `0% NUNCA!!!!!!!!`
 }
 else if(nome != macaca){
 
   console.log('0% NUNCA!!!')
     
  resposta.innerHTML += `0% NUNCA!!!!!!!!`
 }


}
principal()