import React from 'react';
import PieChart from './PieChart'; //Componentlar'ı (Bar,Line,Pie) alabilmek için import işlemleri yaptık.
import LineChart from './LineChart'; 
import BarChart  from './BarChart'; 

var numbers=[];
var data=[];
class Veri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''  //value nesnesini ilk kullanıma hazırladık.
    };
    this.handleChange = this.handleChange.bind(this); //kendi oluşturduğumuz class metodunun component ya da elemente ait
    //nesneye oluşmasını sağlıyoruz.

  } 
  //onchange üzerinden sonra, ilgili option elementinin value'si ne ise, artık value değeri o oldu.  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  
 
  render() {
    if(this.state.value==="ay") //eğer state value ay'a eşit ise data dizimizin elemanı aylar oluyor.
    {
      data=["Ocak","Subat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
      
    }  
    else if(this.state.value==="gun") //eğer state value gun'e eşit ise data dizimizin elemanı gunler oluyor.
    {
      data=["Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]; 
    }
    else //'seçim yapın' bölümünde grafiklerin önceki özelliklere göre şekillenmemesi için data dizisinin içini boşaltıyoruz.
    {
      data=[""];
    }
    numbers.length=0; //dizinin her seçimden önce kendini sıfırlaması için(önceki seçimlerden birikme olmaması için) uzunluğunu 0'a eşitliyoruz.
    for(var a=0; a<data.length; a++) //data.lenght kullandık çünkü gün ise her güne karşılık 7, ay ise
    {                               //her aya karşılık 12 sayı üretmeliyiz.
      var number= Math.floor(Math.random()*1000); //random sayı üretiliyor
      numbers.push(number); //sayilar dizisine üretilen elemanlar ekleniyor.
    }

    //54,55,56 Component'lara, props aktarımı için properties (sozelVeri,sayisalVeri) verdik.
    //properties için karşılık verdiğimiz değişkenler ise(data,sayilar) state value'ye (set state işlemleri) göre şekilleniyor.
    //select üzerinde bir değişiklik olunca handleChange'i çalıştırdık
    return (
      <div>
        <p style={{display: 'inline'}}>Zaman Aralığı: </p>
        <select onChange={this.handleChange}>
          <option value="" selected="selected">Seçim Yapın</option>
          <option value="ay">Ay</option>
          <option value="gun">Gün</option>
        </select>
            <PieChart sozelVeri={data} sayisalVeri={numbers}/>  
            <LineChart sozelVeri={data} sayisalVeri={numbers}/>
            <BarChart sozelVeri={data} sayisalVeri={numbers}/>
      </div>
      
    );
    
  }
}

export default Veri;