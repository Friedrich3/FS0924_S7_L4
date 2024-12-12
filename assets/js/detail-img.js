const authKey = "TCCwYg5eMNtKwz5YkZ9yNzRkwBOmuEscvclv2jFwxIxgNEicOhzMYnoE";
const urlPexel = "https://api.pexels.com/v1/photos/";


const param = new URLSearchParams(window.location.search).get("photoId");
let singleImage = {};



document.addEventListener("load", init());

function init() {
    getDatas();
};



async function getDatas() {
    let url = urlPexel + param;
    try {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": authKey,
            }
        })
        let data = await response.json();
        singleImage = data;
        console.log(singleImage);
        printImage(singleImage);
    } catch (error) {
        console.log("errore:" + error);
    }

};

function printImage(element) {
    let detailJumbo = document.getElementById("detailJumbo");
    let photoContainer = document.getElementById("photoContainer");
    let nomeAutore = document.getElementById("nomeAutore");
    let newImg = document.createElement("img");
    newImg.setAttribute("src",`${element.src.large}`);
    newImg.setAttribute("alt",`${element.alt}`); 
    photoContainer.appendChild(newImg);
    nomeAutore.setAttribute("href", `${element.photographer_url}`)
    nomeAutore.innerText = `${element.photographer}`;

    detailJumbo.setAttribute("style",`background-color:${element.avg_color};`);


};
