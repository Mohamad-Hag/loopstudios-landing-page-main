let menuState = "close";
window.onresize = window.onload = () => {
  let x = window.matchMedia("(max-width: 880px)");
  let y = window.matchMedia("(max-width: 780px)");
  changeMenu(x);
  changeSeeAll(y);
  x.addListener(changeMenu);
  y.addListener(changeSeeAll);
};
function changeSeeAll(y) {
  let creationsSection = document.querySelector("#creations-section");
  let seeAllButton = document.createElement("a");
  seeAllButton.setAttribute("id", "mobile-see-all");
  seeAllButton.innerText = "See All";
  if (y.matches) {
    if (document.querySelector("#mobile-see-all") === null)
      creationsSection.appendChild(seeAllButton);
  } else {
    if (document.querySelector("#mobile-see-all") !== null)
      document.querySelector("#mobile-see-all").remove();
  }
}
function changeMenu(x) {
  let header = document.querySelector("header");
  let menuButton = document.createElement("button");
  let menu = document.createElement("div");

  menu.setAttribute("id", "menu");
  menu.innerHTML = `
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
  `;
  menuButton.setAttribute("id", "menu-btn");
  menuButton.onclick = menuButtonClicked;
  menuButton.innerHTML = `
  <ion-icon name="reorder-three-outline"></ion-icon>
  `;
  if (x.matches) {
    if (document.querySelector("#menu-btn") === null)
      header.appendChild(menuButton);
    if (document.querySelector("#menu") === null)
      document.body.appendChild(menu);
  } else {
    if (document.querySelector("#menu-btn") !== null)
      document.querySelector("#menu-btn").remove();
    if (document.querySelector("#menu") !== null)
      document.querySelector("#menu").remove();
  }
}
function menuButtonClicked() {
  let e = document.querySelector("#menu-btn");
  let menu = document.querySelector("#menu");
  var style = document.createElement("style");
  document.head.appendChild(style);
  if (menuState === "close") {
    e.children[0].setAttribute("name", "close-outline");
    menu.style.opacity = "1";
    menu.style.visibility = "visible";
    style.sheet.insertRule(`#menu ul li 
    {    
      counter-increment: delay;
      transform: translateX(-50px);
      opacity: 0;  
      animation: menu-animate .3s forwards;
    }`
    );
    menuState = "open";
  } else {
    e.children[0].setAttribute("name", "reorder-three-outline");
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
    document.head.querySelectorAll("style").forEach(el => el.remove());
    menuState = "close";
  }
}
