
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 => {
  image_1.addEventListener('click', () => {
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
  image_2.addEventListener('click', () => {
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
  image_3.addEventListener('click', () => {
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});



function closeCart() {
  const cart = document.querySelector('.producstOnCart');
  cart.classList.toggle('hide');
  document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
  const cart = document.querySelector('.producstOnCart');
  cart.classList.toggle('hide');
  document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);


//add products to cart

addToCartBtn = document.getElementsByClassName('addToCartBtn');


for (var i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener('click', updateCartContainer)
}


function updateCartContainer(e) {

  currentaddtocardbtn = e.target;
  // console.log(currentaddtocardbtn);
  addToCartBtn = e.target;
  productContainer = addToCartBtn.parentElement;
  // console.log(productContainer);
  productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
  // console.log( productTitle.innerText);
  productPrice = productContainer.getElementsByClassName('Price')[0].innerText;
  productimg = productContainer.getElementsByClassName('img')[0].src;

  // console.log(productimg);
  
  AddRowInCart(productTitle, productPrice, productimg);
}
  

// Cart content
  cartContainer = document.getElementsByClassName('cartContainer')[0]

  function AddRowInCart(productTitle, productPrice, productimg) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<img src="${productimg}" class="cartImage">
        <h5 class="cartTitle">${productTitle}</h5>
        <h6 class="cartPrice">${productPrice}</h6>
        <button class="removeButton">Remove</button>`;
    div.innerHTML = insideDiv;
    cartContainer.appendChild(div);
    removeButton = document.getElementsByClassName('removeButton');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
  }

  // remove product from Cart

function removeFromCart(e) {
  e.target.parentElement.remove();
  updatePriceAfterRemove();
}

// update price
function updatePriceAfterRemove() {
  totalPrice = 0;
  cartPrice = cartContainer.getElementsByClassName('cartPrice');
  for (var i = 0; i < cartPrice.length; i++) {
    totalPrice = totalPrice + parseInt(cartPrice[i].innerText.replace('Rs.', ''));
  }
  document.getElementsByClassName('cartTotalPrice')[0].innerText =   "Total price = Rs."+ new Number(totalPrice).toLocaleString('en') ;;


}
// checkout button
function checkout(){
  totalPrice = 0;
  cartPrice = cartContainer.getElementsByClassName('cartPrice');
  for (var i = 0; i < cartPrice.length; i++) {
      totalPrice = totalPrice + parseInt(cartPrice[i].innerText.replace('Rs.', ''));
  }
  document.getElementsByClassName('cartTotalPrice')[0].innerText =   "Total price = Rs."+ new Number(totalPrice).toLocaleString('en') ;;
}








