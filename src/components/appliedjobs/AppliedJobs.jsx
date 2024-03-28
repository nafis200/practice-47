import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../utility/Localstorage";
import { Helmet } from "react-helmet-async";
import GoogleMapReact from 'google-map-react';
import { googleapi } from "./Googleapi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const AppliedJobs = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div>
      <Helmet>
        <title>nafis</title>
      </Helmet>
      <h2 className="text-2xl">Jobs I applied:</h2>
      
      <section>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleapi  }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </section>

    </div>
  );
};

export default AppliedJobs;
