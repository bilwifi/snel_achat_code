import React, { useEffect, useState } from "react";
import axios from "axios";
export default function FactureList() {
  const [factures, setFactures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4500/api/factures")
      .then((res) => {
        setFactures(res.data);
        setErr(false);
        setLoading(false);
      })
      .catch((e) => {
        setErr(true);
        setLoading(false);
        console.log(e);
      });
  }, []);
  return (
    <div className="ui content" style={{marginBottom:60}}>
      <h3 style={{textAlign:"center",margin:20}}>Mes factures</h3>
      {factures.map((facture) => {
        return (
          <div>
            <div
              class="ui  fluid centered  inverted"
              style={{ border: "2px solid gray", margin: 10 }}
            >
              <div class="content" key={facture.code}>
                <table class="ui  table unstackable inverted">
                  <tbody>
                    <tr>
                      <td>Code</td>
                      <td>{facture.code}</td>
                    </tr>
                    <tr>
                      <td>Montant</td>
                      <td>{facture.montant} fc</td>
                    </tr>
                    <tr>
                      <td>Puissance</td>
                      <td>{facture.puissance}Kwh</td>
                    </tr>
                    <tr>
                      <td>Date</td>
                      <td>{facture.created_at}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
          </div>
        );
      })}
      {/* <div class="extra content">
          <div class="right floated author">Acheté il y a 3jrs</div>
        </div> */}
    </div>
  );
}
