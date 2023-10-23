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

  render() {
    let marker =  L.marker(this.xy, {icon: this.icon}).addTo(this.map);
    return marker.bindPopup(`<h4>${this.popupHeader}</h4><p>${this.popupTxt}</p>`);
  }

  eventHandler() {
    //console.log(this.mark._icon.classList);
    
    this.mark.on('click', (e) => {
      let markers = document.querySelectorAll(".leaflet-marker-icon");
      for (const marker of markers) {
        marker.classList.remove("pin-active");
      }
      this.mark._icon.classList.add("pin-active");
    })
  }
}