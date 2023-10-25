import { liHome } from "./restBanner";
import { liMenu } from "./restBanner";
import { liContact } from "./restBanner";
import { bannerMain } from "./restBanner";
import { restLandingPage } from "./restHome";

liHome.addEventListener('click', function(){
    clearContent();
    restLandingPage();
});

bannerMain();
restLandingPage();

function clearContent(){
    document.querySelector('#content').innerHTML = "";
}

console.log("THis is jsut a test blaaa popcorn lollipop pan");