let selectedPrice = 0;
let selectedModel = 0;

function selectCar(element,price,model){
    document.querySelectorAll('.car-model').forEach
    (car=> {car.classList.remove('active'); });

element.classList.add('active');
selectedPrice=price;
selectedModel=model;
document.getElementById("Result").classList.add("hidden");
}

function execCalc(){
    if(selectedPrice==0){
        alert("Please select a car model!");
        return;
    }

let quantity=parseInt(document.getElementById("quantity").value);
if(quantity<1 || isNaN(quantity)) quantity=1;

let brut = selectedPrice * quantity;
let discount= brut*0.10;
let total= brut-discount;

document.getElementById("nameModel").innerText=selectedModel;
document.getElementById("showBrut").innerText = brut.toLocaleString();
document.getElementById("showDiscount").innerText = discount.toLocaleString();
document.getElementById("showTotal").innerText = total.toLocaleString();

document.getElementById("Result").classList.remove("hidden");
}