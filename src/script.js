function fetchData() {
    fetch('moon.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let output = '<h2 class="mb-4">Countries</h2>'
            data.forEach((item) => {
                output += `
        <ul class="list-group mb-3">
        <img src="${item.images.png}" alt="">
          <li class="list-group-item">${item.name}</li>
          <li class="list-group-item">${item.description}</li>
          <li class="list-group-item">${item.distance}</li>
          <li class="list-group-item">${item.travel}</li>
        </ul>
      `
            })
            document.getElementById('country').innerHTML = output
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
            document.getElementById('country').innerHTML = 'Error Loading Data'
        })
}
fetchData()