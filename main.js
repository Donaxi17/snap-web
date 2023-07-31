
// menu desplegable 
var lblFeature = document.getElementById("lbl__Feature");
var contenFeatures = document.getElementById("conten__features");
var lblCompany = document.getElementById("lbl__company");
var contenCompany = document.getElementById("conten__company");


lblFeature.addEventListener("click", () => {
    contenFeatures.style.display = "block";
})

lblFeature.addEventListener("dblclick", () => {
    contenFeatures.style.display = "none";
})

lblCompany.addEventListener("click", () => {
    contenCompany.style.display = "block";
})

lblCompany.addEventListener("dblclick", () => {
    contenCompany.style.display = "none";
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
    contenFeacturesMovil.style.display = "block";
})

lblFeacturesMovil.addEventListener("dblclick", () => {
    contenFeacturesMovil.style.display = "none";
})

lblCompanyMovil.addEventListener("click", () => {
    contenCompanyMovil.style.display = "block";
})

lblCompanyMovil.addEventListener("dblclick", () => {
    contenCompanyMovil.style.display = "none";
})