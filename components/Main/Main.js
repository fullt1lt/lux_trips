import * as ComponentsMainTitle from "./componentsMainTitle";
import * as CompoentsMainLuxuryPackeges from "./compoentsMainLuxuryPackeges";
import * as componentsMainBookWithUs from "./componentsBookWithUs";

const { MainTitle } = ComponentsMainTitle;
const { MainLuxuryPackeges } = CompoentsMainLuxuryPackeges;
const { MainBookWithUs } = componentsMainBookWithUs;

export const Main = (
  { Main_Title_List },
  { Top_Rated },
  { Top_Rated_Gallery },
  { LuxuryPackeges },
  { Book_With_Us }
) => {
  return `
    <main class='Main'>
        ${MainTitle({ Main_Title_List }, { Top_Rated }, { Top_Rated_Gallery })}
        ${MainLuxuryPackeges({ LuxuryPackeges })}
        ${MainBookWithUs({ Book_With_Us })}
        ${WhyLuxTrips()}
        ${CustomiseYourTrip()}
        ${Subscribe()}
        ${Contact()}
    </main>`;
};

function WhyLuxTrips() {
  return `
    <section id="WhyLuxTrips" class="Why_Lux_Trips">
        <ul class="Why_Lux_Trips_Main">
            <li class="Why_Lux_Trips_Title">
                <ul class="Why_Lux_Trips_Title_List">
                    <li>
                        <p data-lang="Why">Why</p>
                        <p>Lux Trips</p>
                    </li>
                    <li>
                        <p data-lang="AsTravelDesigner">As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine.</p>
                    </li>
                </ul>
            </li>
            <li class="Why_Lux_Trips_Images">
                <ul class="Why_Lux_Trips_Images_list">
                    <li class="Why_Lux_Trips_Images_Imag1">
                        <img src="./assets/images/Why_Lux_Trips_Imag_1.png" alt="Why_Lux_Trips_Imag_1">
                        <ul class="Images_Imag1_Vector_blur1">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_1.svg" alt="Vector_blur">
                            </li>
                        </ul>
                        <ul class="Images_Imag1_Vector_blur2">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_2.svg" alt="Vector_blur">
                            </li>
                        </ul>
                    </li>
                    <li class="Why_Lux_Trips_Images_Imag4">
                        <img src="./assets/icons/Why_Lux_Trips_Vector_3.svg" alt="Vector_blur">
                    </li>
                    <li class="Why_Lux_Trips_Images_Imag2">
                        <img src="./assets/images/Why_Lux_Trips_Imag_2.png" alt="Why_Lux_Trips_Imag_2">
                        <ul class="Images_Imag2_Vector_blur1">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_1.svg" alt="Vector_blur">
                            </li>
                        </ul>
                    </li>
                    <li class="Why_Lux_Trips_Images_Imag3">
                        <img src="./assets/images/Why_Lux_Trips_Imag_3.png" alt="Why_Lux_Trips_Imag_3">
                        <ul class="Images_Imag3_Vector_blur1">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_2.svg" alt="Vector_blur">
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="Why_Lux_Trips_Main_Text">
                <ul class="Why_Lux_Trips_Main_Text_List">
                    <li class="Why_Lux_Trips_Main_Footer_Text1">
                        <p data-lang="Exclusiveknowledge">Exclusive knowledge to provide the best of the best to clients</p>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Text2">
                        <p data-lang="Ourarea">Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </p>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Imag">
                        <img src="./assets/images/Why_Lux_Trips_Imag_4.png" alt="Why_Lux_Trips_Imag_4" class="Why_Lux_Trips_Imag">
                        <ul class="Main_Footer_Imag_Vector_1">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_1.svg" alt="Vector_blur">
                            </li>
                        </ul>
                        <ul class="Main_Footer_Imag_Vector_2">
                            <li>
                                <img src="./assets/icons/Why_Lux_Trips_Vector_2.svg" alt="Vector_blur">
                            </li>
                        </ul>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Text3">
                        <p data-lang="Wecraft">We craft and plan unique itineraries tailored to customers&rsquo; interests and with strong attention to detail.</p>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Button">
                        <button><a href="#" data-lang="helpmeplanatrip">help me plan a trip</a></button>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
    `;
}

function CustomiseYourTrip() {
  return `
        <section class="Customise_Your_Trip">
            <div class="Customise_Your_Trip_Clouds1">
                <img src="./assets/images/Cloud1.png" alt="Cloud">
            </div>
            <div class="Customise_Your_Trip_Clouds2">
                <img src="./assets/images/Cloud2.png" alt="Cloud">
            </div>
            <ul class="Customise_Your_Trip_List">
                <li class="Customise_Your_Trip_Title">
                    <span data-lang="Customise">Customise</span>
                    <span data-lang="yourtripwithus">your trip with us</span>
                </li>
                <li class="Customise_Your_Trip_Item">
                    <ul class="Customise_Your_Trip_Item_List">
                        <li class="Customise_Your_Trip_Item_Number">
                            <img src="./assets/icons/Vector_White.svg" alt="">
                            <ul class="Item_Number_List">
                                <li>
                                    <span>1</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Customise_Your_Trip_Item_Text">
                            <ul class="Item_Text_List">
                                <li>
                                    <span data-lang="Describeyour">Describe your <br> dream trip</span>
                                    <p data-lang="Letusknow">Let us know what your perfect vacation is. Destinations, preferences, and personal interests.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="Customise_Your_Trip_Item">
                    <ul class="Customise_Your_Trip_Item_List">
                        <li class="Customise_Your_Trip_Item_Number">
                            <img src="./assets/icons/Vector_White.svg" alt="">
                            <ul class="Item_Number_List">
                                <li>
                                    <span>2</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Customise_Your_Trip_Item_Text">
                            <ul class="Item_Text_List">
                                <li>
                                    <span data-lang="Getmatched">Get matched</span>
                                    <p data-lang="Ourteamwill">Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="Customise_Your_Trip_Item">
                    <ul class="Customise_Your_Trip_Item_List">
                        <li class="Customise_Your_Trip_Item_Number">
                            <img src="./assets/icons/Vector_White.svg" alt="">
                            <ul class="Item_Number_List">
                                <li>
                                    <span>3</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Customise_Your_Trip_Item_Text">
                            <ul class="Item_Text_List">
                                <li>
                                    <span data-lang="Bookyour">Book your <br>vacation</span>
                                    <p data-lang="Confirmyourtrip">Confirm your trip only when you are completely satisfied with the proposed travel plan.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="Customise_Your_Trip_Button">
                    <ul class="Customise_Your_Trip_Button_List">
                        <li class="Button_List_Bg">
                            <img src="./assets/icons/Layer 3.png" alt="">
                            <img src="./assets/icons/Layer 4.png" alt="">
                        </li>
                        <li class="Button_Start">
                            <button><a href="#" data-lang="Startatriprequest">Start a trip request</a></button>
                        </li>
                        <li class="Button_Footer">
                            <span data-lang="Free">It's Free! - no credit card required</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `;
}

function Subscribe() {
  return `
    <section class="Subscribe">
        <ul class="Bg_Subscribe_List1">
            <li>
                <img src="./assets/icons/Layer_5.png" alt="Layer_5">
            </li>
        </ul>
        <ul class="Subscribe_List">
            <li class="Subscribe_List_Info">
                <span data-lang="Getweekly">
                    Get weekly inspiration and expert advice
                </span>
                <p data-lang="Signup">Sign up for our Weekly Newsletter</p>
            </li>
            <li class="Subscribe_List_Button">
                <input type="email" name="EmailAdress" placeholder="Email address" maxlength="50" required="">
                <button>
                    <a href="#" data-lang="Subscribe">Subscribe</a>
                </button>
            </li>
        </ul>
        <ul class="Bg_Subscribe_List2">
            <li>
            </li>
        </ul>
    </section>
    `;
}

function Contact() {
  return `
    <section id="Contact" class="Contact">
        <ul class="Bg_Contact_List1">
            <li>
                <img src="./assets/icons/Layer_5.png" alt="Layer_5">
            </li>
        </ul>
        <ul class="Main_Contact_List">
           <li class="Main_Contact_List_Title">
                <span data-lang="Contact">Contact</span>
           </li>
           <li class="Main_Contact_List_Inut">
                <input type="text" name="Name" id="Name" placeholder="Name" maxlength="20" required="">
           </li>
           <li class="Main_Contact_List_Inut">
                <input type="number" name="Phone" id="Phone" placeholder="Phone" maxlength="12" required="">
           </li>
           <li class="Contact_List_Button">
                <ul class="Contact_List_Button_List">
                    <li class="Contact_List_Button_List_Bg">
                        <img src="./assets/icons/Layer 3.png" alt="">
                        <img src="./assets/icons/Layer 4.png" alt="">
                    </li>
                    <li class="Button_Call_me_back">
                        <button id="CallMe" data-lang="CallMe">Call me back</button>
                    </li>
                </ul>
           </li>
        </ul>
        <ul class="Bg_Contact_List2">
            <li>
            </li>
        </ul>
    </section>
    `;
}
