
// menu desplegable 
var lblFeature = document.getElementById("lbl__Feature");
var contenFeatures = document.getElementById("conten__features");
var lblCompany = document.getElementById("lbl__company");
var contenCompany = document.getElementById("conten__company");

var imgFeatures = document.getElementById("img__features");
var imgCompany = document.getElementById("img__company");

lblFeature.addEventListener("click", () => {
    if (contenFeatures.style.display === 'none') {
        // Si el elemento está oculto, mostrarlo
        contenFeatures.style.display = 'block';
        imgFeatures.src = "./images/icon-arrow-up.svg";
    } 
    else{
        // Si el elemento está visible, ocultarlo
        contenFeatures.style.display = 'none';
        imgFeatures.src = "./images/icon-arrow-down.svg";
    }
})

lblCompany.addEventListener("click", () => {
    if (contenCompany.style.display === 'none') {
        contenCompany.style.display = 'block';
        imgCompany.src = "./images/icon-arrow-up.svg";
    } else {
        contenCompany.style.display = 'none';
        imgCompany.src = "./images/icon-arrow-down.svg";
    }
})

// menu movil

var iconoMenu = document.getElementById("icono__menu");
var menuMovil = document.getElementById("menu__movil");
var iconoCloseMenu = document.getElementById("icono__closeMenu");

var lblFeacturesMovil = document.getElementById("lbl__feactures__movil");
var contenFeacturesMovil = document.getElementById("conten__feactures__movil");
var lblCompanyMovil = document.getElementById("lbl__company__movil");
var contenCompanyMovil = document.getElementById("conten__company__movil");

var fondoNegro = document.getElementById("fondo__negro");


iconoMenu.addEventListener("click", () => {
    menuMovil.style.display = "block";
    fondoNegro.style.display = "block"
})

fondoNegro.addEventListener("click", () => {
    menuMovil.style.display = "none";
    fondoNegro.style.display = "none"
})

iconoCloseMenu.addEventListener("click", () => {
    menuMovil.style.display = "none";
    fondoNegro.style.display = "none"
})

lblFeacturesMovil.addEventListener("click", () => {
    if (contenFeacturesMovil.style.display === 'none') {
        contenFeacturesMovil.style.display = 'block';
    } else {
        contenFeacturesMovil.style.display = 'none';
    }
})

lblCompanyMovil.addEventListener("click", () => {
    if (contenCompanyMovil.style.display === 'none') {
        contenCompanyMovil.style.display = 'block';
    } else {
        contenCompanyMovil.style.display = 'none';
    }
})