export function restMenu(){
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = "MENU";
    menuDiv.appendChild(menuHeader);
    menuDiv.classList.add('menuHeader');
    content.appendChild(menuDiv);

    const beveragesDiv = document.createElement('div');
    const beveragesHeader = document.createElement('h2');
    beveragesHeader.textContent = 'Beverages';
    beveragesDiv.appendChild(beveragesHeader);
    beveragesDiv.classList.add('menuSection');
    content.appendChild(beveragesDiv);

    const hnhTeaDiv = document.createElement('div');
    const hnhHeader = document.createElement('h3');
    hnhHeader.textContent = "Half and Half Tea";
    const hnhImg = document.createElement('img');
    hnhImg.src = '../src/assets/tea.jpg';
    hnhImg.alt = 'A tall glass of iced tea';
    hnhImg.classList.add('teaImg');
    const hnhDesc = document.createElement('p');
    hnhDesc.textContent = 'the best balance of sweet and unsweet tea.';
    hnhTeaDiv.appendChild(hnhHeader);
    hnhTeaDiv.appendChild(hnhImg);//too big if not modified with css
    hnhTeaDiv.appendChild(hnhDesc);
    hnhTeaDiv.classList.add('menuItem');
    content.appendChild(hnhTeaDiv);

    const appsDiv = document.createElement('div');
    const appsHeader = document.createElement('h2');
    appsHeader.textContent = 'Appetizers';
    appsDiv.appendChild(appsHeader);
    appsDiv.classList.add('menuSection');
    content.appendChild(appsDiv);

    const wingDiv = document.createElement('div');
    const wingHeader = document.createElement('h3');
    wingHeader.textContent = "Waaangs";
    const wingImg = document.createElement('img');
    wingImg.src = '../src/assets/wings.jpg';
    wingImg.alt = 'some delicious wings';
    wingImg.classList.add('teaImg');
    const wingDesc = document.createElement('p');
    wingDesc.textContent = 'the crispiest, perfectly spicy, and most delectable wangs youve ever had';
    wingDiv.appendChild(wingHeader);
    wingDiv.appendChild(wingImg);//too big if not modified with css
    wingDiv.appendChild(wingDesc);
    wingDiv.classList.add('menuItem');
    content.appendChild(wingDiv);

    const entreeDiv = document.createElement('div');
    const entreeHeader = document.createElement('h2');
    entreeHeader.textContent = 'Entree';
    entreeDiv.appendChild(entreeHeader);
    entreeDiv.classList.add('menuSection');
    content.appendChild(entreeDiv);
    
    const salmonDiv = document.createElement('div');
    const salmonHeader = document.createElement('h3');
    salmonHeader.textContent = "Feesh";
    const salmonImg = document.createElement('img');
    salmonImg.src = '../src/assets/salmon.jpg';
    salmonImg.alt = 'A piece of salmon cooked perfectly.';
    salmonImg.classList.add('teaImg');
    const salmonDesc = document.createElement('p');
    salmonDesc.textContent = 'Salmon that was living in bikini bottom...until it wasnt';
    salmonDiv.appendChild(salmonHeader);
    salmonDiv.appendChild(salmonImg);//too big if not modified with css
    salmonDiv.appendChild(salmonDesc);
    salmonDiv.classList.add('menuItem');
    content.appendChild(salmonDiv);
}