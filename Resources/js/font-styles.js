const fontStyles = [
  "Roboto",
  "Permanent Marker",
  "Satisfy",
  "Courgette",
  "Sacramento",
  "Redressed",
];

const createFontStyleBox = (font) => {
  const content = document.getElementById("fontStyles");
  let newNode = document.createElement("div");
  let pSample = document.createElement("p");
  let pFont = document.createElement("h2");
  pSample.innerHTML = "Almost before we knew it, we had left the ground";
  pFont.innerHTML = font;

  newNode.className = "fontStyle-element";
  pSample.className = "demonstration";
  pSample.style.fontFamily = font;

  newNode.appendChild(pFont);
  newNode.appendChild(pSample);

  content.appendChild(newNode);
};

//dinamicaly customize fonts based on user input
const customizeFonts = () => {
  let fontStyle = document.getElementById("font-style");
  let fontWeight = document.getElementById("font-weight");
  let fontSize = document.getElementById("font-size");
  let paragraphs = document.getElementsByClassName("demonstration");

  fontStyle.addEventListener("change", () => {
    for (let item of paragraphs) {
      item.style.fontStyle = fontStyle.value;
    }
  });

  fontWeight.addEventListener("change", () => {
    for (let item of paragraphs) {
      item.style.fontWeight = fontWeight.value;
    }
  });

  fontSize.addEventListener("change", () => {
    for (let item of paragraphs) {
      item.style.fontSize = fontSize.value;
    }
  });
};

//calling functions

//create boxes with every font element
fontStyles.forEach((element) => {
  createFontStyleBox(element);
});

//customize on user inputs
customizeFonts();
