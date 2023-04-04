
//¿Que necesito?
//un piano con teclas blancas y negras
//cada tecla tiene un sonido
//al presionar una tecla del teclado, suene una tecla del piano


//SELECIONAMOS LOS BOTONES DIVS

/*const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => playSound(btn));
});

//creamos funcion para que recoger el audio
function playSound(btn) {
    const audio = document.getElementById(btn.dataset.key);
    audio.currenTime = 0;
    audio.play();
}*/

//constante que selecciona a todas las teclas de piano
const pianoKeys = document.querySelectorAll(".teclasDePiano .key");

//creamos un array para los sonidos
let allKeys = [],
audio = new Audio(`sounds/a.mp3`);

const playTune = (key) => {
    audio.src = `sounds/${key}.mp3`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 250);
}

pianoKeys.forEach (key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);

}

document.addEventListener("keydown" , pressedKey);


