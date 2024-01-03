import { LuxPackeges } from "./LuxuryPackeges";

export const MainLuxuryPackeges = ({ LuxuryPackeges }) => {
  return `
  ${Main_Luxury_Packages({ LuxuryPackeges })}
    `;
};

function Main_Luxury_Packages(LuxuryPackeges) {
  return `
        <section id="LuxuryPackages" class="Main-Luxury_Packages">
                <ul class="Main-Luxury_Packages__List">
                    <li class="Main-Luxury_Packages_info">
                        <span data-lang="LuxuryPackages">Luxury Packages</span>
                        <button><a href="#" data-lang="VIEWALL">VIEW ALL</a></button>
                    </li>
                    ${LuxPackeges({ LuxuryPackeges })}
                </ul>
       </section>
    `;
}
