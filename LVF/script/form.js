import ManageDom from "./ManageDom.js";

export default class contactForm extends ManageDom {
    constructor() {
        super();
        this.render();
    }
    render() {
        let footer = document.getElementsByTagName("footer");
        const form = this.createMarkup("form", "", footer, [{"class":"formulaire"}]);
        const inputName = this.createMarkup("input", "Nom", form, [{"type":"text"}, {"placeholder":"Nom"}, {"class":"input"}, {"id":"name"}, {"name":"name"}]);
        const inputFirstName = this.createMarkup("input", "Prénom", form, [{"type":"text"}, {"placeholder":"Prénom"}, {"class":"input"}, {"id":"firstName"}, {"name":"firstName"}]);
        const inputMail = this.createMarkup("input", "Email", form, [{"type":"text"}, {"placeholder":"Mail"}, {"class":"input"}, {"id":"email"}, {"name":"email"}]);
        const result = this.createMarkup("div", "", form);
        return{
            form
        }
    }
}