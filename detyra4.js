// Detyra 4

let store = {
  one: true,
  two: false,
};

const detyra4 = () => {
  console.log("po kerkojm dy torte");
  return new Promise((resolve, reject) => {
    store.one && store.two ? resolve("Po Kemi") : reject("two");
  });
};

let goBuy = (element) => {
  console.log("Po kerkoj diku tjeter");
  store[element] = true;
  detyra4()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Jo Nuk kemi");
      goBuy(err);
    });
};

detyra4()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Jo nuk kemi");
    goBuy(err);
  });
