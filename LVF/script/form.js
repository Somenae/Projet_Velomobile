import ManageDom from "./ManageDom.js";

export default class contactForm extends ManageDom {
    constructor() {
        super();
        this.render();
    }
    render() {
        const footer = this.createMarkup("footer", "", document.body);
        const form = this.createMarkup("form", "", footer, [{"class":"formulaire"}]);
        const labelName = this.createMarkup("label", "Nom", form, [{"class":"label"}, {"for":"name"}]);
        const inputName = this.createMarkup("input", "", form, [{"type":"text"}, {"placeholder":"Nom"}, {"class":"input"}, {"id":"name"}, {"name":"name"}]);
        const labelFirstName = this.createMarkup("label", "Prénom", form, [{"class":"label"}, {"for":"firstName"}]);
        const inputFirstName = this.createMarkup("input", "", form, [{"type":"text"}, {"placeholder":"Prénom"}, {"class":"input"}, {"id":"firstName"}, {"name":"firstName"}]);
        const labelMail = this.createMarkup("label", "Email", form, [{"class":"label"}, {"for":"email"}]);
        const inputMail = this.createMarkup("input", "", form, [{"type":"text"}, {"placeholder":"Mail"}, {"class":"input"}, {"id":"email"}, {"name":"email"}]);
        const labelPhone = this.createMarkup("label", "Téléphone", form, [{"class":"label"}, {"for":"phone"}]);
        const inputPhone = this.createMarkup("input", "", form, [{"type":"text"}, {"placeholder":"Téléphone"}, {"class":"input"}, {"id":"phone"}, {"name":"phone"}]);
        const labelHow = this.createMarkup("label", "Comment avez-vous entendu parler de nous ?", form, [{"class":"label"}, {"for":"how"}]);
        const inputHow = this.createMarkup("input", "", form, [{"type":"text"}, {"placeholder":"Comment avez-vous entendu parler de nous ?"}, {"class":"input"}, {"id":"how"}, {"name":"how"}]);
        const inputMessage = this.createMarkup("textarea", "", form, [{"type":"text"}, {"placeholder":"Message"}, {"class":"textarea"}, {"id":"message"}, {"name":"message"}]);
        const button = this.createMarkup("button", "Envoyer", form, [{"type": "submit", "id": "formButton"}])
    }
}