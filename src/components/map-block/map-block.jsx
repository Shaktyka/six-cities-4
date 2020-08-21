import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

import {LAYER, ATTRIBUTION} from '../../consts.js';

const PinUrl = {
  ACTIVE: `img/pin-active.svg`,
  NOT_ACTIVE: `img/pin.svg`
};

const ICON = L.icon({
  iconUrl: PinUrl.NOT_ACTIVE,
  iconSize: [30, 30],
});

// КЛАСС КАРТЫ
class MapBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      places: this.props.places,
      markers: this.props.markers,
      cityCenter: this.props.cityCenter,
      zoom: this.props.zoom,
      activeMarker: 0,
    };

    this._mapRef = createRef();
    this.layer = null;
  }

  updateMarkers(markers) {
    this.layer.clearLayers();

    markers.forEach(({ latLng, icon, id }) => {
      L.marker(
        latLng,
        {icon},
        id
      ).addTo(this.layer);
    });
  };

  setMarkers() {
    const {places} = this.state;

    const markers = places.map((place) => {
      return ({
        latLng: place.location.latLng,
        id: place.id,
        icon: ICON,
      });
    });
    this.setState({markers});
  };

  componentDidMount() {
    const {places, markers, cityCenter, zoom} = this.state;
    const mapRef = this._mapRef.current;

    // Инициализация карты
    this._mapRef = L.map(mapRef, {
      center: cityCenter,
      zoom: zoom,
      layers: [
        L.tileLayer(LAYER, {
          attribution: ATTRIBUTION
        }),
      ]
    });

    // Добавляет слой маркеров
    this.layer = L.layerGroup().addTo(this._mapRef);
    this.updateMarkers(markers);
  };

  componentDidUpdate({markers}) {
    if (this.state.markers !== markers) {
      this.updateMarkers(this.state.markers);
    }
  };

  componentWillUnmount() {
    const map = this._mapRef.current;
    this.layer.clearLayers();
    this.layer = null;
    this._mapRef = null;
    this.setState({
      places: [],
      cityCenter: [],
    });
  };

  render() {
    return (
      this.props.places ?
        <div className="cities__right-section">
          <section
            id="map"
            ref={this._mapRef}
            className="cities__map map"
          ></section>
        </div>
        : `Data is loading...`
    );
  }
}

MapBlock.propTypes = {
  places: PropTypes.array.isRequired,
};

export default MapBlock;
