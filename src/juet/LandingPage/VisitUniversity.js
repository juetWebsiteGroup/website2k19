import React from "react";
import { FacebookProvider, Page } from "react-facebook";
import "./styles/visitUniv.css";
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";

const coords = {
	lat: process.env.JUET_Latitude,
	lng: process.env.JUET_Longitude
};

const params = { v: "3.exp", key: process.env.GOOGLE_MAP_KEY };

const onMapCreated = map => {
	map.setOptions({
		disableDefaultUI: true
	});
};

const VisitUniversity = props => {
	return (
		<section className='visitUniversityContainer'>
			<div className='fbPage'>
				<FacebookProvider appId={process.env.APP_ID_FB}>
					<Page href={process.env.FB_PAGE_LINK} tabs='timeline' />
				</FacebookProvider>
			</div>
			<div className='gmap'>
				<Gmaps params={params} lat={coords.lat} lng={coords.lng} onMapCreated={onMapCreated} zoom={14} width={"340px"} height={"50vh"}>
					<Marker lat={coords.lat} lng={coords.lng} draggable={true} />
				</Gmaps>
			</div>
		</section>
	);
};

export default VisitUniversity;
