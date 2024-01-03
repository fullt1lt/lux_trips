export const BookWithUs = ({ Book_With_Us }) => {
  return `${CreateBookWithUsList({ Book_With_Us })}`;
};

const CreateBookWithUsList = ({ Book_With_Us }) => {
  let content = "";
  Book_With_Us.Book_With_Us.map((item) => {
    content += `
      <li class="Book_With_Us_Galery_items">
          <img src="${item.topPathImag}" alt="${
      item.topAlt
    }" class="Book_With_Us_img">
          <ul>
              <img src="${item.imgVector}" alt="${
      item.altVector
    }" class="Book_With_Us_rhombus">
              <li>
                  <span data-lang="${item.content.split(" ").join("")}">${
      item.content
    }</span>
              </li>
          </ul>
      </li>
    `;
    0;
  });
  return content;
};
