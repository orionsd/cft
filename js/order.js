

var digit;

function Cart() {
    this.cell = [];
}

Cart.prototype.create = function () {

};

var k = 0;


Cart.prototype.add = function (id, title, price) {

    this.cell.push({id, title, price});
    //console.log(this.cell);
    k = this.cell.length - 1;
    // console.log(this.cell[k]);

};


Cart.prototype.remove = function (id) {

    for (var j = 0; j < this.cell.length; j++) {

        if (this.cell[j].id == id) {
            this.cell[j].remove();
        }
    }
};


var cart = new Cart();

var num = cart.cell.length - 1;

console.log(num);

function outStorage() {
    var currentItem = localStorage.getItem('key');
    outcome = JSON.parse(currentItem);
    console.log(outcome.cell[num].title);
     cart.cell = outcome.cell;
    insertBlock_module();
}

outStorage();


var d_array;

function insertBlock_module() {
    var digit = outcome.cell[0].id;
    d_array = [];

    for (var s = 0; s < d_array.length; s++) {
        if (digit == d_array[s]) {
            return false;
        }
    }
}

d_array.push(digit);

cart.add(outcome.cell[num].id, outcome.cell[num].title, outcome.cell[num].price);

console.log(currentItem.cell[num].id);

var apps = [];


console.log(cart);



var t = document.querySelector('#template_row');

var k = document.querySelector('.table_popup');
document.querySelector('.table_popup').insertBefore(t.content.cloneNode(true), document.querySelector('.table__row-02'));
document.querySelector('.table__row-02').setAttribute("id", "elem" + num);
document.querySelector('.table__close_app').setAttribute("id", "cb" + num);

console.log(num);

var table_id = k.querySelector('#elem' + num);
var table_title = k.querySelector('.table__title_app');
var table_price = k.querySelector('.table__price_app');
table_title.innerHTML = cart.cell[num].title;
table_price.innerHTML = cart.cell[num].price;

var rem_btn = document.querySelector("#cb" + num);

rem_btn.onclick = function () {
    var elem = document.querySelector("#elem" + num);
    k.removeChild(elem)
};



var table_price = document.querySelector('.table__price_app');
var table_price_overall = document.querySelector('.table__price_app-02');




/*var currentItem;*/



