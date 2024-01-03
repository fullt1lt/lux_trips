export const Footer = () => {
  return `
    <footer class='Footer'>
        <nav class="Footer_List">
            <ul class="Footer_Navigation">
                <li class="Footer_Navigation-Logo">
                    <img src="./assets/icons/logo.svg" alt="">
                </li>
                <li class="Footer_Navigation-Items">
                    <ul class="Footer_Navigation-Items_List1">
                        <li class="">
                            <a href="#LuxuryPackages" data-lang="LuxuryPackages">Luxury Packages</a>
                        </li>
                        <li>
                            <a href="#BookWithUs" data-lang="BookWithUs">Book with us</a>
                        </li>
                    </ul>
                    <ul class="Footer_Navigation-Items_List3">
                        <li class="Footer_List_Button">
                            <ul class="Footer_List_Button_List">
                                <li class="Footer_List_Button_List_Bg">
                                    <img src="./assets/icons/Layer 3.png" alt="">
                                    <button><a href="#CallMe" data-lang="Contact">Call me</a></button>
                                    <img src="./assets/icons/Layer 4.png" alt="">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="Footer_Navigation-Items_List2">
                        <li>
                            <a href="#WhyLuxTrips" data-lang="WhyLuxTrips">Why Lux Trips</a>
                        </li>
                        <li>
                            <a href="#Contact" data-lang="Contact">Contact</a>
                        </li>
                    </ul>
                </li>
                <li class="Footer_Navigation-End">
                    <ul class="Footer_Navigation-End_List">
                        <li>
                            <span>© 2021 All Rights Reserved | Luxtrips</span>
                            <span>Company Site   |   Privacy Policy</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </footer>`;
};
