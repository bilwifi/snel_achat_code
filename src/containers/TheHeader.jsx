import React from "react";

export default function TheHeader() {
  return (
    <div>
      <div class="ui three item menu">
        <a class="item" href="#">Acceuil</a>
        <a class="item" href="#stat">Consommation</a>
        <a class="item active" href="#factures">Mes payements</a>
      </div>
    </div>
  );
}
