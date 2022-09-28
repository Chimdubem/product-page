"user strict";

//////////////////////////////////////////////
// Implementing the add/subtract function

const plus = document.querySelector(".svg-plus");
const minus = document.querySelector(".svg-minus");
const number = document.querySelector(".number");

number.textContent = 0;

plus.addEventListener("click", function () {
  number.textContent++;
});

minus.addEventListener("click", function () {
  if (number.textContent >= 1) {
    number.textContent--;
  }
});

//////////////////////////////////////////////
//ADDING CART FEATURE

//1. Add number to cart
const addToCartBtn = document.querySelector(".cta");

const cartNo = document.querySelector(".cart-no");

addToCartBtn.addEventListener("click", function () {
  number.textContent;

  if (number.textContent > 0) {
    cartNo.textContent = number.textContent;
    cartNo.textContent;

    cartNo.classList.remove("hidden");
  } else if (number.textContent == 0) {
    cartNo.textContent = number.textContent;
    cartNo.textContent;

    cartNo.classList.add("hidden");
  }

  cartFull.classList.add("hidden");
  cartNothing.classList.add("hidden");
});

//2. Add image to cart container

const navCart = document.querySelector(".nav-cart");

const cartFull = document.querySelector(".cart-full");
const cartNothing = document.querySelector(".cart-nothing");

const orderedNo = document.querySelector(".no");
const totalCost = document.querySelector(".total");

navCart.addEventListener("click", function () {
  cartNo.textContent;
  totalCost.textContent;
  console.log(cartNo.textContent);

  // if (cartNo.textContent == 0) {
  //   cartNothing.classList.("hidden");
  // }

  if (cartNo.textContent > 0) {
    orderedNo.textContent;

    orderedNo.textContent = cartNo.textContent;
    const total = orderedNo.textContent * 125.0;

    totalCost.textContent = total;

    cartFull.classList.toggle("hidden");
  } else if (cartNo.textContent == 0) {
    cartFull.classList.add("hidden");
    cartNothing.classList.toggle("hidden");
  }
});

const bin = document.querySelector(".cart-bin");

bin.addEventListener("click", function () {
  // cartNo.textContent;
  cartNo.textContent = 0;

  cartFull.classList.add("hidden");
  cartNothing.classList.remove("hidden");
  cartNo.classList.add("hidden");
});

//ADDING MODAL THUMBS FEATURE

const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const m3 = document.querySelector(".m3");
const m4 = document.querySelector(".m4");

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");

t1.addEventListener("click", function () {
  m2.classList.add("hidden");
  m3.classList.add("hidden");
  m4.classList.add("hidden");

  m1.classList.remove("hidden");
});
t2.addEventListener("click", function () {
  m1.classList.add("hidden");
  m3.classList.add("hidden");
  m4.classList.add("hidden");

  m2.classList.remove("hidden");
});
t3.addEventListener("click", function () {
  m1.classList.add("hidden");
  m2.classList.add("hidden");
  m4.classList.add("hidden");

  m3.classList.remove("hidden");
});
t4.addEventListener("click", function () {
  m1.classList.add("hidden");
  m2.classList.add("hidden");
  m3.classList.add("hidden");

  m4.classList.remove("hidden");
});

//////////////////////////////////////////////
//ADDING EVENT LISTENER TO ORIGINAL PAGE THUMBNAIL IMAGES
const popUp = document.querySelector(".modal");
const blur = document.querySelector(".overlay");
const exit = document.querySelector(".close-modal");

const thumbs = document.querySelectorAll(".thumb-img");

const openModal = function () {
  popUp.classList.remove("hidden");
  blur.classList.remove("hidden");
};

const closeModal = function () {
  popUp.classList.add("hidden");
  blur.classList.add("hidden");
};

thumbs.forEach(function (thumbs) {
  thumbs.addEventListener("click", openModal);
});

exit.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !popUp.classList.contains("hidden")) {
    closeModal();
  }
});

const th1 = document.querySelector(".th1");
const th2 = document.querySelector(".th2");
const th3 = document.querySelector(".th3");
const th4 = document.querySelector(".th4");

th1.addEventListener("click", function () {
  openModal;

  m2.classList.add("hidden");
  m3.classList.add("hidden");
  m4.classList.add("hidden");

  m1.classList.remove("hidden");
});

th2.addEventListener("click", function () {
  openModal;

  m1.classList.add("hidden");
  m3.classList.add("hidden");
  m4.classList.add("hidden");

  m2.classList.remove("hidden");
});

th3.addEventListener("click", function () {
  openModal;

  m1.classList.add("hidden");
  m2.classList.add("hidden");
  m4.classList.add("hidden");

  m3.classList.remove("hidden");
});

th4.addEventListener("click", function () {
  openModal;

  m1.classList.add("hidden");
  m2.classList.add("hidden");
  m3.classList.add("hidden");

  m4.classList.remove("hidden");
});

//BTN PREV & NEXT functionality

const btnprev = document.querySelector(".btn-prev");
const btnnext = document.querySelector(".btn-next");

btnnext.addEventListener("click", function () {
  if (!m1.classList.contains("hidden") && m2.classList.contains("hidden")) {
    m1.classList.add("hidden");
    m2.classList.remove("hidden");
  } else if (
    !m2.classList.contains("hidden") &&
    m3.classList.contains("hidden")
  ) {
    m2.classList.add("hidden");
    m3.classList.remove("hidden");
  } else if (
    !m3.classList.contains("hidden") &&
    m4.classList.contains("hidden")
  ) {
    m3.classList.add("hidden");
    m4.classList.remove("hidden");
  }
});

btnprev.addEventListener("click", function () {
  if (m2.classList.contains("hidden") && !m3.classList.contains("hidden")) {
    m3.classList.add("hidden");
    m2.classList.remove("hidden");
  } else if (
    m3.classList.contains("hidden") &&
    !m4.classList.contains("hidden")
  ) {
    m4.classList.add("hidden");
    m3.classList.remove("hidden");
  } else if (
    m1.classList.contains("hidden") &&
    !m2.classList.contains("hidden")
  ) {
    m2.classList.add("hidden");
    m1.classList.remove("hidden");
  }
});

//BTN PREV & NEXT functionality for smallscreens

const ssm1 = document.querySelector(".ssm1");
const ssm2 = document.querySelector(".ssm2");
const ssm3 = document.querySelector(".ssm3");
const ssm4 = document.querySelector(".ssm4");

const ssbtnprev = document.querySelector(".ssbtn-prev");
const ssbtnnext = document.querySelector(".ssbtn-next");

ssbtnnext.addEventListener("click", function () {
  if (!ssm1.classList.contains("hidden") && ssm2.classList.contains("hidden")) {
    ssm1.classList.add("hidden");
    ssm2.classList.remove("hidden");
  } else if (
    !ssm2.classList.contains("hidden") &&
    ssm3.classList.contains("hidden")
  ) {
    ssm2.classList.add("hidden");
    ssm3.classList.remove("hidden");
  } else if (
    !ssm3.classList.contains("hidden") &&
    ssm4.classList.contains("hidden")
  ) {
    ssm3.classList.add("hidden");
    ssm4.classList.remove("hidden");
  }
});

ssbtnprev.addEventListener("click", function () {
  if (ssm2.classList.contains("hidden") && !ssm3.classList.contains("hidden")) {
    ssm3.classList.add("hidden");
    ssm2.classList.remove("hidden");
  } else if (
    ssm3.classList.contains("hidden") &&
    !ssm4.classList.contains("hidden")
  ) {
    ssm4.classList.add("hidden");
    ssm3.classList.remove("hidden");
  } else if (
    ssm1.classList.contains("hidden") &&
    !ssm2.classList.contains("hidden")
  ) {
    ssm2.classList.add("hidden");
    ssm1.classList.remove("hidden");
  }
});

///////////////////////////////////////////
//ENABLING MENU FEATURE
const menu = document.querySelector(".menu");
const sslinks = document.querySelector(".sslinks");
const sslinksclose = document.querySelector(".sslinks-close");

menu.addEventListener("click", function () {
  sslinks.style.display = "flex";
  blur.classList.remove("hidden");
  blur.style.display = "block";
});

sslinksclose.addEventListener("click", function () {
  sslinks.style.display = "none";
  blur.classList.add("hidden");
  blur.style.display = "none";
});
