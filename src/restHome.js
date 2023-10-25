export function restLandingPage(){
    const contentDiv = document.querySelector('#content');

    const frostCont = document.createElement('div');
    frostCont.classList.add('frostedContainer');

    const head1 = document.createElement('h1');
    head1.textContent = "KBNO NOMNOMS";
    head1.classList.add('restName');
    frostCont.appendChild(head1);

    const restImg = document.createElement('img');
    restImg.src = '../src/assets/restaurant.jpg';
    restImg.classList.add('imgRest');
    frostCont.appendChild(restImg);

    const paraP = document.createElement('p');
    paraP.textContent = "This is the lyttiest restaurant you have ever seen. The chef has been chained up to one of the gas stoves in the kitchen and sworn in by blood oath to cook only the most scrumptious of delicacies for any and all of the brave souls that dare enter this amazing mecca of sustinance. His only job is to cook food and nothing else. His mind and cognitive range has been stripped down of nonsense such as name, sex, date of birth, and childhood memories and replaced with the most delicious and lyttiest of recipies your taste buds and mouth oriface has ever had the pleasure of coming in contact with. ENJOY..KBNO always!! Warm regards";
    paraP.classList.add('desc');
    frostCont.appendChild(paraP);

    const paraP2 = document.createElement('p');
    paraP2.textContent = "-Your boi, Swaggy Pro";
    paraP2.classList.add('desc');
    frostCont.appendChild(paraP2);

    contentDiv.appendChild(frostCont);
};