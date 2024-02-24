var language = document.getElementById("languageSelector");
var greeting = document.getElementById("index-greeting");
var intro = document.getElementById("index-paragraph");

language.addEventListener("change", switchLanguage);

function switchLanguage() {
  var selectedLanguage = languageSelector.value;
  if (selectedLanguage === "en") {
    greeting.innerHTML = "Hi there!";
    intro.innerHTML =
      "I'm Anja, a passionate web developer based in Croatia. I thrive " +
      "on crafting elegant and functional web solutions that bring ideas to life. With a " +
      "keen eye for detail and a love for coding, I enjoy the dynamic challenges that come " +
      "with web development. Let's build something awesome together!";
  } else if (selectedLanguage === "hr") {
    greeting.innerHTML = "Bok!";
  } else if (selectedLanguage === "de") {
    greeting.innerHTML = "Hallo!";
  }
}
