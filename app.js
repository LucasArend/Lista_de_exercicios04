window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const textElement = splash.querySelector("h1");
  const fullText = "Encontrando o seu próximo funcionário!";
  let index = 0;


  const typeInterval = setInterval(() => {
    if (index < fullText.length) {
      textElement.textContent += fullText.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);

      setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
          splash.style.display = "none";
        }, 2000); 
      }, 1000);
    }
  }, 60);
});