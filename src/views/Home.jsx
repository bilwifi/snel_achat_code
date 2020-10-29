import React from "react";
import Chart from "../components/Chart";
import Card from "../components/Card";
const data = {
  puissanceTotal: 100,
  puissanceConsommee: 43,
};

const calculStat = (data) => {
  let puissR = data.puissanceTotal - data.puissanceConsommee;
  let percent = (puissR * 100) / data.puissanceTotal;
  if (puissR < 0) puissR = 0;
  if (data.puissanceConsommee >= data.puissanceTotal)
    data.puissanceConsommee = data.puissanceTotal;
  return {
    puissR,
    percent,
    puissanceTotal: data.puissanceTotal,
    puissanceConsommee: data.puissanceConsommee,
  };
};
export default function Home() {
  const [dataStat, setDataStat] = React.useState(calculStat(data));
  const [puissanceConsommee, setPuissanceConsommee] = React.useState(
    dataStat.puissanceConsommee
  );
  const [percent, setPercent] = React.useState(dataStat.percent);
  React.useEffect(() => {
    setDataStat(calculStat(data));
  }, [puissanceConsommee]);

  setInterval(() => {
    // setPuissanceConsommee(puissanceConsommee +1)
    if (data.puissanceConsommee < data.puissanceTotal) {
      let p = data.puissanceConsommee++;
      setPuissanceConsommee(p);
    }
  }, 10000);

  console.log(dataStat);
  return (
    <div>
        
      {dataStat.puissR <= 0 ? (
        <div className="ui icon negative message" style={{marginBottom:0}}>
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">Votre forfait est épuisé</div>
            <p>Veillez recharger votre compte</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <Chart data={dataStat} percent={dataStat.percent}/>
      <Card data={dataStat} />
    </div>
  );
}
