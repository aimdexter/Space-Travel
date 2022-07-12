// javascript for destination.html
const destinationdesc = document.querySelector('.description');
const destinationname = document.querySelector('.namedest');
const dests = document.querySelector('.dests');
const avg = document.querySelector('.avg');

// fetching data from json
const renderDetails = async (nameeu) => {
  const res = await fetch(`http://localhost:3000/destinations/` + `?name=${nameeu}`);
  if (!res.ok) {
    window.location.replace("/");
  }
  const descr = await res.json();
  const desc = `
    ${descr[0].description}
  `
  const name = `
    ${descr[0].name}
  `
  const avgdata = `
  ${descr[0].distance}
`
  const image = descr[0].images.png;
  document.getElementById("image").src = image;

  destinationdesc.innerHTML = desc;
  destinationname.innerHTML = name;
  avg.innerHTML = avgdata;
  // dests.innerHTML = names;
}




let buttonList = document.querySelectorAll("button");
buttonList.forEach(function (i) {
  i.addEventListener("click", function (e) {
    renderDetails(i.value);
  })
})


// window.addEventListener('DOMContentLoaded', () => renderDetails());