export const TopRated = ({ Top_Rated }) => {
  return `${Rated({ Top_Rated })}`;
};

const Rated = ({ Top_Rated }) => {
  let contentTopRated = "";
  let classbutton = "";
  for (const key in Top_Rated) {
    if (Top_Rated[key].content == "World") {
      classbutton = `class="TopRatedButt TopRatedButtActive"`;
    } else {
      classbutton = `class="TopRatedButt"`;
    }
    contentTopRated += `<li>
            <img src="${Top_Rated[key].pathImag}" alt="${Top_Rated[key].alt}">
            <button ${classbutton} data-lang="${Top_Rated[key].content
      .split(" ")
      .join("")}">${Top_Rated[key].content}</button>
      </li>`;
  }
  return contentTopRated;
};
