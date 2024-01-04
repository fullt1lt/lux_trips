import Logo from "../../assets/icons/logo.svg";
import Layer_3_White_Up from "../../assets/icons/Layer_3_White_Up.svg";
import Layer_3_White_Down from "../../assets/icons/Layer_3_White_Down.svg";
import icon_search from "../../assets/icons/icon_search.svg";
import Gradient from "../../assets/images/Gradient_1.png";

export const Header = ({ HeaderData }, { LocationHeaderItem }, lang) => {
  const GetNavigationDataDropdown = ({ HeaderData }) => {
    return HeaderData.map(
      ({ value }) =>
        `<a href="#${value.split(" ").join("")}" data-lang="${value
          .split(" ")
          .join("")}">${value}</a>`
    ).join("");
  };
  const GetNavigationData = ({ HeaderData }) => {
    return HeaderData.map(
      ({ value }) =>
        `<li><a href="#${value.split(" ").join("")}" data-lang="${value
          .split(" ")
          .join("")}">${value}</a></li>`
    ).join("");
  };

  const GetNavigationButton = () => {
    return `<button><a href="#Contact" data-lang="CallMe">Call Me</a></button>`;
  };
  const GetСhoiceOfLocation = ({ LocationHeaderItem }) => {
    let btnContent = "FIND";
    let test = "";
    let СhoiceOfLocationContent = "Find your journey";
    LocationHeaderItem.map(function (item) {
      test += `
      <li>
          <ul class="${item.topClassName}">
              <li>
                  <img src="${item.pathImag}" alt="${item.alt}">
                  <span data-lang="${item.nameItem.split(" ").join("")}">${
        item.nameItem
      }</span>
              </li>
              <li class="${item.chldClassName}">
                  ${item.content}
              </li>
          </ul>
      </li>`;
    });
    let СhoiceOfLocation = `
      <span class="Сhoice_Of_Location_title" data-lang="FindYourJourney">
        ${СhoiceOfLocationContent}
      </span>
      `;
    let button = `<li class="Button_Find">
    <button>
        <img src="${icon_search}" alt="">
        <span data-lang="Find">${btnContent}</span>
    </button>
    </li>`;
    let resultContent = `<ul class="Сhoice_Of_Location_Header">${test}${button}</ul>`;
    return СhoiceOfLocation + resultContent;
  };
  return `
    <header class='Header'>
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
            <ul class="Header_information__list">
                <li class="Header_information_Title1">
                    <span>the</span>
                    <span>world&rsquo;s</span>
                    <span>most</span>
                </li>
                <li class="Header_information_Title2">
                    <ul>
                        <li>
                            <span>extra</span>
                            <span>ordinary</span>
                            <span>Places</span>
                        </li>
                    </ul>
                </li>
                <li class="Сhoice_Of_Location">
                    ${GetСhoiceOfLocation({ LocationHeaderItem })}
                </li>
            </ul>
        </nav>
        <div class="Gradient">
            <img src="${Gradient}" alt="gradient">
        </div>
    </header>
    `;
};
