const firstHeader= document.querySelector('h1').parentElement;

firstHeader.style.borderBottom = '5px solid grey';

/*
const info = document.querySelector(".info");

const infoPackages = document.querySelectorAll(".info-package");

infoPackages.forEach((package) => {
  if (info.contains(package)) {
    let packageTitle = package.querySelector(".package-title");
    packageTitle.previousElementSibling.style.border = "3px solid black";
  }
});
*/

const infoPackage = document.querySelectorAll('.info-package');

infoPackage.forEach(item => {
    let prevImage = item.querySelector('h1').previousElementSibling;
    prevImage.style.border = '3px solid black';

    let label = item.lastElementChild;
    if (label.matches('.mild')) {
        label.style.borderBottom = '3px solid yellow';
    } else if (label.matches('.intense')) {
        label.style.borderBottom = '3px solid orange';
    } else {
        label.style.borderBottom = '3px solid red';
    }
})

const navList = document.querySelector('.nav-list');

const navChildren = navList.children; // html collection

const siteMap = document.querySelector('.site-map');

[...navChildren].forEach(item => {
    const clonedItem = item.cloneNode(true);
    siteMap.appendChild(clonedItem);
}); 
