import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

import {LAYER, ATTRIBUTION} from '../../consts.js';

const place = {
    bedrooms: 3,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 10
      },
      name: `Amsterdam`
    },
    id: 1,
    title: `Beautiful & luxurious studio at great location`,
  };

const PinUrl = {
  ACTIVE: `img/pin-active.svg`,
  NOT_ACTIVE: `img/pin.svg`
};

const ICON = L.icon({
  iconUrl: PinUrl.NOT_ACTIVE,
  iconSize: [30, 30],
});

const markers = [
  {latLng: [52.369553943508, 4.85309666406198], icon: ICON, id: 1},
  {latLng: [52.3909553943508, 4.85309666406198], icon: ICON, id: 2},
];

// КЛАСС КАРТЫ
class MapBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markersData: markers,
      activeMarker: 0,
    };

    this._mapRef = createRef();
    this.layer = null;
  }

  updateMarkers(markersData) {
    this.layer.clearLayers();

    markersData.forEach(({ latLng, icon, id }) => {
      L.marker(
        latLng,
        {icon},
        id
      ).addTo(this.layer);
    });
  };

  componentDidMount() {
    const mapRef = this._mapRef.current;

    // Инициализация карты
    this._mapRef = L.map(mapRef, {
      center: [52.38333, 4.9],
      zoom: 10,
      layers: [
        L.tileLayer(LAYER, {
          attribution: ATTRIBUTION
        }),
      ]
    });

    // Добавляет слой маркеров
    this.layer = L.layerGroup().addTo(this._mapRef);
    this.updateMarkers(this.state.markersData);
  };

  componentDidUpdate({ markersData }) {
    if (this.state.markersData !== markersData) {
      this.updateMarkers(this.state.markersData);
    }
  };

  componentWillUnmount() {
    const map = this._mapRef.current;
    this.layer.clearLayers();
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
