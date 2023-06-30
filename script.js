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
    this.list();
    this.cancel();
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

  list() {
    let tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    for (let i = 0; i < this.arrProducts.length; i++) {
      let tr = tbody.insertRow();
      let td_id = tr.insertCell();
      let td_name = tr.insertCell();
      let td_price = tr.insertCell();
      let td_delete = tr.insertCell();

      td_id.innerText = this.arrProducts[i].id;
      td_name.innerText = this.arrProducts[i].nameProduct;
      td_price.innerText = this.arrProducts[i].priceProduct;

      let img = document.createElement("img");
      img.src = "./images/del.png";
      img.setAttribute(
        "onclick",
        "product.delete(" + this.arrProducts[i].id + ")"
      );
      td_delete.appendChild(img);
    }
  }

  cancel() {
    document.getElementById("pdName").value = "";
    document.getElementById("pdPrice").value = "";
  }

  delete(id) {
    let tbody = document.getElementById("tbody");
    for (let i = 0; i < this.arrProducts.length; i++) {
      if (this.arrProducts[i].id == id) {
        this.arrProducts.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
    alert("O item foi apagado com sucesso!");
  }
}

let product = new Product();
