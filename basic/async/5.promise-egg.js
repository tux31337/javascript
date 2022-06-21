function fecthEgg(chicken) {
  return Promise.resolve(`${chicken} => 계란`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 계란후라이`);
}

function getChicken() {
  return Promise.resolve(`정원 => 닭`);
}

getChicken()
  .then((chicken) => {
    return fecthEgg(chicken);
  })
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));
