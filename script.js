class Product {
  constructor() {
    this.id = 1;
    this.arrProducts = [];
  }

  add() {
    let product = this.readData();
    if (this.validate(product) == true) {
      this.save(product);
    }

    console.log(this.arrProducts);
  }

  readData() {
    let product = {};

    product.id = this.id;
    product.nameProduct = document.getElementById("pdName").value;
    product.priceProduct = document.getElementById("pdPrice").value;

    return product;
  }

  validate(product) {
    let message = "";

    if (product.nameProduct == "") {
      message += "Por favor, insira corretamente o nome do produto! \n";
    }

    if (product.priceProduct == "") {
      message += "Por favor, insira corretamente o preço do produto! \n";
    }

    if (message != "") {
      alert(message);

      return false;
    }

    return true;
  }

  save(product) {
    this.arrProducts.push(product);
    this.id++;
  }
}

let product = new Product();
