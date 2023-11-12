const shoeOne = document.getElementById("shoe-one");
const shoeTwo = document.getElementById("shoe-two");
const shoeThree = document.getElementById("shoe-three");
const heroImg = document.getElementById("hero-img");

shoeOne.addEventListener("click", () => {
  shoeOne.classList.add("active");
  heroImg.setAttribute("src", "assets/images/big-shoe1.png");

  if (shoeTwo.classList.contains("active")) {
    shoeTwo.classList.remove("active");
  } else if (shoeThree.classList.contains("active")) {
    shoeThree.classList.remove("active");
  }
});

shoeTwo.addEventListener("click", () => {
  shoeTwo.classList.add("active");
  heroImg.setAttribute("src", "assets/images/big-shoe2.png");

  if (shoeOne.classList.contains("active")) {
    shoeOne.classList.remove("active");
  } else if (shoeThree.classList.contains("active")) {
    shoeThree.classList.remove("active");
  }
});

shoeThree.addEventListener("click", () => {
  shoeThree.classList.add("active");
  heroImg.setAttribute("src", "assets/images/big-shoe3.png");

  if (shoeOne.classList.contains("active")) {
    shoeOne.classList.remove("active");
  } else if (shoeTwo.classList.contains("active")) {
    shoeTwo.classList.remove("active");
  }
});
