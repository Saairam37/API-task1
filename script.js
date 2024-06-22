async function getBreedData() {

    var breedName = document.getElementById('breedName').value
    let data = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
    console.log(breedName)
    confirm('please check the spelling of the breed name you have entered');
    let res = await data.json()
    console.log(res)
  
    var breedContainer = document.getElementById('breedContainer')
    breedContainer.innerHTML = `<div class="row g-0">
  <div class="col-md-4 m-0">
  <img src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" height="370" width="193">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <b><h5 class="card-title">You Have Entered ${breedName}</h5></b>
      <b><p class="card-text"><small class="text-muted">Cat Name is: ${res[0].name}</small></p></b>
      <b><p class="card-text"><small class="text-muted">Grooming is: ${res[0].affection_level}</small></p></b>
      <b><p class="card-text"><small class="text-muted">Energy_level is: ${res[0].energy_level}</small></p></b>
      <b><p class="card-text"><small class="text-muted">Origin Name is: ${res[0].origin}</small></p></b>
       <b><p class="card-text"><small class="text-muted">Weight is: ${res[0].weight.metric} kgs</small></p></b>
      <b><p class="card-text"><small class="text-muted">life_span is: ${res[0].life_span} years</small></p></b>
      <b><p class="card-text"><small class="text-muted">Description is: ${res[0].description} years</small></p></b>
    </div>
  </div>
  </div>`
  }
