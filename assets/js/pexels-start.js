const authKey = "TCCwYg5eMNtKwz5YkZ9yNzRkwBOmuEscvclv2jFwxIxgNEicOhzMYnoE";
const photoUrl = "https://api.pexels.com/v1/search"; // VA UNITA AD UNA QUERY PER CERCARE LE FOTO ( ?query=CosaCercare)
const dinamicUrl = "https://api.pexels.com/v1/curated";  //VA UNITA AD UNA QUERY PER CERCARE LE FOTO ( ?query=CosaCercare) //EXTRA DEGLI EXTRA


let btnLoadImages = document.getElementById("loadImages");
let btnLoadSecondary = document.getElementById("loadSecondary");
let btnSearch = document.getElementById("searchButton");


let arrLoadImages = [];
let arrLoadSecondary = [];
let arrSearch = [];

const nCard = 9; //numero di carte a video 


document.addEventListener("load", init());

function init() {
    loadImgOnClick();
};


function loadImgOnClick() {
    btnLoadImages.addEventListener("click", async function () {
        try {
            let response = await fetch(`${photoUrl}?query=mountain`, {
                method: "GET",
                headers: {
                    "Authorization": authKey,
                }
            }
            );
            let data = await response.json();
            arrLoadImages = data.photos;
            printCards(arrLoadImages);
            console.log(arrLoadImages);
        }
        catch (error) {
            console.log("ERRORE: " + error);
        }
    });

    btnLoadSecondary.addEventListener("click", async function () {
        try {
            let response = await fetch(`${photoUrl}?query=car`, {
                method: "GET",
                headers: {
                    "Authorization": authKey,
                }
            }
            );
            let data = await response.json();
            arrLoadSecondary = data.photos;
            printCards(arrLoadSecondary);
            //console.log(arrLoadSecondary);
        }
        catch (error) {
            console.log("ERRORE: " + error);
        }
    });

    btnSearch.addEventListener("click", async function () {
        let searchText = document.getElementById("searchText");
        let searchError = document.getElementById("searchError");
        if(searchText.value){
            try {
            let response = await fetch(`${photoUrl}?query=${searchText.value}`, {
                method: "GET",
                headers: {
                    "Authorization": authKey,
                }
            }
            );
            let data = await response.json();
            arrSearch = data.photos;
            printCards(arrSearch);
            console.log(arrSearch);
        }
        catch (error) {
            console.log("ERRORE: " + error);
        }
        }else{
            searchError.innerText= "Devi inserire almeno una chiave di ricerca";
            searchError.classList.toggle("displayed");
        }
        
    });

};




function printCards(arrayFornito){
    for(let i = 0 ; i < nCard; i++){
        let img = document.querySelector(`#card${i} img`);
        let btnHide = document.querySelector(`#card${i} button:last-child`);
        let small = document.querySelector(`#card${i} small`);

        img.setAttribute("src", arrayFornito[i].src.tiny);
        btnHide.innerText = "Hide";
        btnHide.setAttribute("onclick", `deleteItem(${i})`);
        small.innerText = arrayFornito[i].id;

    
    }
};

function deleteItem(id){
    let toDelete = document.getElementById("card"+id);
    toDelete.remove();
};