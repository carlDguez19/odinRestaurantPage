(()=>{"use strict";const e=document.createElement("li");e.textContent="HOME";const t=document.createElement("li");t.textContent="MENU";const n=document.createElement("li");function a(){const a=document.createElement("ul");a.appendChild(e),a.appendChild(t),a.appendChild(n);const s=document.createElement("h1");s.textContent="KBNO NOMNOMS";const c=document.createElement("div");c.classList.add("banner"),c.appendChild(a),c.appendChild(s),document.querySelector("#content").appendChild(c)}function s(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("frostedContainer");const n=document.createElement("h1");n.textContent="KBNO NOMNOMS",n.classList.add("restName"),t.appendChild(n);const a=document.createElement("img");a.src="../src/assets/restaurant.jpg",a.classList.add("imgRest"),t.appendChild(a);const s=document.createElement("p");s.textContent="This is the lyttiest restaurant you have ever seen. The chef has been chained up to one of the gas stoves in the kitchen and sworn in by blood oath to cook only the most scrumptious of delicacies for any and all of the brave souls that dare enter this amazing mecca of sustinance. His only job is to cook food and nothing else. His mind and cognitive range has been stripped down of nonsense such as name, sex, date of birth, and childhood memories and replaced with the most delicious and lyttiest of recipies your taste buds and mouth oriface has ever had the pleasure of coming in contact with. ENJOY..KBNO always!! Warm regards",s.classList.add("desc"),t.appendChild(s);const c=document.createElement("p");c.textContent="-Your boi, Swaggy Pro",c.classList.add("desc"),t.appendChild(c),e.appendChild(t)}function c(){document.querySelector("#content").innerHTML="",a()}n.textContent="CONTACT",a(),s(),e.addEventListener("click",(function(){c(),s()})),t.addEventListener("click",(function(){c(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1");n.textContent="MENU",t.appendChild(n),e.appendChild(t);const a=document.createElement("div"),s=document.createElement("h2");s.textContent="Beverages",a.appendChild(s),a.classList.add("menuSection"),e.appendChild(a);const c=document.createElement("div"),d=document.createElement("h3");d.textContent="Half and Half Tea";const o=document.createElement("img");o.src="../src/assets/tea.jpg",o.alt="A tall glass of iced tea",o.classList.add("teaImg");const i=document.createElement("p");i.textContent="the best balance of sweet and unsweet tea.",c.appendChild(d),c.appendChild(i),c.classList.add("menuItem"),e.appendChild(c);const l=document.createElement("div"),m=document.createElement("h2");m.textContent="Appetizers",l.appendChild(m),l.classList.add("menuSection"),e.appendChild(l);const r=document.createElement("div"),p=document.createElement("h3");p.textContent="Waaangs";const u=document.createElement("img");u.src="../src/assets/wings.jpg",u.alt="some delicious wings",u.classList.add("teaImg");const h=document.createElement("p");h.textContent="the crispiest, perfectly spicy, and most delectable wangs youve ever had",r.appendChild(p),r.appendChild(u),r.appendChild(h),r.classList.add("menuItem");const C=document.createElement("div"),E=document.createElement("h2");E.textContent="Entree",C.appendChild(E),C.classList.add("menuSection");const g=document.createElement("div"),f=document.createElement("h3");f.textContent="Feesh",document.createElement("img"),salmonImg.src="../src/assets/salmon.jpg",salmonImg.alt="A piece of salmon cooked perfectly.",salmonImg.classList.add("teaImg");const v=document.createElement("p");v.textContent="Salmon that was living in bikini bottom...until it wasnt",g.appendChild(f),g.appendChild(salmonImg),g.appendChild(v),g.classList.add("menuItem")}()})),console.log("THis is jsut a test blaaa popcorn lollipop pan")})();