import * as ComponentsMainTitle from "./componentsMainTitle";

const { MainTitle } = ComponentsMainTitle;

export const Main = (
  { Main_Title_List },
  { Top_Rated },
  { Top_Rated_Gallery }
) => {
  return `
    <main class='Main'>
        ${MainTitle({ Main_Title_List }, { Top_Rated }, { Top_Rated_Gallery })}
        ${MainLuxuryPackeges()}
        ${BookWithUs()}
        ${WhyLuxTrips()}
        ${CustomiseYourTrip()}
        ${Subscribe()}
        ${Contact()}
    </main>`;
};

function MainLuxuryPackeges() {
  return `
        <section class="Main-Luxury_Packages">
                <ul class="Main-Luxury_Packages__List">
                    <li class="Main-Luxury_Packages_info">
                        <span>Luxury Packages</span>
                        <button><a href="#">VIEW ALL</a></button>
                    </li>
                    <li class="Main-Luxury_Packages_margin">
                        <img src="./assets/images/Best_Winter_Destination.png" alt="Best_Winter_Destination" class="Luxury_Packages_img">
                        <ul>
                            <li class="Luxury_Packages_Title">
                                <span>Best</span>
                                <span>Winter</span>
                                <span>Destinations</span>
                            </li>
                            <li class="Luxury_Packages_Places">
                                <img src="./assets/icons/Vector_blur.png" alt="" class="rhombus">
                                <ul>
                                    <li>
                                        <span>34</span>
                                        <span>Places</span>
                                        <img src="./assets/icons/arrow.png" alt="arrow">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="Main-Luxury_Packages_items">
                        <img src="./assets/images/The_worlds.png" alt="The_worlds" class="Luxury_Packages_img">
                        <ul>
                            <li class="Luxury_Packages_Title">
                                <span>The world's most</span>
                                <span>extraordinary</span>
                                <span>places</span>
                            </li>
                            <li class="Luxury_Packages_Places">
                                <img src="./assets/icons/Vector_blur.png" alt="" class="rhombus">
                                <ul>
                                    <li>
                                        <span>29</span>
                                        <span>Places</span>
                                        <img src="./assets/icons/arrow.png" alt="arrow">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="Main-Luxury_Packages_items">
                        <img src="./assets/images/New_destinations.png" alt="New_destinations" class="Luxury_Packages_img">
                        <ul>
                            <li class="Luxury_Packages_Title">
                                <span>New</span>
                                <span>destinations</span>
                                <span>for 2022</span>
                            </li>
                            <li class="Luxury_Packages_Places">
                                <img src="./assets/icons/Vector_blur.png" alt="" class="rhombus">
                                <ul>
                                    <li>
                                        <span>47</span>
                                        <span>Places</span>
                                        <img src="./assets/icons/arrow.png" alt="arrow">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="Main-Luxury_Packages_margin">
                        <img src="./assets/images/Your_Health.png" alt="Your_Health" class="Luxury_Packages_img">
                        <ul>
                            <li class="Luxury_Packages_Title">
                                <span>Your health</span>
                                <span>is matter</span>
                            </li>
                            <li class="Luxury_Packages_Places">
                                <img src="./assets/icons/Vector_blur.png" alt="" class="rhombus">
                                <ul>
                                    <li>
                                        <span>29</span>
                                        <span>Places</span>
                                        <img src="./assets/icons/arrow.png" alt="arrow">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="Main-Luxury_Packages_items">
                        <img src="./assets/images/Experiences.png" alt="Experiences" class="Luxury_Packages_img">
                        <ul>
                            <li class="Luxury_Packages_Title">
                                <span>Experiences </span>
                                <span>Away From</span>
                                <span>Crowd</span>
                            </li>
                            <li class="Luxury_Packages_Places">
                                <img src="./assets/icons/Vector_blur.png" alt="" class="rhombus">
                                <ul>
                                    <li>
                                        <span>168</span>
                                        <span>Places</span>
                                        <img src="./assets/icons/arrow.png" alt="arrow">
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
    `;
}

function BookWithUs() {
  return `
        <section class="Book_With_Us">
            <ul class="Book_With_Us__list">
                <li class="Book_With_Us_Title">
                    <ul class="Book_With_Us_Title_list">
                        <li>
                            <span>Book</span>
                            <span>With Us</span>
                        </li>
                    </ul>
                </li>
                <li class="Book_With_Us_Galery">
                    <ul class="Book_With_Us_Galery_list">
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Supercars.png" alt="Supercars" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Supercars</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Hotels.png" alt="Hotels" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Hotels</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Villas.png" alt="Villas" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Villas</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Yachts.png" alt="Yachts" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Yachts</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Private_Helicopter.png" alt="Private_Helicopter" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Private</span>
                                    <span>Helicopter</span>
                                </li>
                            </ul>
                        </li>
                        <li class="Book_With_Us_Galery_items">
                            <img src="./assets/images/Private_Jet.png" alt="Private_Jet" class="Book_With_Us_img">
                            <ul>
                                <img src="./assets/icons/Vector_blur.png" alt="Vector" class="Book_With_Us_rhombus">
                                <li>
                                    <span>Private</span>
                                    <span>Jet</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    `;
}

function WhyLuxTrips() {
  return `
    <section class="Why_Lux_Trips">
        <ul class="Why_Lux_Trips_Main">
            <li class="Why_Lux_Trips_Title">
                <ul class="Why_Lux_Trips_Title_List">
                    <li>
                        <p>Why</p>
                        <p>Lux Trips</p>
                    </li>
                    <li>
                        <p>As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine.</p>
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
                        <p>Exclusive knowledge to provide the best of the best to clients</p>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Text2">
                        <p>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </p>
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
                        <p>We craft and plan unique itineraries tailored to customers&rsquo; interests and with strong attention to detail.</p>
                    </li>
                    <li class="Why_Lux_Trips_Main_Footer_Button">
                        <button><a href="#">help me plan a trip</a></button>
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
                    <span>Customise</span>
                    <span>your trip with us</span>
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
                                    <span>Describe your <br> dream trip</span>
                                    <p>Let us know what your perfect vacation is. Destinations, preferences, and personal interests.</p>
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
                                    <span>Get matched</span>
                                    <p>Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.</p>
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
                                    <span>Book your <br>vacation</span>
                                    <p>Confirm your trip only when you are completely satisfied with the proposed travel plan.</p>
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
                            <button><a href="#">Start a trip request</a></button>
                        </li>
                        <li class="Button_Footer">
                            <span>It&rsquo;s Free! - no credit card required</span>
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
                <span>
                    Get weekly inspiration and expert advice
                </span>
                <p>Sign up for our Weekly Newsletter</p>
            </li>
            <li class="Subscribe_List_Button">
                <input type="email" name="EmailAdress" placeholder="Email address" maxlength="50" required="">
                <button>
                    <a href="#">Subscribe</a>
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
    <section id="CallMe" class="Contact">
        <ul class="Bg_Contact_List1">
            <li>
                <img src="./assets/icons/Layer_5.png" alt="Layer_5">
            </li>
        </ul>
        <ul class="Main_Contact_List">
           <li class="Main_Contact_List_Title">
                <span>Contact</span>
           </li>
           <li class="Main_Contact_List_Inut">
                <input type="text" name="Name" placeholder="Name" maxlength="20" required="">
           </li>
           <li class="Main_Contact_List_Inut">
                <input type="number" name="Phone" placeholder="Phone" maxlength="12" required="">
           </li>
           <li class="Contact_List_Button">
                <ul class="Contact_List_Button_List">
                    <li class="Contact_List_Button_List_Bg">
                        <img src="./assets/icons/Layer 3.png" alt="">
                        <img src="./assets/icons/Layer 4.png" alt="">
                    </li>
                    <li class="Button_Call_me_back">
                        <button><a href="#">Call me back</a></button>
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
