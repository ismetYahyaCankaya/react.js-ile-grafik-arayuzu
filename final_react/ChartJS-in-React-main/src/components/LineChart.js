import React from "react";
import { Line } from "react-chartjs-2";


const LineChart = (props) => {
  return (
    <div>
      <h2 style={{color: 'goldenrod'}}>Çizgi Grafiği</h2>
      <Line
  data = {{
    labels: props.sozelVeri, //veri.js'den (seçime göre) üretilen 'data' dizisini labels'a (grafiğin alt bölümüne) atadık.
    datasets: [
      {
        label: "Çizgi Grafiği", //grafiğin belirtecine isim verdik
        backgroundColor: "gold", //grafiğe renk verdik
        borderColor: "goldenrod", //grafiğin uç sınırlarına(border'lara) renk verdik
        data: props.sayisalVeri, //veri.js'den (seçime göre) üretilen random sayı dizisini data değişkenine atadık.
      },
    ],
  }}
  />
   </div>
  );
};

export default LineChart;