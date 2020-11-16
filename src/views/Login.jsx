import React, { useEffect, useState } from "react";
import axios from "axios";
import Splash from "../components/Splash";
import {
  Redirect,
} from "react-router-dom";

import "../assets/scss/footer.scss";
import snelImg from "../img/snel.png";
export default function AchatFormulaire() {
  const [NumCompteur, setNumCompteur] = useState("");
  const [Password, setPassword] = useState("");
  const [NumCompteurErr, setNumCompteurErr] = useState("");
  const [PasswordErr, setPasswordErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPendingPayement, setIsPendingPayement] = useState(false);
  const [fact, setFact] = useState({});

  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);

  React.useEffect(() => {
    setInterval(() => {
      setLoading(false);

    }, 5000);
  }, []);
  const _submit = (e) => {
    e.preventDefault();
    if (validatorNumCompteur(NumCompteur) && validatorPassword(Password)) {
      setLogin(true)
    }
  };

  const validatorPassword = (inputtxt) => {
    if (inputtxt == "") {
      setPasswordErr("Veillez entrer un mot de passe");
      return false;
    }

    if (inputtxt != "123456") {
      setPasswordErr("le mot de passe est invalide ");
      return false
    }
    setPasswordErr("");
    return true;
  };

  const validatorNumCompteur = (num) => {
    if (num == "") {
      setNumCompteurErr("Veillez entrer le numero de compteur ");
      return false;
    }
    if (num != "12345678900000") {
      setNumCompteurErr("Numero de compteur invalide");
      return false;
    }

    setNumCompteurErr("");
    return true;
  };

  if (loading) {
    return <Splash/>;
  }

  if (isError) {
    return (
      <>
        <div class="ui warning message">
          <i class="close icon"></i>
          <div class="header">Une erreur est survenue</div>
          Veuillez ressayer plutard !!!
        </div>

        <div class="app-bar-bottom">
          <div class="btnplus">
            <a class="btn__content" href="#/">
              <i class="material-icons">clear</i>
            </a>
          </div>
        </div>
      </>
    );
  }

  if (login) {
    return <Redirect to="home" /> 
  }
  return (
    <div
      style={{ marginTop: 100 }}
      className="ui middle aligned center aligned "
    >
      
      <div className="center" style={{ textAlign: "center" }}>
        <img src={snelImg} alt="" width="150" height="150" />
      </div>
      <h3
        className="ui middle  aligned center aligned grid"
        style={{ margin: 10 }}
      >
        SAE
      </h3>
      <div class="" style={{ margin: 10 }}>
        <form class="ui form inverted error" onSubmit={_submit}>
          <div class="field">
            <label>N° compteur</label>
            <input
              type="text"
              name="first-name"
              placeholder="12345678900000"
              // value={montant}
              onChange={(e) => {
                setNumCompteur(e.target.value);
                setNumCompteurErr("");
                
                validatorNumCompteur(e.target.value);
              }}
            />
            {NumCompteur != "" ? (
              <div style={{ margin: 0, color: "red" }}>
                <p>{NumCompteurErr}</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
                validatorPassword(e.target.value);
              }}
            />
            {PasswordErr != "" ? (
              <div style={{ margin: 0, color: "red" }}>
                <p>{PasswordErr}</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className="center"
            style={{ textAlign: "center", marginBottom: 5 }}
          >
            <button class=" ui  large red  button">Se connecter</button>
            {/* <button class=" ui  large secondary  button" type="reset">
              <a href="#/" style={{ color: "white" }}>
                Fermer
              </a>
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
