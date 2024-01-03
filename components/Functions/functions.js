export const Functions = ({ MainLang }) => {
  let currentLang = localStorage.getItem("langaege") || "en";
  let currentTopRated_buttons = localStorage.getItem("toprated") || "World";
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

  //Функции перезаписи страницки с новым языком
  const Changelanguege = ({ MainLang }, lang) => {
    let text = "";
    for (let key in MainLang) {
      for (let obj in MainLang[key]) {
        switch (lang) {
          case "en":
            text = MainLang[key][obj].en;
            break;
          case "ru":
            text = MainLang[key][obj].ru;
            break;
          default:
            text = MainLang[key][obj].en;
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

  //Функция смены активности языковой кнопки после перезагрузки
  window.addEventListener("load", () => {
    const lang_buttons = document.querySelectorAll(".button_lang");
    const active_buttons = document.querySelectorAll(".active");
    active_buttons.forEach(function (elem) {
      elem.classList.remove("active");
    });
    lang_buttons.forEach(function (elem) {
      if (elem.textContent === currentLang.toUpperCase()) {
        elem.classList.add("active");
      }
    });
  });

  //Функция смены активности языковой кнопки после перезагрузки
  window.addEventListener("load", () => {
    const TopRated_buttons = document.querySelectorAll(".TopRatedButt");
    const TopRated_active_buttons = document.querySelectorAll(
      ".TopRatedButtActive"
    );
    const TopRated_list = document.querySelectorAll(".Top_Rated_Gallery");
    const TopRated_active_list = document.querySelectorAll(".ActiveRated");
    TopRated_active_buttons.forEach(function (elem) {
      elem.classList.remove("TopRatedButtActive");
    });
    TopRated_buttons.forEach(function (elem) {
      if (elem.getAttribute("data-lang") === currentTopRated_buttons) {
        elem.classList.add("TopRatedButtActive");
      }
    });
    TopRated_active_list.forEach(function (elem) {
      elem.classList.remove("ActiveRated");
    });
    TopRated_list.forEach(function (elem) {
      if (elem.getAttribute("data-top") === currentTopRated_buttons) {
        elem.classList.add("ActiveRated");
      }
    });
  });

  Changelanguege({ MainLang }, currentLang);
  //Функция поиска кнопок EN и RU и присвоения им клика!!!
  const Getlangbuttons = () => {
    const lang_buttons = document.querySelectorAll(".button_lang");
    const block_buttons = document.querySelector(
      ".Navigation-Languages_buttons"
    );
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
        localStorage.setItem("langaege", elem.textContent.toLowerCase());
        ////Вызов функции перезаписи страницки с новым языком
        Changelanguege({ MainLang }, elem.textContent.toLowerCase());
      });
    });
  };

  Getlangbuttons();

  //Функция смены в Меню TopRated
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
        localStorage.setItem("toprated", elem.getAttribute("data-lang"));
        elements.classList.add("ActiveRated");
      });
    });
  };

  GetTopRated();
};
