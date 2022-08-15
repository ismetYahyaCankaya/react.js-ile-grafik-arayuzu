import React from 'react'
import { Pie } from 'react-chartjs-2'


const PieChart = (props) => {
  return (
    <div>
      <h2 style={{color: 'goldenrod'}}>Pasta Grafiği</h2> 
      <Pie
        data={{
          labels: props.sozelVeri,
          datasets: [
            {
              data: props.sayisalVeri, //veri.js'den (seçime göre) üretilen random sayı dizisini data değişkenine atadık.
              backgroundColor: [  //dilimlere arkaplan rengi verdik
                'rgba(255, 215, 0, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(240, 128, 128,  0.2)',
                'rgba(255, 69, 0, 0.2)',
                'rgba(144, 238, 144, 0.2)',
                'rgba(46, 139, 87,0.2)',
                'rgba(0, 255, 255, 0.2)',
                'rgba(176, 224, 230, 0.2)'
              ],
              borderColor: [  //Dilimler arası çizgiye renk verdik
                'rgba(255, 215, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(240, 128, 128,  1)',
                'rgba(255, 69, 0, 1)',
                'rgba(144, 238, 144, 1)',
                'rgba(46, 139, 87, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(176, 224, 230, 1)'
              ],
              borderWidth: 1, //dilimler arası çizgiye genişlik verdik
            },
          ],
        }}
        height={150} //grafiğin uzunluğunu belirliyoruz
        options={{
          maintainAspectRatio: false, //grafiği içeri sabitlemek için
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true, 
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 10, //aşağıdaki bölümün yazı boyutu
            },
          },
        }}
      />
      
    </div>
  )
}

export default PieChart;
