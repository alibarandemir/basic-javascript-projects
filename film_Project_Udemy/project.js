const form =document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear =document.getElementById("clear-films");

// ui objesi
const ui = new UI();
// storage objesi
const storage = new Storage();
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films =storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if(title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm Alanları Doldurun!","danger");
    }
    else{
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); //arayüze film ekleme
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film Başarıyla Eklendi","success");
    }
    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.textContent);
        ui.displayMessages("Silme Gerçekleşti","success");
    }
}
function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}