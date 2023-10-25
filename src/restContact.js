export function restContact(){
    const contentDiv = document.querySelector('#content');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact... me?';
    contactHeader.classList.add('menuHeader');
    //contentDiv.appendChild(contactHeader);

    const contactCont = document.createElement('div');
    contactCont.classList.add('contactContainer');
    
    const infoCont = document.createElement('div');
    infoCont.classList.add('infoContainer');
    const contName = document.createElement('h3');
    contName.textContent = "Swaggy Pro";
    const contPosition = document.createElement('p');
    contPosition.textContent = "CEO/President/Owner/Founder/The ONE";
    const contTel = document.createElement('p');
    contTel.textContent = "Dont call us we'll call you";
    const contEmail = document.createElement('p');
    contEmail.textContent = "ignore the spaces@realemail.sure";

    infoCont.appendChild(contName);
    infoCont.appendChild(contPosition);
    infoCont.appendChild(contTel);
    infoCont.appendChild(contEmail);

    const contactPfp = document.createElement('img');
    contactPfp.classList.add('teaImg');
    contactPfp.src = "../src/assets/contPfp.jpg";
    contactPfp.alt = "a walking zombie";

    const wrapInfoCont = document.createElement('div');
    wrapInfoCont.classList.add('wrapCont');
    wrapInfoCont.appendChild(infoCont);
    wrapInfoCont.appendChild(contactPfp);
    
    contactCont.appendChild(wrapInfoCont);

    contentDiv.appendChild(contactHeader);
    contentDiv.appendChild(contactCont);
}