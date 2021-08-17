const btn = document.getElementById('to-top-btn')
window.onscroll = function () {
    if(document.documentElement.scrollTop>20 || document.body.scrollTop > 20){
        btn.style.display = "block"
    }
    else{
        btn.style.display = "none"
    }
}

/* O que faz o botão subir até o topo da pagina */
function totop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; /* nesta função funciona para navegadores safari */
}