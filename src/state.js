import React, { useState } from 'react'


const  mobiles = [{
    id: "001",
    name: "oneplus11",
    price: 56999,
    isPurchased: true
  },
  {
    id: "002",
    name: "Vivo Y100",
    price: 24999,
    isPurchased: false
  },
  {
    id: "003",
    name: "Redmi 10",
    price: 56999,
    isPurchased: true
  },
  {
    id: "004",
    name: "iphone 13",
    price: 62990,
    isPurchased: false
  },
  {
    id: "005",
    name: "Nokia",
    price: 12000,
    isPurchased: true
  },
  {
    id: "006",
    name: "Poco M4",
    price: 13999,
    isPurchased: true
  }]

 
const State = () => {  

const [state, myFunc]=useState(mobiles);

let mob=mobiles;
    let ascending = [...mob].sort((x, y) => {
        let first = x.name.toLowerCase();
        let second = y.name.toLowerCase();

        if (first < second) {
            return -1;
        }
        else if (first > second) {
            return 1;
        }
    })

    let descending=[...ascending].reverse();

    let low=[...mob].sort((x,y) => {
      return x.price - y.price;
    })

    let high=[...low].reverse();

    return (
      <div>
        <button onClick={() => myFunc(ascending)}>ascending</button>
        <button onClick={() => myFunc(descending)}>descending</button>
        <button onClick={() => myFunc(low)}>Low to High</button>
        <button onClick={() => myFunc(high)}>High to Low</button>
        {state.map((e,i) => <h2 key={i}>{e.name} : {e.price}</h2>)}
      </div>
    )
}


  


export default State