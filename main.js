
// menu desplegable 
var lblFeature = document.getElementById("lbl__Feature");
var contenFeatures = document.getElementById("conten__features");
var lblCompany = document.getElementById("lbl__company");
var contenCompany = document.getElementById("conten__company");

lblFeature.addEventListener("click", () => {
    if (contenFeatures.style.display === 'none') {
        // Si el elemento está oculto, mostrarlo
        contenFeatures.style.display = 'block';
    } 
    else{
        // Si el elemento está visible, ocultarlo
        contenFeatures.style.display = 'none';
    }
})

lblCompany.addEventListener("click", () => {
    if (contenCompany.style.display === 'none') {
        contenCompany.style.display = 'block';
    } else {
        contenCompany.style.display = 'none';
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