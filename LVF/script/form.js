import ManageDom from "./ManageDom.js";

export default class contactForm extends ManageDom {
  constructor() {
    super();
    this.domElements = this.render();
    this.handleEvents();
  }

  render() {
    const formDiv = this.createMarkup("section", "", document.body, [
      { class: "formulaire" },
      { id: "contact" },
    ]);
    const form = this.createMarkup("form", "", formDiv);
    const titleh3 = this.createMarkup("h3", "Contactez Nous !", form);
    const divContainer = this.createMarkup("div", "", form, [
      { class: "div-form-container" },
    ]);
    const divName = this.createMarkup("div", "", divContainer, [
      { class: "first-form-bloc" },
    ]);
    const divEmail = this.createMarkup("div", "", divContainer, [
      { class: "second-form-bloc" },
    ]);
    const labelName = this.createMarkup("label", "Nom", divName, [
      { class: "label" },
      { for: "name" },
    ]);
    const inputName = this.createMarkup("input", "", divName, [
      { type: "text" },
      { placeholder: "Nom" },
      { class: "input" },
      { id: "name" },
      { name: "name" },
    ]);
    const labelFirstName = this.createMarkup("label", "Prénom", divName, [
      { class: "label" },
      { for: "firstName" },
    ]);
    const inputFirstName = this.createMarkup("input", "", divName, [
      { type: "text" },
      { placeholder: "Prénom" },
      { class: "input" },
      { id: "firstName" },
      { name: "firstName" },
    ]);
    const labelMail = this.createMarkup("label", "Email", divEmail, [
      { class: "label" },
      { for: "email" },
    ]);
    const inputMail = this.createMarkup("input", "", divEmail, [
      { type: "text" },
      { placeholder: "Mail" },
      { class: "input" },
      { id: "email" },
      { name: "email" },
    ]);
    const labelPhone = this.createMarkup("label", "Téléphone", divEmail, [
      { class: "label" },
      { for: "phone" },
    ]);
    const inputPhone = this.createMarkup("input", "", divEmail, [
      { type: "text" },
      { placeholder: "Téléphone" },
      { class: "input" },
      { id: "phone" },
      { name: "phone" },
    ]);
    const labelHow = this.createMarkup(
      "label",
      "Comment avez-vous entendu parler de nous ?",
      form,
      [{ class: "label" }, { for: "how" }]
    );
    const inputHow = this.createMarkup("input", "", form, [
      { type: "text" },
      { placeholder: "Comment avez-vous entendu parler de nous ?" },
      { class: "input" },
      { id: "how" },
      { name: "how" },
    ]);
    const inputMessage = this.createMarkup("textarea", "", form, [
      { type: "text" },
      { placeholder: "Message" },
      { class: "textarea" },
      { id: "message" },
      { name: "message" },
      { rows: 5 },
    ]);
    const button = this.createMarkup("button", "Envoyer", form, [
      { class: "button-design" },
      { type: "submit", id: "formButton" },
    ]);

    return {
      form,
      inputName,
      inputFirstName,
      inputMail,
      inputPhone,
      inputHow,
      inputMessage,
    };
  }

  handleEvents() {
    /* Gère le submit du formulaire */
    this.domElements.form.addEventListener("submit", (e) => {
      const dom = this.domElements;
      e.preventDefault();
      try {
        if (!dom.inputName.value) throw "Veuillez entrer votre nom";
        if (!dom.inputFirstName.value) throw "Veuillez entrer votre prénom";
        if (!dom.inputMail.value) throw "Veuillez entrer votre adresse email";
        if (!dom.inputPhone.value)
          throw "Veuillez entrer votre numéro de téléphone";
        if (!dom.inputMessage.value) throw "Veuillez entrer un message";
      } catch (error) {
        alert(error);
        return false;
      }
      alert(
        "Votre message a été envoyé avec succès.\nMerci de votre confiance !"
      );
    });
  }
}
