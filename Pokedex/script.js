class Pokemon {
  constructor(id, img, name, type, weight, next_evolution, weaknesses) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.next_evolution = next_evolution;
    this.weaknesses = weaknesses;
  }

  renderizar() {
    return `<div class="col-md-4">
            <div class="card">
                <img class="img-thumbnail" src="${this.img}" onclick=mostrarDetalle(${this.id}) alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <span class="badge bg-success">${this.type.join(" - ")}</span>
                </div>
            </div>
            </div>`;
  }

  renderizarDetalle() {
    return `  
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4 d-flex">
            <img src="${
              this.img
            }" class="img-thumbnail rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">Peso: ${this.weight}</p>
                <p class="card-text">Evolución: ${this.next_evolution
                  ?.map((item) => item.name)
                  .join("-")??'Sin Evolución'}</p>
                <p class="card-text">Debilidades: ${this.weaknesses.join(
                  "-"
                )}</p>
            </div>
        </div>
    </div>
  </div>`;
  }
}

let pokemones = [];

document.getElementById("buscar").addEventListener("click", filtrarPokemon);

fetch("./pokedex.json")
  .then((response) => response.json())
  .then((data) => {
    pokemones = data.pokemon.map(
      (element) =>
        new Pokemon(
          element.id,
          element.img,
          element.name,
          element.type,
          element.weight,
          element.next_evolution,
          element.weaknesses
        )
    );
    pokemones.forEach(
      (pokemon) =>
        (document.getElementById("grilla").innerHTML += pokemon.renderizar())
    );
    console.log("pokemos", pokemones);
  })
  .catch((e) => {
    console.error("Error:", e);
  });

function filtrarPokemon() {
  const dato = document.getElementsByClassName("search")[0].value;

  if (dato) {
    const busqueda = pokemones.filter((item) =>
      item.name.toLowerCase().includes(dato.toLowerCase())
    );
    document.getElementById("grilla").innerHTML = busqueda[0].renderizar();
  } else {
    window.location.reload();
  }
}

function mostrarDetalle(info) {
  const busqueda = pokemones.filter((item) => item.id == info);
  document.getElementById("detalle").innerHTML = busqueda[0].renderizarDetalle();

  var myModal = document.getElementById("modal1");
  var bsModal = new bootstrap.Modal(myModal, {
    keyboard: false,
  });

  bsModal.show();
}
