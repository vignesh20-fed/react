import React, { Component } from 'react'

export class Child extends Component {
  constructor(){
    super()
    this.state={
      mobiles : [
        {
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: true},
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: false},
        {
        id:"003",
        name : "Redmi 10",
        price : 56999,
        isPurchased : true},
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : false},
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased : true},
        {
        id:"006",
        name : "Poco M4",
        price : 13999,
        isPurchased : true}
    ],

    }

  }
    example()
   {
     let lowhigh=this.state.mobiles.sort((a,b)=>
     {
         return a.price-b.price;
          
     })
     this.setState({mobiles:lowhigh}) 
   }
   examplehl()
   {
     let highlow=this.state.mobiles.sort((a,b)=>
     {
         return b.price-a.price;
          
     })
     this.setState({mobiles:highlow}) 
   }
   nameas()
   {
     let nameasscending= this.state.mobiles.sort((a,b) =>
     {
       let aname= a.name.toLowerCase()
       let bname=b.name.toLowerCase()
      if(aname>bname)
      {
        return 1
      }
      else if(aname<bname)
      {
        return -1
      }
      else 
      {
        return 0;
      }
     }
     )
     this.setState({mobile:nameasscending})
   }
   nameds()
   {
     let namesdes= this.state.mobiles.sort((a,b) =>
     {
       let aname= a.name.toLowerCase()
       let bname=b.name.toLowerCase()
      if(aname<bname)
      {
        return 1
      }
      else if(aname>bname)
      {
        return -1
      }
      else 
      {
        return 0;
      }
     }
     )
     this.setState({mobile:namesdes})
   }
   
  render() {
    return (
      <div>
        {this.state.mobiles.map(
          (names,index) =>
          {
           return <h2 key={index}>{names.name}-{names.price} </h2>
            
           
          }
        )}
          <button onClick={()=> this.nameas()}>assending</button>
          <button onClick={()=> this.nameds()}>desending</button>
          <button onClick={()=> this.example()}> Low-high</button>
          <button onClick={()=> this.examplehl()}> high-low</button>
        
      </div>
    )
  }
}

export default Child