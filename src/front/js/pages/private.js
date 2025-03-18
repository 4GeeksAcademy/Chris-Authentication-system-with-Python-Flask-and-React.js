import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // Fixed: added useNavigate
import { Context } from "../store/appContext";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); // Fixed: useNavigate for redirection
    const params = useParams();

    useEffect(() => {
        if (!store.token) {
            navigate("/login"); // Fixed: use navigate() instead of Navigate()
        }
    }, [store.token, navigate]); // Added dependencies to useEffect

    return (
        <div className="jumbotron">
            <h1>Private</h1>

            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
