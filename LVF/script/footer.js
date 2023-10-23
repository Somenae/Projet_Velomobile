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
    const divLogo = this.createMarkup("div", "", divContainer, [{"class":"div-logo"}]);
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
    let i = 0;
    let liTab = [];
    let aTab = [];
    let socialTab = [];
    while (i < 5) {
      liTab[i] = this.createMarkup("li", "", ul);
      i++;
    }
    i = 0;
    while (i < 5) {
      aTab[i] = this.createMarkup("a", "", liTab[i]);
      i++;
    }
    aTab[0].innerText = "Accueil";
    aTab[1].innerText = "Notre histoire";
    aTab[2].innerText = "Notre atelier";
    aTab[3].innerText = "Nos Vélomobiles";
    aTab[4].innerText = "Contactez-nous";
    aTab[0].href = "./index.html";
    aTab[1].href = "./html/histoire.html";
    aTab[2].href = "./html/usines.html";
    aTab[3].href = "./html/modeles.html";
    aTab[4].href = "#";
    
    i = 0;
    while (i < 4) {
      aTab[i] = this.createMarkup("a", "", nav);

      socialTab[i] = this.createMarkup("img", "", divSocialTab);
      i++;
    }
    socialTab[0].src = "./assets/imgs/facebook-f.svg";
    socialTab[1].src = "./assets/imgs/instagram.svg";
    socialTab[2].src = "./assets/imgs/youtube.svg";
    socialTab[3].src = "./assets/imgs/dailymotion.svg";
  }
}
