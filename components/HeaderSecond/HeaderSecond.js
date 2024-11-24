import Logo from "./assets/icons/logo.svg";
import Layer_3_White_Up from "./assets/icons/Layer_3_White_Up.svg";
import Layer_3_White_Down from "./assets/icons/Layer_3_White_Down.svg";

export const HeaderSecond = ({ HeaderData }) => {
  const GetNavigationDataDropdown = ({ HeaderData }) => {
    return HeaderData.map(
      ({ value }) =>
        `<a href="#" class="Chngpages" data-chngpages="${value
          .split(" ")
          .join("")}" data-lang="${value.split(" ").join("")}">${value}</a>`
    ).join("");
  };
  const GetNavigationData = ({ HeaderData }) => {
    return HeaderData.map(
      ({ value }) =>
        `<li><a href="#" class="Chngpages" data-chngpages="${value
          .split(" ")
          .join("")}" data-lang="${value
          .split(" ")
          .join("")}">${value}</a></li>`
    ).join("");
  };

  const GetNavigationButton = () => {
    return `<button><a href="#Contact" data-lang="CallMe">Call Me</a></button>`;
  };
  return `
    <header class='HeaderSecond'>
        <nav>
            <ul class="Navigation">
                <li class="Navigation-Logo">
                    <img src="${Logo}" alt="">
                </li>
                <li class="dropdown">
                    <button class="dropbtn">
                    </button>
                    <div id="myDropdown" class="dropdown-content">
                        <ul>
                            <li class="Navigation-Languages_dropbtn">
                                <ul class="Navigation-Languages_buttons_dropbtn">
                                    <li>
                                        <button class="button_lang active">EN</button>
                                    </li>
                                    <li>
                                        <button class="button_lang">UA</button>
                                    </li>
                                    <li>
                                        <button class="button_lang">RU</button>
                                    </li>
                                </ul>
                                <ul class="Navigation-Languages_buttons_Close">
                                    <li>
                                        <button class="Close"><img src="../../assets/icons/x-close.svg" alt=""></button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <img src="${Layer_3_White_Up}" alt="">
                        <div class="dropdown-content_list">
                            ${GetNavigationDataDropdown({ HeaderData })}
                        </div>
                    </div>
                </li>
                <li class="Navigation-Items">
                    <ul>
                        ${GetNavigationData({ HeaderData })}
                    </ul>
                </li>
                <li class="Navigation-Languages">
                    <ul class="Navigation-Languages_buttons">
                        <li>
                        <button class="button_lang active">EN</button>
                        </li>
                        <li>
                            <button class="button_lang">UA</button>
                        </li>
                        <li>
                        <button class="button_lang">RU</button>
                        </li>
                    </ul>
                </li>
                <li class="Navigation-button">
                    <img src="${Layer_3_White_Up}" alt="Layer_3_White_Up">
                    ${GetNavigationButton()}
                    <img src="${Layer_3_White_Down}" alt="Layer_3_White_Down">
                </li>
            </ul>
        </nav>
    </header>
    `;
};
