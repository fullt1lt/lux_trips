export const MainTitleList = ({ Main_Title_List }) => {
  return `${MainTitle({ Main_Title_List })}`;
};

const MainTitle = ({ Main_Title_List }) => {
  return Main_Title_List.map(
    ({ value }) =>
      `<span data-lang="${value.split(" ").join("")}">${value}</span>`
  ).join("");
};
