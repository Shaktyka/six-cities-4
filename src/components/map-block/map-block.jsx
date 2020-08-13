import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

class MapBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: this.props.places,
      offerCords: [52.3709553943508, 4.89309666406198],
      city: [52.38333, 4.9],
      zoom: 10,
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
      zoomControl: true,
      marker: true,
    };

    this._mapRef = createRef();
  }

  componentDidMount() {
    const {places} = this.props;
    const map = this._mapRef.current;

    // video.src = src;

  }

  componentWillUnmount() {
    const map = this._mapRef.current;

    // video.src = ``;
    // video.muted = null;
    // video.onplay = null;
  }

  componentDidUpdate() {
    // const map = this._mapRef.current;
  }

  render() {
    return (
      this.props.places ?
        <div className="cities__right-section">
          <section
            ref={this.mapRef}
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
