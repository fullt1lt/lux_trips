import "./css/index.min.css";
import * as Components from "./components";
import { WebSiteData } from "./data";

const { Header, Main, Footer } = Components;

const {
  HeaderData,
  LocationHeaderItem,
  HeaderLang,
  Main_Title_List,
  Top_Rated,
  Top_Rated_Gallery,
} = WebSiteData;
const lang = "ru";

document.querySelector("#app").innerHTML = `
    ${Header({ HeaderData }, { LocationHeaderItem })}
    ${Main({ Main_Title_List }, { Top_Rated }, { Top_Rated_Gallery })}
    ${Footer()}
    `;

//кнопка открытия Меню при маленьком экране
const button = document.querySelector(".dropbtn");

button.onclick = () => {
  document.querySelector("#myDropdown").classList.toggle("show");
};
//кнопка закрытия Меню при маленьком экране
const buttonClose = document.querySelector(".Close");

buttonClose.onclick = () => {
  document.querySelector("#myDropdown").classList.remove("show");
};

//Функция поиска кнопок EN и RU и присвоения им клика!!!
const Getlangbuttons = () => {
  const lang_buttons = document.querySelectorAll(".button_lang");
  const block_buttons = document.querySelector(".Navigation-Languages_buttons");
  const blockButtonsDropbtn = document.querySelector(
    ".Navigation-Languages_buttons_dropbtn"
  );
  lang_buttons.forEach(function (elem) {
    elem.addEventListener("click", () => {
      block_buttons.querySelector(".active").classList.remove("active");
      blockButtonsDropbtn.querySelector(".active").classList.remove("active");
      elem.classList.add("active");
      for (let button = 0; button < lang_buttons.length; button++) {
        if (lang_buttons[button].textContent === elem.textContent) {
          lang_buttons[button].classList.add("active");
        }
      }
      localStorage.setItem("languege", elem.textContent.toLowerCase());
      ////Вызов функции перезаписи страницки с новым языком
      Changelanguege({ HeaderLang }, elem.textContent.toLowerCase());
    });
  });
};

Getlangbuttons();

const Changelanguege = ({ HeaderLang }, lang) => {
  let text = "";
  for (let key in HeaderLang) {
    for (let obj in HeaderLang[key]) {
      switch (lang) {
        case "en":
          text = HeaderLang[key][obj].en;
          break;
        case "ru":
          text = HeaderLang[key][obj].ru;
          break;
        default:
          text = HeaderLang[key][obj].en;
      }
      let elements = document.querySelectorAll(`[data-lang=${obj}]`);
      elements.forEach(function (elem) {
        if (elem) {
          elem.textContent = text;
        }
      });
    }
  }
};

const GetTopRated = () => {
  const TopRated_buttons = document.querySelectorAll(".TopRatedButt");
  const block_buttons = document.querySelector(".Top_Rated");
  const block_TopRated_list = document.querySelector(".Main-Title");
  TopRated_buttons.forEach(function (elem) {
    elem.addEventListener("click", () => {
      block_buttons
        .querySelector(".TopRatedButtActive")
        .classList.remove("TopRatedButtActive");
      elem.classList.add("TopRatedButtActive");
      block_TopRated_list
        .querySelector(".ActiveRated")
        .classList.remove("ActiveRated");
      let elements = document.querySelector(
        `[data-top=${elem.getAttribute("data-lang")}]`
      );
      elements.classList.add("ActiveRated");
    });
  });
};

GetTopRated();
