import { BookWithUs } from "./BookWithUs";

export const MainBookWithUs = ({ Book_With_Us }) => {
  return `
  ${Create_Book_With_Us({ Book_With_Us })}
    `;
};

function Create_Book_With_Us(Book_With_Us) {
  return `
        <section id="BookWithUs" class="Book_With_Us">
            <ul class="Book_With_Us__list">
                <li class="Book_With_Us_Title">
                    <ul class="Book_With_Us_Title_list">
                        <li>
                            <span data-lang="BookWithUs">Book With Us</span>
                        </li>
                    </ul>
                </li>
                <li class="Book_With_Us_Galery">
                    <ul class="Book_With_Us_Galery_list">
                    ${BookWithUs({ Book_With_Us })}
                    </ul>
                </li>
            </ul>
       </section>
    `;
}
