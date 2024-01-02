import { MainTopRatedGallery } from "./TopRatedGallery";
import { MainTitleList } from "./MainTitleList";
import { TopRated } from "./TopRated";

export const MainTitle = (
  { Main_Title_List },
  { Top_Rated },
  { Top_Rated_Gallery }
) => {
  return `
  ${Title({ Main_Title_List }, { Top_Rated }, { Top_Rated_Gallery })}
    `;
};

function Title({ Main_Title_List }, { Top_Rated }, { Top_Rated_Gallery }) {
  return `
    <section class="Main-Title">
        <ul class="Main-Title__list">
            <li class="Main-title1">
                ${MainTitleList({ Main_Title_List })}
            </li>
        </ul>
        <ul class="Top_Rated">
            ${TopRated({ Top_Rated })}
        </ul>
        ${MainTopRatedGallery({ Top_Rated_Gallery })}
    </section>
    `;
}
