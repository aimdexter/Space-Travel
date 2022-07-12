// javascript for destination.html
const rolee = document.querySelector('.role');
const crewnamee = document.querySelector('.crewname');
const bioo = document.querySelector('.bio');

// fetching data from json
const renderDetails = async (nameeu) => {
    const res = await fetch(`http://localhost:3000/technology/` + `?name=${nameeu}`);
    if (!res.ok) {
        window.location.replace("/");
    }
    const reponse = await res.json();
    const name = `
    ${reponse[0].name}
  `
    const role = `
    ${reponse[0].role}
  `
    const descriptionn = `
  ${reponse[0].description}
`



    crewnamee.innerHTML = name;
    bioo.innerHTML = descriptionn;
    const image = reponse[0].images.landscape;
    document.getElementById("image").src = image;
}

let buttonList = document.querySelectorAll("button");
buttonList.forEach(function (i) {
    i.addEventListener("click", function (e) {
        renderDetails(i.value);
    })
})


window.addEventListener('DOMContentLoaded', () => renderDetails());