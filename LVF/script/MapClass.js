export default class Marker {
  /**
   * CONSTRUCTOR
   * @param {Object[]} xy (coordonnées)
   * @param {String} popupHeader (titre dans la popup rattachée)
   * @param {String} popupTxt (texte dans la popup rattachée)
   * @param {Object} map (la carte)
   * @param {String} icon ("usine", "siege" ou "magasin")
   */
  constructor(xy, popupHeader, popupTxt, map, icon) {
    this.xy = xy;
    this.popupHeader = popupHeader;
    this.popupTxt = popupTxt;
    this.map = map;
    this.icon = L.icon({
      iconUrl: `../assets/imgs/${ icon }.png`,
      className: `pin-${ icon }`,
      iconSize: [50, 50],
      iconAnchor: [25, 49],
      popupAnchor: [0, -55]
      });
    this.mark = this.render();
    this.eventHandler();
  }

  // Fait le rendu du marqueur sur la carte
  render() {
    let marker =  L.marker(this.xy, {icon: this.icon}).addTo(this.map);
    return marker.bindPopup(`<h4>${this.popupHeader}</h4><p>${this.popupTxt}</p>`);
  }

  eventHandler() {
    // Quand on clique sur la carte, les marqueurs ne sont plus actifs.
    this.map.on('click', (e) => {
      this.removePinActive();
    })

    // Quand on clique sur un marqueur, il s'active et s'anime.
    this.mark.on('click', (e) => {
      this.removePinActive();
      this.mark._icon.classList.add("pin-active");
    })
  }

  // Méthode qui retire la classe "pin-active" de tous les marqueurs de la carte
  removePinActive() {
    let markers = document.querySelectorAll(".leaflet-marker-icon");
    for (const marker of markers) {
      marker.classList.remove("pin-active");
    }
  }

  /**
   * Problème : le marqueur reste animé lorsqu'on ferme la popup avec la croix.
   * Solution à la con : masquer la croix avec CSS
   */
}