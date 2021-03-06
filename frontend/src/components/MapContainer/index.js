import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '800px',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                className="Map"
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                center={
                    {
                        lat: 39.928,
                        lng: 73.9857
                    }
                }
            />
        );
    }
}





export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
