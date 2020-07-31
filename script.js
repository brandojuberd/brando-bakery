console.log("helloWorld");

addItem1 = document.getElementById("addItem1").addEventListener("click", addClick);
subItem1 = document.getElementById("subItem1").addEventListener("click", subClick);

addItem1 = document.getElementById("addItem2").addEventListener("click", addClick);
subItem1 = document.getElementById("subItem2").addEventListener("click", subClick);

addItem1 = document.getElementById("addItem3").addEventListener("click", addClick);
subItem1 = document.getElementById("subItem3").addEventListener("click", subClick);

cartButton = document.getElementById("cartButton").addEventListener("click", cartButton);

function addClick(i){
  console.log(i.target.id);

  if(i.target.id === "addItem1"){
    document.getElementById("totalItem1").innerText = Number(document.getElementById("totalItem1").innerText) + 1
  }
  if(i.target.id === "addItem2"){
    document.getElementById("totalItem2").innerText = Number(document.getElementById("totalItem2").innerText) + 1
  }
  if(i.target.id === "addItem3"){
    document.getElementById("totalItem3").innerText = Number(document.getElementById("totalItem3").innerText) + 1
  }
}

function subClick(i){
  console.log(i.target.id);
  if(i.target.id === "subItem1"){

    document.getElementById("totalItem1").innerText = Number(document.getElementById("totalItem1").innerText) - 1
  }
  if(i.target.id === "subItem2"){
    document.getElementById("totalItem2").innerText = Number(document.getElementById("totalItem2").innerText) - 1
  }
  if(i.target.id === "subItem3"){
    document.getElementById("totalItem3").innerText = Number(document.getElementById("totalItem3").innerText) - 1
  }
}

orderButton1 = document.getElementById("orderItem1").addEventListener("click", orderButton);
orderButton2 = document.getElementById("orderItem2").addEventListener("click", orderButton);
orderButton3 = document.getElementById("orderItem3").addEventListener("click", orderButton);

function orderButton(i){
  // let total = 0;
  console.log(document.getElementById("totalItemCart3").innerText); 
  if (i.target.id === "orderItem1"){
    document.getElementById("totalItemCart1").innerText = Number(document.getElementById("totalItemCart1").innerText) + Number(document.getElementById("totalItem1").innerText) 
    document.getElementById("cartItem1").style.display = "block";
  }
  if (i.target.id === "orderItem2"){
    document.getElementById("totalItemCart2").innerText = Number(document.getElementById("totalItemCart2").innerText) + Number(document.getElementById("totalItem2").innerText) 
    document.getElementById("cartItem2").style.display = "block";
  }
  if (i.target.id === "orderItem3"){
    document.getElementById("totalItemCart3").innerText = Number(document.getElementById("totalItemCart3").innerText) + Number(document.getElementById("totalItem3").innerText) 
    document.getElementById("cartItem3").style.display = "block";
  }
  calculate()
}

cancelButton1 = document.getElementById("cancelItem1").addEventListener("click", cancelButton);
cancelButton2 = document.getElementById("cancelItem2").addEventListener("click", cancelButton);
cancelButton3 = document.getElementById("cancelItem3").addEventListener("click", cancelButton);

function cancelButton(i){
  console.log("gajadi");
  if (i.target.id === "cancelItem1"){
    document.getElementById("totalItemCart1").innerText = 0;
    document.getElementById("cartItem1").style.display = "none";
  }
  if (i.target.id === "cancelItem2"){
    document.getElementById("totalItemCart2").innerText = 0;
    document.getElementById("cartItem2").style.display = "none";
  }
  if (i.target.id === "cancelItem3"){
    document.getElementById("totalItemCart3").innerText = 0;
    document.getElementById("cartItem3").style.display = "none";
  }

}

function calculate(){
  
  let item1 = document.getElementById("totalItemCart1").innerText * 20000;
  let item2 = document.getElementById("totalItemCart2").innerText * 50000;
  let item3 = document.getElementById("totalItemCart3").innerText * 40000;
  let total = 0;
  total = item1 + item2 + item3;
  // console.log(totalIte)
  document.getElementById("allTotal").innerText = total;
}



// cartButton = document.getElementById("cartButton").addEventListener("click", cartButton);

console.log(cartButton);
function cartButton(){
  document.getElementById("dropdown").classList.toggle("dropdown");
  console.log(document.getElementById("dropdown").classList);
}




