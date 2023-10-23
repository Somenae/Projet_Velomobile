import ManageDom from "./ManageDom.js";

export default class footer extends ManageDom {
  constructor() {
    super();
    this.render();
  }

    render(){
        const footer = this.createMarkup("footer", "", document.body);
        const divLogo = this.createMarkup("div", "", footer);
        const logo = this.createMarkup("img", "", divLogo, [{src: "./assets/imgs/lvf-logo+txt-alpha.png"}]);
        const nav = this.createMarkup("nav", "", footer);
        const ul = this.createMarkup("ul", "", nav);
        let i = 0;
        let liTab = [];
        let aTab1 = [];
        let aTab2 = [];
        let socialTab = [];
        while(i<5){
            liTab[i] = this.createMarkup("li", "", ul);
            i++;
        }
        i = 0;
        while(i<5){
            aTab1[i] = this.createMarkup("a", "", liTab[i]);
            i++;
        }
        aTab1[0].innerText = "Accueil";
        aTab1[1].innerText = "Notre histoire";
        aTab1[2].innerText = "Notre atelier";
        aTab1[3].innerText = "Nos Vélomobiles";
        aTab1[4].innerText = "Contactez-nous";
        const p = this.createMarkup("p", "Suivez-nous !", nav);
        i = 0;
        while(i<4){
            aTab2[i] = this.createMarkup("a", "", nav);
            socialTab[i] = this.createMarkup("img", "", aTab2[i]);
            i++;
        }
        let currentUrl = window.location.pathname;
        console.log(currentUrl);
        if( currentUrl.search("LVF/index.html") !== -1){
            socialTab[0].src = "./assets/imgs/facebook-f.svg";
            socialTab[1].src = "./assets/imgs/instagram.svg";
            socialTab[2].src = "./assets/imgs/youtube.svg";
            socialTab[3].src = "./assets/imgs/dailymotion.svg";
            aTab1[0].href = "./index.html";
            aTab1[1].href = "./html/histoire.html";
            aTab1[2].href = "./html/usines.html";
            aTab1[3].href = "./html/modeles.html";
            aTab1[4].href = "#";
            console.log("Pouet1");
        }
        else {
            logo.src = "./../assets/imgs/lvf-logo+txt-alpha.png"
            socialTab[0].src = "./../assets/imgs/facebook-f.svg";
            socialTab[1].src = "./../assets/imgs/instagram.svg";
            socialTab[2].src = "./../assets/imgs/youtube.svg";
            socialTab[3].src = "./../assets/imgs/dailymotion.svg";
            aTab1[0].href = "./../index.html";
            aTab1[1].href = "./histoire.html";
            aTab1[2].href = "./usines.html";
            aTab1[3].href = "./modeles.html";
            aTab1[4].href = "#";
            console.log("Pouet2");
        }
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
