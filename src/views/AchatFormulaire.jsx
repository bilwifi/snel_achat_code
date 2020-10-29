import React from "react";
import "../assets/scss/footer.scss";
export default function AchatFormulaire() {
  return (
    <div>
      <h3
        className="ui middle  aligned center aligned grid"
        style={{ margin: 10 }}
      >
        Achat Forfait
      </h3>
      <div class="ui middle aligned center aligned grid" style={{ margin: 10 }}>
        <form class="ui form ">
          <div class="field">
            <label>Montant(FC)</label>
            <input
              type="number"
              name="first-name"
              placeholder="Montant en FC"
            />
          </div>
          <div class="field">
            <label>Téléphone</label>
            <input
              type="text"
              name="first-name"
              placeholder="+243 81 88 55 044"
            />
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
          <div className="center" style={{ textAlign: "center", marginBottom: 5 }}>
          <button class=" ui  large teal submit button" type="submit">
            Valider
          </button>
            <button class=" ui  large secondary submit button" type="reset">
            <a href="#/" style={{color:"white"}}>
                Fermer
            </a>
            </button>

          </div>
        </form>
      </div>

      <div class="ui fluid large info message">
        <i class="close icon"></i>
        <div class="header" style={{ textAlign: "center", marginBottom: 5 }}>
          Achat effectué avec succès !!!
        </div>
        <div class="content">
          <table
            class="ui  table unstackable"
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

      <div class="ui warning message">
        <i class="close icon"></i>
        <div class="header">Une erreur est survenue</div>
        Veuillez ressayer plutard !!!
      </div>

      <div class="app-bar-bottom" >
      <div class="btnplus" >
        <a class="btn__content" href="#/">
          <i class="material-icons">clear</i>
        </a>
      </div>
    </div>
    </div>
  );
}
