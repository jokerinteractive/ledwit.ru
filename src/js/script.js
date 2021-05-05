const toggleButton = document.querySelector(".main-nav__toggle");
const navigation = document.querySelector(".main-nav");

toggleButton.addEventListener ("click", () => {
  navigation.classList.toggle("main-nav--cloced");
});
