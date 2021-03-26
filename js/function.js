//menu
const menu = document.querySelector('.menu');
const btnMenuOpen = document.getElementById('open');
const btnMenuClose = document.getElementById('close');

btnMenuOpen.addEventListener('click', function() {
    menu.classList.add('menu_open')
});

btnMenuClose.addEventListener('click', function() {
    menu.classList.remove('menu_open')
});

//fim menu

//animação com paqueras
let ismobile = false;
let apollo = document.getElementById("imgApollo");
let dilan = document.getElementById("imgDilan");
let hela = document.getElementById("imgHela");
let kae = document.getElementById("imgKae");
let naomi = document.getElementById("imgNaomi");
let quinn = document.getElementById("imgQuinn");
window.addEventListener('resize', mobile)
window.onload = mobile

function mobile() {
    if (window.innerWidth <= 1366) {
        ismobile = true;
        apollo.classList.add("display-none")
        hela.classList.add("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")
        quinn.classList.add("display-none")
        dilan.classList.add("display-none")
    } else {
        ismobile = false;
        console.log('kkkkk')
    }
}

function trocatitulo() {
    document.getElementById("titulo").textContent = "Apollo"
    document.getElementById("texto").textContent = "Bad boy? Nerd de T.I? Se encaixar em rótulos estereótipos não é algo que ele goste, não quando há bugs para arrumar, jogos a ganhar e mais uma nota para decorar! Por trás de suas olheiras e mau humor há um coração puro e compreensível a te esperar. Enfrente o final boss mais temido de todo torneio de games!";
    if (ismobile === false) {
        apollo.classList.add("display-block")
        apollo.classList.remove("display-none")
        hela.classList.add("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")
        quinn.classList.add("display-none")
        dilan.classList.add("display-none")
    }


}

function trocatituloD() {
    document.getElementById("titulo").textContent = "Dilan"
    document.getElementById("texto").textContent = "O curioso e atrapalhado detetive/físico e astrônomo nas horas vagas nunca descansa! Não importa o desafio, ele sempre estará ao seu lado em nome da verdade! Ele usa o senso de humor e positividade como escudo e não deixará ninguém para trás, não mais…"
    if (ismobile === false) {
        dilan.classList.add("display-block")
        dilan.classList.remove("display-none")
        apollo.classList.add("display-none")
        hela.classList.add("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")
        quinn.classList.add("display-none")
    }


}

function trocatituloH() {
    document.getElementById("titulo").textContent = "Hela"
    document.getElementById("texto").textContent = "A personalidade mais difícil entre os estudantes. Tamanho não é um impedimento para que ela mostre com quantos paus se faz uma canoa! Apesar de sua enorme força, existe uma fragilidade revelada para poucos, será que você fará parte destes?"
    if (ismobile === false) {
        hela.classList.add("display-block")
        hela.classList.remove("display-none")
        apollo.classList.add("display-none")
        dilan.classList.add("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")
        quinn.classList.add("display-none")
    }



}

function trocatituloK() {
    document.getElementById("titulo").textContent = "Kae"
    document.getElementById("texto").textContent = "Nosso artista em ascensão é amade por todos os departamentos. Sua educação e autocontrole lhe dá a impressão de estar sempre brilhando! Perfeccionista e amigável, elu esconde suas cicatrizes no seu belo sorriso caridoso e em suas obras fantásticas!"
    if (ismobile === false) {
        kae.classList.add("display-block")
        kae.classList.remove("display-none")
        apollo.classList.add("display-none")
        dilan.classList.add("display-none")
        hela.classList.add("display-none")
        naomi.classList.add("display-none")
        quinn.classList.add("display-none")
    }


}

function trocatituloN() {
    document.getElementById("titulo").textContent = "Naomi"
    document.getElementById("texto").textContent = "Dona de uma personalidade enérgica, ela nunca está concentrada em apenas uma coisa. Alguns a chamam de cientista maluca, outros acreditam que seja por conta de seu entusiasmo sempre evidente para mostrar o melhor de si! Mas para quem ela quer se provar?"
    if (ismobile === false) {
        naomi.classList.add("display-block")
        naomi.classList.remove("display-none")
        apollo.classList.add("display-none")
        dilan.classList.add("display-none")
        hela.classList.add("display-none")
        kae.classList.add("display-none")
        quinn.classList.add("display-none")
    }


}

function trocatituloQ() {
    document.getElementById("titulo").textContent = "Quinn"
    document.getElementById("texto").textContent = "Nossa amável repórter está sempre com um sorriso gentil no rosto não importa a ocasião. Sendo uma voz ativa na comunidade trans, ela participa de entrevistas e escreve muito sobre a luta diária da comunidade. Ela pode parecer um pouco tímida quando por de trás das câmeras, mas é uma pessoa polida e bastante sociável. O que há por trás de seu carisma contagiante?"
    if (ismobile === false) {
        quinn.classList.add("display-block")
        quinn.classList.remove("display-none")
        apollo.classList.add("display-none")
        dilan.classList.add("display-none")
        hela.classList.add("display-none")
        kae.classList.add("display-none")
        naomi.classList.add("display-none")
    }


}