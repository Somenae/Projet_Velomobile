import ManageDom from "./ManageDom.js";

export default class slideShow extends ManageDom {
  /**
   *
   * @param {number} nb_images
   * @param {array} imagesArray
   * @param {number} width
   * @param {number} height
   * @param {number} speed
   */
  constructor(nb_images, imagesArray, speed) {
    super();
    this.nb_images = nb_images;
    this.speed = speed;
    this.imagesArray = imagesArray
    this.domElement = this.render();
    this.animateSs(this.speed);
  }

  render() {
    /* Création de la div sur laquelle sera attachée le carousel, possible de créer la div en html pour placer le carousel où vous voulez et donc de changer le let ici */
    let imgDiv = document.getElementById("carousel");
    for (let i = 0; i < this.nb_images; i++) {
      if (i === 0) {
        this.createMarkup("img", "", imgDiv, [{ src: this.imagesArray[i], id: `${i}Child` }]);
      } else {
        this.createMarkup("img", "", imgDiv, [{ src: this.imagesArray[i], class: `hidden`, id: `${i}Child` }]);
      }
    }
    return { imgDiv };
  }

  animateSs(e) {
    let i = 0;

    /* Fonction changeant l'image affichée */
    let myTimer = () => {
      let domElem1 = document.getElementById(`${i}Child`);
      let domElem2 = document.getElementById(`${i + 1}Child`);
      if (i == this.nb_images - 1) {
        i = 0;
        document.getElementById(`0Child`).classList.remove("hidden");
        document.getElementById(`${this.nb_images - 1}Child`).classList.add("hidden");
      }
      domElem1.classList.add("hidden");
      domElem2.classList.remove("hidden");
      i++;
    };

    /* Gestion d'événement pour changer d'image et stopper au click */
    let interval = setInterval(myTimer, e);
    let pause = false;
    this.domElement.imgDiv.onclick = () => {
      switch (pause) {
        case true :
          interval = setInterval(myTimer, e);
          pause = false;
          console.log(pause);
          break;
        case false :
          clearInterval(interval);
          pause = true;
          console.log(pause);
          break;
      }
    };
  }
}