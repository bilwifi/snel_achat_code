import React from "react";

export default function TheHeader() {
  return (
    <div>
      <div class="ui three item menu" style={{backgroundColor:"black",color:"white"}}>
        <a class="item" href="#/home" style={{backgroundColor:"black",color:"white"}}>Consommation</a>
        <a class="item " href="#home/factures" style={{backgroundColor:"black",color:"white"}}>Mes payements</a>
        <a class="item " href="#/" style={{backgroundColor:"black",color:"white"}}>Déconnexion</a>
      </div>
    </div>
  );
}
