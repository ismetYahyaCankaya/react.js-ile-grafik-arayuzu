import React from "react";
import { Bar } from "react-chartjs-2";


const BarChart = (props) => {
  return(
    <div>
      <h2 style={{color: 'goldenrod'}}>Bar Grafiği</h2>
  <Bar data = {{
    labels: props.sozelVeri, ///veri.js'den (seçime göre) üretilen 'data' dizisini labels'a (grafiğin alt bölümüne) atadık.
    datasets: [
      {
        label: "Bar Grafiği", //grafiğin belirtecine isim verdik
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

export default BarChart;