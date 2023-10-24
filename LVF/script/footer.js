import ManageDom from "./ManageDom.js";

export default class footer extends ManageDom {
  constructor() {
    super();
    this.render();
  }

  render() {
    const footer = this.createMarkup("footer", "", document.body);
    const divContainer = this.createMarkup("div", "", footer, [
      { class: "div-container" },
    ]);
    const divLogo = this.createMarkup("div", "", divContainer, [
      { class: "div-logo" },
    ]);
    const logo = this.createMarkup("img", "", divLogo, [
      { src: "./assets/imgs/lvf-logo+txt-alpha.png" },
    ]);
    const nav = this.createMarkup("nav", "", divContainer, [
      { class: "ul-box" },
    ]);
    const ul = this.createMarkup("ul", "", nav);
    let divSocialTab = this.createMarkup("div", "", divContainer, [
      { class: "div-social-tab" },
    ]);
    let divTitleTab = this.createMarkup("div", "", divSocialTab, [
      { class: "div-title-tab" },
    ]);
    let titleSocialTab = this.createMarkup("h3", "Suivez nous !", divTitleTab);
    let divIconTab = this.createMarkup("div", "", divSocialTab, [
      { class: "div-icon-tab" },
    ]);
    let i = 0;
    let liTab = [];
    let aTab1 = [];
    let aTab2 = [];
    let socialTab = [];
    while (i < 5) {
      liTab[i] = this.createMarkup("li", "", ul);
      i++;
    }
    i = 0;
    while (i < 5) {
      aTab1[i] = this.createMarkup("a", "", liTab[i]);
      i++;
    }
    aTab1[0].innerText = "Accueil";
    aTab1[1].innerText = "Notre histoire";
    aTab1[2].innerText = "Notre atelier";
    aTab1[3].innerText = "Nos Vélomobiles";
    aTab1[4].innerText = "Contactez-nous";
    i = 0;
    while (i < 4) {
      aTab2[i] = this.createMarkup("a", "", divIconTab, [{"class": `icon${i}`}]);
      socialTab[i] = this.createMarkup("img", "", aTab2[i]);
      i++;
    }
    let currentUrl = window.location.pathname;
    if (currentUrl.search("LVF/index.html") !== -1) {
      socialTab[0].src = "./assets/imgs/facebook-f.svg";
      socialTab[1].src = "./assets/imgs/instagram.svg";
      socialTab[2].src = "./assets/imgs/youtube.svg";
      socialTab[3].src = "./assets/imgs/dailymotion.svg";
      aTab1[0].href = "./index.html";
      aTab1[1].href = "./html/histoire.html";
      aTab1[2].href = "./html/usines.html";
      aTab1[3].href = "./html/modeles.html";
      aTab1[4].href = "#";
    } else {
      logo.src = "./../assets/imgs/lvf-logo+txt-alpha.png";
      socialTab[0].src = "./../assets/imgs/facebook-f.svg";
      socialTab[1].src = "./../assets/imgs/instagram.svg";
      socialTab[2].src = "./../assets/imgs/youtube.svg";
      socialTab[3].src = "./../assets/imgs/dailymotion.svg";
      aTab1[0].href = "./../index.html";
      aTab1[1].href = "./histoire.html";
      aTab1[2].href = "./usines.html";
      aTab1[3].href = "./modeles.html";
      aTab1[4].href = "#";
    }
  }
}
