import "regenerator-runtime"; // mengimport regerator run time yang ada di package.json
import "./styles/style.css"; // mengimport style css
import "./script/component/app-bar.js"; 
import main from "./script/view/main.js"; // mengimport function main di main.js

document.addEventListener("DOMContentLoaded", main);
