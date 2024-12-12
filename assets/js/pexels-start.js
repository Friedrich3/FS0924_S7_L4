const authKey = "TCCwYg5eMNtKwz5YkZ9yNzRkwBOmuEscvclv2jFwxIxgNEicOhzMYnoE";
const photoUrl = "https://api.pexels.com/v1/search"; // VA UNITA AD UNA QUERY PER CERCARE LE FOTO ( ?query=CosaCercare)
const dinamicUrl = "https://api.pexels.com/v1/curated";  //VA UNITA AD UNA QUERY PER CERCARE LE FOTO ( ?query=CosaCercare) //EXTRA DEGLI EXTRA


let btnLoadImages = document.getElementById("loadImages");
let btnLoadSecondary = document.getElementById("loadSecondary");

let arrLoadImages = [];
let arrLoadSecondary = [];

const nCard = 9; //numero di carte a video 


document.addEventListener("load", init());

function init() {
    loadImgOnClick();
};


function loadImgOnClick() {
    btnLoadImages.addEventListener("click", async function () {
        try {
            let response = await fetch(`${photoUrl}?query=sunset`, {
                method: "GET",
                headers: {
                    "Authorization": authKey,
                }
            }
            );
            let data = await response.json();
            arrLoadImages = data;
            printCards();
            //console.log(arrLoadImages);
        }
        catch (error) {
            console.log("ERRORE: " + error);
        }
    });

    btnLoadSecondary.addEventListener("click", async function () {
        try {
            let response = await fetch(`${photoUrl}?query=cherry-blossom`, {
                method: "GET",
                headers: {
                    "Authorization": authKey,
                }
            }
            );
            let data = await response.json();
            arrLoadSecondary = data;
            printCards();
            //console.log(arrLoadSecondary);
        }
        catch (error) {
            console.log("ERRORE: " + error);
        }
    });
};

function printCards(){
    for(let i = 0 ; i < nCard; i++){
        
    }
};