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
                        <button class="Chngpages" data-chngpages="VIEWALL" data-lang="VIEWALL">VIEW ALL</button>
                    </li>
                    ${LuxPackeges({ LuxuryPackeges })}
                </ul>
       </section>
    `;
}
