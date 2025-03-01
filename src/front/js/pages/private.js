import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};


