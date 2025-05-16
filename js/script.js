var ALLBtn = document.querySelectorAll(".btn")
var content = document.querySelector("#content")
var showprice = document.querySelector("#showprice")
var price = document.querySelector("#price")
var del = document.querySelector("#del")
var totalprice = 0


ALLBtn.forEach(function(item){
      item.onclick = function(){
        content.innerHTML += item.getAttribute("product")+"<br>"
        totalprice += +(item.getAttribute("price"))

        if(content.innerHTML != ""){
            showprice. style .display = "block"
            showprice. style .margin = "auto"
            showprice. style .backgroundColor = "rgb(100, 100, 105)"
             showprice. style .color = "#fff"
              showprice. style .width = "140px"
              showprice. style .height = "40px"
              showprice.style. outline = "none"

              del .style .display = "block"
              del. style .margin = "auto"
            del. style .backgroundColor ="rgb(100, 100, 105)"
             del. style .color = "#fff"
              del. style .width = "140px"
              del. style .height = "40px"
        }
    }
})
showprice.addEventListener('click',() =>{
    if(totalprice > 500){
        alert("you got discount 10%")
        totalprice -= 50 
    }
  price.innerHTML = totalprice
})
    



del .onclick = function(){
    content.innerHTML = ""
    price.innerHTML = totalprice = 0
}
////////////////////////
var inputsearch = document.getElementById("search")
var cardlist = document.querySelectorAll(".card")
var notfound = document.getElementById("notfound")


inputsearch.addEventListener('input', () =>{
    var inputValue = inputsearch.value.toLowerCase()

    var anyVaisble = false 
     cardlist.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.style.display = "list-item"
            anyVaisble = true
        }else{
            item.style.display = "none"
        }
    })
          notfound.style.display = anyVaisble ? "none" : "block"
})
