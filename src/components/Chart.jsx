import React from "react";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default function Chart({data,percent}) {
  const [puissanceTotal,setPuissanceTotal] = React.useState(data.puissanceTotal);
  const [puissanceConsommee,setPuissanceConsommee] = React.useState(data.puissanceConsommee);
  const [handState,setHandState] = React.useState([]);
  React.useEffect(() => {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // create chart
    const chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(82);

    /**
     * Normal axis
     */

    const axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 10;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 40;
    axis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    /**
     * Axis for ranges
     */

    const colorSet = new am4core.ColorSet();

    const axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.fontSize = 15;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    const range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);

    const range1 = axis2.axisRanges.create();
    range1.value = 50;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(2);

    /**
     * Label
     */

    const label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 45;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = "50%";

    /**
     * Hand
     */
    const hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(20);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = 50;
  
    hand.events.on("propertychanged", function (ev) {
      range0.endValue = ev.target.value;
      range1.value = ev.target.value;
      label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
      axis2.invalidate();
    });
    // let purcent = (puissanceTotal - puissanceConsommee) * 100/puissanceTotal;

    let animation = new am4core.Animation(
      hand,
      {
        property: "value",
        to: percent,
      },
      1000,
      am4core.ease.cubicOut
    ).start();
    
   
  }, [percent]);

  const stat = ()=>{
    // let purcent = (puissanceTotal - puissanceConsommee) * 100/puissanceTotal;
    // console.log(handState);
    // let animation = new am4core.Animation(
    //   handState,
    //   {
    //     property: "value",
    //     to: purcent,
    //   },
    //   1000,
    //   am4core.ease.cubicOut).start();
    // setPuissanceConsommee(puissanceConsommee + 1);

  }
  // setInterval(() => {
  //   stat()
  // }, 2000);


  return (
    <div>
      <div
        id="chartdiv"
        style={{
          width: "100%",
          height: "250px",
        }}
      ></div>
    </div>
  );
}
