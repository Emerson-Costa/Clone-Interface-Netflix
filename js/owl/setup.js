$('.owl-carousel').owlCarousel({
    /* Loop para repetição de imagens ligada(true) desligada(false)*/
    loop: true,
    /* Margem entre as figuras do carousel*/
    margin: 10,
    /* Habilitar ou desabilitar os botões de menu de navegação */
    nav: true,
    /* Adaptação do layoult da tela*/
    responsive: {
        /* Quando a tela tiver  0 pxls ele renderiza 1 imagem*/
        0: {
            items: 1
        },
        /* Quando a tela tiver 600 pxls ele renderiza até 3 imagens*/
        600: {
            items: 3
        },
        /* Quando a tela tiver 1000 pxls ele renderiza até 5 imagens*/
        1000: {
            items: 5
        }
    }
})