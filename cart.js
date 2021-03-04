onload = showProductListing;

const ostoskori = [
    {
    name: 'Nike Dri-FIT',
    color: '3 Colours',
    price: 27.99,
    id: 0,
    category: "Men's t-shirt",
    description: `The Nike Dri-FIT Men's Training T-Shirt
                  combines sweat-wicking fabric with a non-
                  restrictive fit and feel that helps keep you
                  comfortable throughout your entire workout.`,
    image: 'shopItems/Nike-Dri-FIT-1.jpg',
    images: ['shopItems/NikeDriFIT2.jpg', 'shopItems/Nike-Dri-FIT-1.jpg','shopItems/NikeDriFIT2.jpg', 'shopItems/Nike-Dri-FIT-1.jpg']
},
{
    name: 'Nike ESC',
    color: '1 Colour',
    price: 374.99,
    id: 1,
    category: "Men's hoodie",
    description: `The Nike Sportswear ESC Fleece Full-Zip Hoodie 
                  is made from a double-sided spacer fabric for  added
                  warmth without extra weight. A slightly taller collar
                  in the hood helps keep you dry  in cold, wet weather.`,
    image: 'shopItems/Nike-ESC-1.jpg',
    images: ['shopItems/Nike-ESC-2.jpg', 'shopItems/Nike-ESC-1.jpg','shopItems/Nike-ESC-2.jpg', 'shopItems/Nike-ESC-1.jpg']
},
{
    name: 'Jordan Jumpman',
    color: '1 Colour',
    price: 32.99,
    id: 2,
    category: "Men's t-shirt",
    description: `The Jordan Jumpman T-Shirt is made from soft,
                  comfortable fabric for easy, all-day comfort.
                  A large printed Jumpman says it all without words.`,
    image: 'shopItems/Jordan-Jumpman-1.jpg',
    images: ['shopItems/Jordan-Jumpman-2.jpg', 'shopItems/Jordan-Jumpman-1.jpg', 'shopItems/Jordan-Jumpman-2.jpg', 'shopItems/Jordan-Jumpman-1.jpg']
},
{
    name: 'Jordan HBR',
    color: '2 Colours',
    price: 77.99,
    id: 3,
    category: "Men's t-shirt",
    description: `Come at the Jumpman from a new angle in the Jordan HBR T-Shirt, a cotton-made crew with printed graphics.`,
    image: 'shopItems/Jordan-HBR-1.jpg',
    images: ['shopItems/Jordan-HBR-2.jpg', 'shopItems/Jordan-HBR-1.jpg', 'shopItems/Jordan-HBR-2.jpg', 'shopItems/Jordan-HBR-1.jpg',]
},
{
    name: 'Nike Polo Rafa',
    color: '2 Colours',
    price: 27.99,
    id: 4,
    category: "Men's t-shirt",
    description: `This isn't your average polo—it's The Nike Polo Rafa.
                  Every detail, from its innovative, sweat-wicking fabric
                  to the hints of orange that nod to Nike's original shoebox,
                  has been thoughtfully crafted to meet the needs of the everyday you.
                  The result is a street-ready style that looks as at home on the course
                  or court as it does everywhere else.`,
    image: 'shopItems/The-Nike-Polo-Rafa-1.jpg',
    images: ['shopItems/The-Nike-Polo-Rafa-2.jpg', 'shopItems/The-Nike-Polo-Rafa-1.jpg', 'shopItems/The-Nike-Polo-Rafa-2.jpg', 'shopItems/The-Nike-Polo-Rafa-1.jpg',]
},
{
    name: 'Dri-FIT Strike',
    color: '3 Colours',
    price: 82.99,
    id: 5,
    category: "Men's t-shirt",
    description: `The Nike Dri-FIT Strike Top is made from stretchy, sweat-wicking fabric to help keep you dry and comfortable when the game heats up.`,
    image: 'shopItems/Nike-Dri-FIT-Strike-1.jpg',
    images: ['shopItems/Nike-Dri-FIT-Strike-2.jpg','shopItems/Nike-Dri-FIT-Strike-1.jpg','shopItems/Nike-Dri-FIT-Strike-2.jpg','shopItems/Nike-Dri-FIT-Strike-1.jpg',]
},
];

let ostosArray = [];

function numberOfItemsCart(){
    return ostosArray.length;
}

window.addEventListener('load', showProductListing);


        


function showProductListing() {
    target = document.getElementById('target');
    target.innerHTML = `
<div class="categoryHeader">
    <h3>Men's Clothing</h3>
</div>
<div class="myContainer">
<div class="tables">
    <table>
        <thead>
            <td><h3>Categories</h3></td>
        </thead>
        <tbody>
            <tr><td><button>All Products</button></td></tr>
            <tr><td><button>T-Shirts</button></td></tr>
            <tr><td><button>Shirts</button></td></tr>
            <tr><td><button>Trousers</button></td></tr>
            <tr><td><button>Jeans</button></td></tr>
            <tr><td><button>Shoes</button></td></tr>
            <tr><td><button>Accessories</button></td></tr>
        </tbody>
    </table>
    <img src="shopItems/border.png">
    <table>
        <thead>
            <tr><td><h3>Filter by</h3></td></tr>
            <tr><td><h4 style="margin-left: 1px">Size</h4></td></tr>
        </thead>
        <tbody>
            <tr><td><button>Extra Small</button></td></tr>
            <tr><td><button>Small</button></td></tr>
            <tr><td><button>Medium</button></td></tr>
            <tr><td><button>Large</button></td></tr>
            <tr><td><button>Extra Large</button></td></tr>
            <tr><td><button>2Extra Large</button></td></tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr><td><h4 style="margin-left: 1px">Brands</h4></td></tr>
        </thead>
        <tbody>
            <tr><td><button>Adidas</button></td></tr>
            <tr><td><button>Dickies</button></td></tr>
            <tr><td><button>Gucci</button></td></tr>
            <tr><td><button>Lacoste</button></td></tr>
            <tr><td><button>Levi's</button></td></tr>
            <tr><td><button>Nike</button></td></tr>
            <tr><td><button>Puma</button></td></tr>
            <tr><td><button>Supreme</button></td></tr>
        </tbody>
    </table>
</div>
<div class="firstColumn">
    <div class="sortBy">
        <label for="sort">Sort by:</label>
        <select id="sort">
            <option>Recommended</option>
            <option>Newest</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
        </select>
    </div>
    <div class="products">
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
    </div>
</div>
<div class="secondColumn">
    <div class="results">
        <h3>Showing 1 - 6 of 24 results</h3>
    </div>
    <div class="products">
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
        <div class="frame">
            <img class="imageClassFront">
            <div class="productDetails">
                <h3 class="nameClassFront"></h3>
                <t class="colorClassFront"></t>
                <br>
                <t class="priceClassFront"></t>
                <button class="ostoskoriin"><i class="fas fa-cart-plus fa-2x"></i></button>
            </div>
        </div>
    
    
    </div>
</div>
</div>
<div class="footer">
    <div id="newsletter">
    <h5>Subscribe to our newsletter to get a 10% discount code</h5>
    <div id="form">
        <input type="text" name="email" placeholder="your@email.com">
        <button class="submit">SUBMIT</button>
    </div>
    </div>
    <div class="footer2">
        <button>ABOUT US</button>
        <button>CONTACT US</button>
        <button>FAQ</button>
        <button>SOCIAL</button>
    </div>
</div>`
let buttonCart = document.querySelectorAll('.ostoskoriin');
let frontImages = document.querySelectorAll('.imageClassFront');
let frontNames = document.querySelectorAll('.nameClassFront');
let frontPrices = document.querySelectorAll('.priceClassFront');
let frontColors = document.querySelectorAll('.colorClassFront');
let koriNumero = document.querySelector('.koriNumero');    
for (let i=0; i<frontImages.length; i ++){
    frontImages[i].src = ostoskori[i].image;
    frontImages[i].onclick = () => showProductDetail(i);
    frontNames[i].innerHTML = ostoskori[i].name;
    frontPrices[i].innerHTML = '€' + ostoskori[i].price;
    frontColors[i].innerHTML = ostoskori[i].color;
    buttonCart[i].onclick = () => addToCart(i);

}




function addToCart(index){
    ostosArray.push(ostoskori[index]);
    koriNumero.innerHTML = numberOfItemsCart();
    console.log(ostosArray);


}


};

function showProductDetail(index){
target = document.getElementById('target');
target.innerHTML = `        <div id = "navbar">
    
    <button onclick="showProductListing()">Search</button>
</div>
<div id="Content">
    <div id="Description">
        <h1 class="CatName"></h1>
        <h1 class="itemName"></h1>
        <h1 class="price"></h1>
        <div id="size">
            <button class="size sizeOn">S</button>
            <button class="size">M</button>
            <button class="size">L</button>
            <button class="size">XL</button>
            <button class="size">2XL</button>
        </div>
        <p1 class="tuoteKuvaus"></p1>
        <button class="addToCart">Add to Cart</button>
        
        

    </div>
    <div id="photos">
        <img class="tuoteKuva">
        <img class="tuoteKuva">
        <img class="tuoteKuva">
        <img class="tuoteKuva">
    </div>
</div> `;

let ostosKuvat = document.querySelectorAll('.tuoteKuva');
let kissaNimi = document.querySelector('.CatName');
kissaNimi.innerHTML = ostoskori[index].category;
let ostosNimi = document.querySelector('.itemName');
ostosNimi.innerHTML = ostoskori[index].name;
let hintaNimi = document.querySelector('.price');
hintaNimi.innerHTML ='€' +  ostoskori[index].price;
let descName = document.querySelector('.tuoteKuvaus');
descName.innerHTML = ostoskori[index].description;
let koriNumero = document.querySelector('.koriNumero');

let ostosButton = document.querySelector('.addToCart');
ostosButton.onclick = function() {
    ostosArray.push(ostoskori[index]);
    koriNumero.innerHTML = numberOfItemsCart();
    showCart();
}

for(i=0; i < ostosKuvat.length; i ++){
    ostosKuvat[i].src = ostoskori[index].images[i]
}

}

function showCart(){
    target = document.getElementById('target')
    target.innerHTML = `        <div class="ordercont">
    <div class="billing">
      <div class="sum">Order Summary</div>
      <div class="ordid">#yourorderid123</div>
      <div class="ordright" id="subpri"></div>
      <div class="ordleft">Subtotal</div>
      <div class="ordright">0€ (DHL Express)</div>
      <div class="ordleft">Shipping</div>
      <div class="ordright" id="vat"></div>
      <div class="ordleft">VAT (Included)</div>
      <div class="ordpric" id="totpri"></div>
      <div class="ordtot">Total</div>
      <div><button class="checbut">CHECKOUT</button></div>
    </div>
    <div class="billing">
        <div class="shiphead">We offer free shipping and returns </div>
        <div class="shiptext1st">Contact us </div>
        <div class="shiptext1">+358123345456</div>
        <div class="shiptext1">assistance@thisshop.com</div>
        <div class="shiptext2st">Payment options </div>
        <div class="shiptext2">We support most credit and debit cards</div>
        <div class="shiptext3st">Shipping Options </div>
        <div class="shiptext3right">€0</div>
        <div>DHL Express Worldwide</div>
        <div class="shiptext3rightnd">€0</div>
        <div>DHL Ground</div>
    </div>
    </div>
    <button class="bkbtn" onclick="showProductListing()"><i class="fas fa-chevron-left"></i> Go back</button></a> 
    <h1 class="shopcart">Your Shopping Cart</h1>
    <h4>Your Items</h4>
 <div class="container3" id="targetCart">


        </div>
    <h>SUBMIT DISCOUNT CODE</h1>
        <textarea name="" id="subcod" cols="30" rows="0"></textarea>
        <button class="submit2">SUBMIT</button>`;
    
showCartOstos();
let middleprice = 0; 
function showCartOstos() {



for( i=0; i<ostosArray.length; i++){
let container3 = document.querySelector('#targetCart');
let container4 = document.createElement('div');
container4.id = 'paita';
container4.classList.add('container4')
let imageKori = document.createElement('img');
imageKori.classList.add('produceimg')
imageKori.id = 'paitaKuva';
imageKori.src = ostosArray[i].image;
let producediv = document.createElement('div');
producediv.classList.add('producediv')
producediv.id = 'ostosDiv';
let nameDiv = document.createElement('div');
nameDiv.id = 'nimiDivi';
nameDiv.innerHTML = ostosArray[i].name;
let priceDiv = document.createElement('div');
priceDiv.innerHTML = '€' + ostosArray[i].price;
let sizeDiv = document.createElement('div');
sizeDiv.id = 'hintaDivi';
let inputElement = document.createElement('input');
inputElement.classList.add('.inputClassCart')
inputElement.value = 1;
let quantityDiv = document.createElement('div');
quantityDiv.innerHTML = 'Quantity';
let poistoButton = document.createElement('button');
poistoButton.classList.add('rmvbtn');
poistoButton.innerHTML = '<i class="far fa-trash-alt fa-2x"></i>';


container3.append(container4);
container4.append(imageKori,producediv);
producediv.append(nameDiv, priceDiv, quantityDiv, inputElement, poistoButton);
        }



        let koriNumero = document.querySelector('.koriNumero');
        let poistoNappi = document.querySelectorAll('.rmvbtn');
        let containerDivit = document.querySelectorAll('.container4');
        for( let i = 0; i < poistoNappi.length; i ++){
            poistoNappi[i].onclick = () => poisthaJolophi(i);
            
        }

        function poisthaJolophi(index) {
            ostosArray.splice(index, 1);
            containerDivit[index].remove();
            koriNumero.innerHTML = numberOfItemsCart();
            console.log(ostosArray);
            showCart();
        }

    }
    for( i=0; i < ostosArray.length; i ++ ) {
            
        middleprice += ostosArray[i].price;


        }
        let subPrice = document.querySelector('#subpri');
        subPrice.innerHTML = '€' +  middleprice.toFixed(2);
        let vatPrice = document.querySelector('#vat');
        vatPrice.innerHTML = '€' + (0.24 * middleprice).toFixed(2);
        let totPrice = document.querySelector('#totpri');
        totPrice.innerHTML = '€' + middleprice.toFixed(2);

        for ( i=0; i < inputElementsCart.length; i ++){

        }
}








    

