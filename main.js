import "./css/index.min.css";
import * as Components from "./components";
import { WebSiteData } from "./data";

const { Header, Main, Footer, Functions } = Components;

const {
  HeaderData,
  LocationHeaderItem,
  MainLang,
  Main_Title_List,
  Top_Rated,
  Top_Rated_Gallery,
  LuxuryPackeges,
  Book_With_Us,
} = WebSiteData;

document.querySelector("#app").innerHTML = `
      ${Header({ HeaderData }, { LocationHeaderItem })}
    ${Main(
      { Main_Title_List },
      { Top_Rated },
      { Top_Rated_Gallery },
      { LuxuryPackeges },
      { Book_With_Us }
    )}
    ${Footer()}
    `;

// Вызов функции управление кнопки  меню в Header
Functions({ MainLang });
