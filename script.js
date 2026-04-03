const balloonContainer = document.getElementById("balloons")

function createBalloon(){

const balloon=document.createElement("div")

balloon.className="balloon"

balloon.style.left=Math.random()*100+"vw"

balloon.style.animationDuration=(Math.random()*5+5)+"s"

balloonContainer.appendChild(balloon)

setTimeout(()=>{

balloon.remove()

},10000)

}

setInterval(createBalloon,800)


// mudar clima

const themeToggle=document.getElementById("theme-toggle")

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode")

})


// enviar mensagem para WhatsApp

document
.getElementById("contact-form")
.addEventListener("submit",function(e){

e.preventDefault()

const nome=document.getElementById("nome").value
const mensagem=document.getElementById("mensagem").value

const telefone="5581999417544"

const texto = `Olá Gleice e Gustavo! 💛

Meu nome é ${nome}

Mensagem para o bebê:
${mensagem}`

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`

window.open(url,"_blank")

this.reset()

})


// música

const musica = document.getElementById("musica")
const botao = document.getElementById("musica-btn")

let tocando = false

botao.addEventListener("click", () => {

if(musica.paused){
musica.play();
botao.innerHTML = "⏸ Pausar"
}else{
musica.pause();
botao.innerHTML = "🎵 Tocar Música"
}

tocando = !tocando

})
// melhorar música no celular

document.addEventListener("click", function(){

const musica = document.getElementById("musica")

if(musica && musica.paused){
musica.play().catch(()=>{})
}

},{once:true})
