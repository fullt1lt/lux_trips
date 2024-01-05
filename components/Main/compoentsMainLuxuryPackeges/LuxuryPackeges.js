export const LuxPackeges = ({ LuxuryPackeges }) => {
  return `${CreateLuxuryPackegesList({ LuxuryPackeges })}`;
};

const CreateLuxuryPackegesList = ({ LuxuryPackeges }) => {
  let content = "";
  LuxuryPackeges.LuxuryPackeges.map((item) => {
    content += `
        <li class="${item.topClassName}">
            <img src="${item.topPathImag}" alt="${
      item.topAlt
    }" class="Luxury_Packages_img">
            <ul>
                <li class="Luxury_Packages_Title">
                    <span data-lang="${item.content.split(" ").join("")}">${
      item.content
    }</span>
                </li>
                <li class="Luxury_Packages_Places Chngpages" data-chngpages="${
                  item.datachngpages
                }">
                    <img src="${item.imgVector}" alt="${
      item.altVector
    }" class="${item.classVector}">
                    <ul>
                        <li>
                            <span>34</span>
                            <span data-lang="${item.places
                              .split(" ")
                              .join("")}">${item.places}</span>
                            <img src="${item.arrowImg}" alt="${item.arrowAlt}">
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    `;
  });
  return content;
};
