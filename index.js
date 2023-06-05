const addressArr = [
  "Россия, г. Москва, Cлавянский бульвар, д.1, кв. 15",
  "Россия, Воронежская обл., г. Воронеж, ул. Плехановская, д.54, кв. 7",
  "Россия, Новосибирск, Ленинский район, микрарайон Горский, 41, 12",
  "Россия, Новосибирск, Красный проспект, 322, 4",
  "Landsberger Str. 425, 81241 München, Germany",
];

class Row {
  constructor({ number, address, selector }) {
    this._number = number + 1;
    this._address = address;
    this._template = selector;
  }

  _getTemplate() {
    const rowElement = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);
    return rowElement;
  }

  createRow() {
    this._element = this._getTemplate();
    this._element.querySelector(".element-number").textContent = this._number;
    this._element.querySelector(".element-address").textContent = this._address;
    return this._element;
  }
}

function createRow(number, address) {
  const row = new Row({
    number: number,
    address: address,
    selector: "#element-template",
  });
  const placeElement = row.createRow();
  return placeElement;
}

function addAddress() {
  addressArr.forEach((item) => {
    const rowElement = createRow(addressArr.indexOf(item), item);
    document.querySelector("table").append(rowElement);
  });
}

addAddress();

const form = document.forms.addressForm;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const address = form.elements.address.value;
  addressArr.push(address);
  const rowElement = createRow(addressArr.indexOf(address), address);
  document.querySelector("table").append(rowElement);
  form.elements.address.value = "";
});
