import "./css/index.min.css";
import * as Components from "./components";
import { WebSiteData } from "./data";

const { Header, Main, Footer, Functions } = Components;

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

// Вызов функции управление кнопки  меню в Header
Functions({ HeaderLang });
