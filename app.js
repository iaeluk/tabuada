const Storage = {
    get() {
        let items = localStorage.getItem('finalCount') ? JSON.parse(localStorage.getItem('finalCount')) : []

        return items
    },
    set(transactions) {
       localStorage.setItem("finalCount", JSON.stringify(transactions))
    },
}

let jaCalculados = [];

function calculaTabuada() {
    
    let number = document.getElementById("input").value;

    for (let i = 1; i <= 10; i++) {
        let total = `${number}x${i} = ${number * i} <br>`;
        jaCalculados.push(total);
    }

    Storage.set(jaCalculados);
    
}

function formatar() {
   toFormat = Storage.get().toString();

   return toFormat
}

function mostrarNoHtml(){
    document.getElementById("tabuada").innerHTML = formatar().split(',').join('')

    
}    

function button() {
    let input = document.getElementById("input");
    let button = document.getElementById("button");
    
    button.disabled = true; //setting button state to disabled
    
    input.addEventListener("change", stateHandle);
    
    function stateHandle() {
      if (document.getElementById("input").value === "") {
        button.disabled = true; //button remains disabled
      } else {
        button.disabled = false; //button is enabled
      }
    }
}



const App = {
    init() {
        button()
        mostrarNoHtml()
        localStorage.clear()
        },
}

App.init()
