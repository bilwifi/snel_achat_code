import React, { useState } from "react";
import "../assets/scss/footer.scss";
export default function AchatFormulaire() {
  const [montant, setMontant] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [montantErr, setMontantErr] = useState("");
  const [telephoneErr, setTelephoneErr] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const _submit = (e) => {
    e.preventDefault();
    if (validatorMontant(montant) && validatorphonenumber(telephone)) {
      setIsSubmit(true);
    }
  };

  const validatorphonenumber = (inputtxt) => {
    if (inputtxt == "") {
      setTelephoneErr("Veillez entrer un numeron");
      return false;
    }
    const phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      setTelephoneErr("");
      return true;
    } else {
      setTelephoneErr("numeron invalide");
      return false;
    }
  };

  const validatorMontant = (montant) => {
    if (montant == "") {
      setMontantErr("Veillez entrer un montant");
      return false;
    }
    if (montant < 2000) {
      setMontantErr("Le montant minimum est 2000Fc");
      return false;
    }

    setMontantErr("");
    return true;
  };

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

  if (isSubmit) {
    return (
      <>
        <h3
          className="ui middle  aligned center aligned grid"
          style={{ margin: 10, marginTop: 30 }}
        >
          Achat Forfait
        </h3>
        <div
          class="ui fluid large info message"
          style={{ margin: 10, backgroundColor: "black" }}
        >
          <i class="close icon"></i>
          <div
            class="header"
            style={{ textAlign: "center", marginBottom: 5, color: "white" }}
          >
            Achat effectué avec succès
          </div>
          <div class="content" style={{ backgroundColor: "black" }}>
            <table
              class="ui  table unstackable inverted"
              style={{ backgroundColor: "transparent" }}
            >
              <tbody>
                <tr>
                  <td>Code</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>Montant</td>
                  <td>3500 fc</td>
                </tr>
                <tr>
                  <td>Puissance</td>
                  <td>35Kwh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button class=" ui  large secondary fluide button" type="reset">
            <a href="#/" style={{ color: "white" }}>
              Fermer
            </a>
          </button>
        </div>
      </>
    );
  }

  return (
    <div style={{marginTop:50}} className="ui middle aligned center aligned grid">
      <h3
        className="ui middle  aligned center aligned grid"
        style={{ margin: 10 }}
      >
        Achat Forfait
      </h3>
      <div class="ui middle aligned center aligned grid" style={{ margin: 10 }}>
        <form class="ui form inverted error" onSubmit={_submit}>
          <div class="field">
            <label>Montant(FC)</label>
            <input
              type="number"
              name="first-name"
              placeholder="Montant en FC"
              // value={montant}
              onChange={(e) => {
                setMontant(e.target.value);
                setMontantErr("");
                validatorMontant(e.target.value);
              }}
            />
            {montantErr != "" ? (
              <div style={{ margin: 0, color: "red" }}>
                <p>{montantErr}</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class="field">
            <label>Téléphone</label>
            <input
              type="text"
              name="first-name"
              placeholder="0818855044"
              onChange={(e) => {
                setTelephone(e.target.value);
                setMontantErr("");
                validatorphonenumber(e.target.value);
              }}
            />
            {telephoneErr != "" ? (
              <div style={{ margin: 0, color: "red" }}>
                <p>{telephoneErr}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="field">
            <label>Moyen de payement</label>
          </div>
          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" checked="checked" />
                <label>VODACOM MPESA</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>AIRTEL MONEY</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>ORANGE MONEY</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>AFRICELL MONEY</label>
              </div>
            </div>
          </div>
          <div
            className="center"
            style={{ textAlign: "center", marginBottom: 5 }}
          >
            <button class=" ui  large teal  button">Valider</button>
            <button class=" ui  large secondary  button" type="reset">
              <a href="#/" style={{ color: "white" }}>
                Fermer
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
