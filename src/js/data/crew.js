// javascript for destination.html
const rolee = document.querySelector('.role');
const crewnamee = document.querySelector('.crewname');
const bioo = document.querySelector('.bio');

// fetching data from json
const renderDetails = async (nameeu) => {
    const res = await fetch(`http://localhost:3000/crew/` + `?name=${nameeu}`);
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
    const bio = `
  ${reponse[0].bio}
`
    const image = reponse[0].images.png;
    document.getElementById("crew-image").src = image;

    crewnamee.innerHTML = name;
    rolee.innerHTML = role;
    bioo.innerHTML = bio;
}

let buttonList = document.querySelectorAll("button");
buttonList.forEach(function (i) {
    i.addEventListener("click", function (e) {
        console.log(i.value);
        renderDetails(i.value);
    })
})


// window.addEventListener('DOMContentLoaded', () => renderDetails());