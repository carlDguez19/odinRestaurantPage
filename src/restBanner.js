export const liHome = document.createElement('li').textContent = HOME;
export const liMenu = document.createElement('li').textContent = MENU;
export const liContact = document.createElement('li').textContent = CONTACT;
//if ul does not append li's inside the function then append all li's here
export function bannerMain(){
    const ulNav = document.createElement('ul');
    ulNav.appendChild(liHome);
    ulNav.appendChild(liMenu);
    ulNav.appendChild(liContact);

    const header1 = document.createElement('h1');
    header1.textContent = 'KBNO NOMNOMS';

    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.appendChild(ulNav);
    banner.appendChild(header1);

    const content = document.querySelector('#content');
    content.appendChild(banner);
}