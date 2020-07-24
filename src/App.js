import React from 'react';
import './App.css';
import Component from './components/HistoryCard';

function App() {

  let komponen = [
  {
    image: 'https://www.resepkuerenyah.com/wp-content/uploads/2020/05/Resep-Ketoprak.jpg',
    restaurantName: 'Ketoprak Pak Muktar',
    location: 'Tanjung Duren',
    status: 'Makanan sudah diantar',
    date: '24 Juli 2020'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2012/12/18/18/02/nasi-goreng-70674_960_720.jpg',
    restaurantName: 'Nasi Goreng',
    location: 'Cipete',
    status: 'Makanan sudah diantar',
    date: '24 Juli 2020'
  },
  {
    image: 'https://scontent.fbdj4-1.fna.fbcdn.net/v/t1.0-9/18425288_1790636711158821_8199563425461409550_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=bH-ZJa_a-_MAX-LP2OW&_nc_ht=scontent.fbdj4-1.fna&oh=beb5f0847cb2cceb425f9f569d0f4625&oe=5F40BE4F',
    restaurantName: 'Starbucks Coffee',
    location: 'Rawamangun',
    status: 'Makanan sedang diantar',
    date: '24 Juli 2020'
  } 
]
  return (
    <div className="App">
      <h1 className ="Title">Makanan Kamu Lagi Dimana Ya?</h1>
      <Component card={komponen}/>
      <div />
    </div>
  );
}

export default App;
