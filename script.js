const products = [
    {
    nombre: "Harina" ,
    precio: 35
    },
    {
    nombre: "Pan" ,
    precio: 25
    },
     {
    nombre: "Papa" ,
    precio: 52
    },
    {
    nombre: "Palta" ,
    precio: 55
    },
    {
    nombre: "Fideos" ,
    precio: 85
    },
    {
    nombre: "Aceite" ,
    precio: 350
    },
    {
    nombre: "Sopa" ,
    precio: 86
    },
    {
    nombre: "Mermelada" ,
    precio: 108
    },
    {
    nombre: "Porotos" ,
    precio: 69
    },
    {
    nombre: "Lentejas" ,
    precio: 85
    },
    {
    nombre: "Mandarina" ,
    precio: 43
    },
    {
    nombre: "Banana" ,
    precio: 79
    }, 
    {
    nombre: "Leche de almendras" ,
    precio: 145
    },
    {
    nombre: "Papel higiénico" ,
    precio: 147
    },
    {
    nombre: "Lavandina" ,
    precio: 55
    },
    {
    nombre: "Alcohol en gel" ,
    precio: 123
    },
    {
    nombre: "Shampoo" ,
    precio: 400
    },
    {
    nombre: "Arroz" ,
    precio: 66
    },
    {
    nombre: "Harina" ,
    precio: 35
    },
    {
    nombre: "Salsa de tomate" ,
    precio: 35
    }, 
];

// Creo el Fragment

const $divContainer = document.querySelector(".shop");
document.body.appendChild($divContainer);

$fragment = document.createDocumentFragment();
$section = document.createElement("section");
$divContainer.appendChild($section);

// Función para recorrer productos y crear todos los elementos

products.forEach((el) => {

  const $figure = document.createElement("figure");
  $fragment.appendChild($figure);  

  const $img = document.createElement("img");
  $img.setAttribute("src" , "https://placeimg.com/100/100/any")
  $figure.appendChild($img);
    
  const $figcaption = document.createElement("figcaption");
  $figcaption.textContent = el.nombre;
  $figure.appendChild($figcaption);

  const $precio = document.createElement("p");
  $precio.textContent = "$" + el.precio;
  $figure.appendChild($precio);

  const $btn = document.createElement("button");
  $btn.textContent = "Agregar al carrito";
  $figure.appendChild($btn);

// Evento Agregar al carrito

  $btn.addEventListener("click" , () => {
    $tr = document.createElement("tr");
    $tr.classList.add("trContainer");
    $tbody.appendChild($tr);

    $tdProduct = document.createElement("td");
    $tr.appendChild($tdProduct);
    $tdProduct.classList.add("productName");
    $tdProduct.textContent = el.nombre;

    $signoPeso = document.createElement("td");
    $tr.appendChild($signoPeso);
    $signoPeso.classList.add("signoPeso")
    $signoPeso.textContent = "$";
    
    $tdPrice = document.createElement("td");
    $tr.appendChild($tdPrice);
    $tdPrice.classList.add("precios");
    $tdPrice.textContent = el.precio;
    $figure.remove(); // Quita el boton para agregar al carrito, luego de ser presionado 1 vez.
  })
});

// Agrego el fragment

$section.appendChild($fragment);

// Creo H2, DIV Container, Table 

const $divContainerCart = document.createElement("div");
$divContainerCart.classList.add("cartContainer");
$divContainer.appendChild($divContainerCart);

const $h2 = document.createElement("h2");
$h2.textContent = "CARRITO";
$divContainerCart.appendChild($h2);

const $table = document.createElement("table");
$divContainerCart.appendChild($table);

const $tbody = document.createElement ("tbody");
$table.appendChild($tbody);

// btn Comprar

const $btnComprar = document.createElement("button");
$btnComprar.classList.add("btnComprar");
$divContainerCart.appendChild($btnComprar);

$btnComprar.textContent = "COMPRAR";

// btn Reiniciar Compra

const $btnReiniciar = document.createElement("button");
$btnReiniciar.classList.add("btnReiniciar");
$divContainerCart.appendChild($btnReiniciar);

$btnReiniciar.textContent = "Reiniciar su Compra";

$btnReiniciar.addEventListener("click", () => location.reload());

// Función Calcular el Total

let showTotals = () => {
  const total = [];
  const items = document.querySelectorAll(".precios");
  items.forEach((item) => total.push(parseFloat(item.textContent)));

  const totalMoney = total.reduce((total,item) => {
    total += item;
    return total;
  },0);

  $trTotal = document.createElement("tr");
  $trTotal.classList.add("trTotal");
  $trTotal.textContent = "TOTAL";
  $tbody.appendChild($trTotal);

  $signoPeso = document.createElement("td");
  $trTotal.appendChild($signoPeso);
  $signoPeso.classList.add("signoPeso")
  $signoPeso.textContent = "$";

  $tdTotal = document.createElement("td");
  $tdTotal.textContent = totalMoney;
  $trTotal.appendChild($tdTotal);

  alert("El total a pagar es $ " + totalMoney);
  $btnComprar.removeEventListener("click", showTotals); // No deja que presiones el boton comprar, una vez cerrada la compra.
  $section.remove(); // Remueve el Shop al finalizar la compra
}

$btnComprar.addEventListener("click", showTotals);