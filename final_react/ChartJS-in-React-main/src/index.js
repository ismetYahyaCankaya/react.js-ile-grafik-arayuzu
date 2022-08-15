import React from 'react'
import ReactDOM from 'react-dom'
import Veriler from './components/Transactions'

//verilerin component'ını index.html'de bulunan root divine atıyoruz,
//ayrıca verilere de BarChart,PieChart,LineChart component'larını atamıştık.
//yani sıralama yaparsak: index.js>veri.js>(BarChart,PieChart,LineChart)
ReactDOM.render(
  <React.StrictMode>
  <Veriler />
  </React.StrictMode>,
  document.getElementById('root')
)


