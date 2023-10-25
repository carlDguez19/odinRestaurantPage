import { liHome } from "./restBanner";
import { liMenu } from "./restBanner";
import { liContact } from "./restBanner";
import { bannerMain } from "./restBanner";
import { restLandingPage } from "./restHome";
import { restMenu } from "./restMenu";

bannerMain();
restLandingPage();

liHome.addEventListener('click', function(){
    clearContent();
    restLandingPage();
});

liMenu.addEventListener('click', function(){
    clearContent();
    restMenu();
});

function clearContent(){
    document.querySelector('#content').innerHTML = "";
    bannerMain();
}

console.log("THis is jsut a test blaaa popcorn lollipop pan");