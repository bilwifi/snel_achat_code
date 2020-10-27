import React from "react";

export default function FactureList() {
  return (
    <div className="ui content">
      <div class="ui  fluid centered card">
        <div class="content">
          <table class="ui red table unstackable">
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
        <div class="extra content">
          <div class="right floated author">Acheté il y a 3jrs</div>
        </div>
      </div>
    </div>
  );
}
