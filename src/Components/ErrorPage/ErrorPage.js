// Librairies
import React from "react";
import { useNavigate } from "react-router-dom";
import '../../SCSS/ErrorPage.scss';


const ErrorPage = () => {

    const navigate = useNavigate();

    const redirection = () => {

        setTimeout(() => {
            navigate(-1);
        }, 5000)
    }

    redirection();


    return (
        <div className="ErrorPage">
            <div class="spinner-border text-primary" role="status" style={{height: '5rem', width: "5rem"}}>
                <span class="visually-hidden"></span>
            </div>
            <h3>Oups, cette page n'existe pas, Vous serez Rédirigez vers la page précedente dans 5s.......</h3>
        </div>
    )
}

export default ErrorPage;