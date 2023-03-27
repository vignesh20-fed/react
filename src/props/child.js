import React from 'react'

function Child(props) {
    const a=props.Books;
    console.log(a);
  return (
    <div>
        {a.map((value,index) => {
          return(
            <div key={index}>
              <h1>{value.name}<span>{value.year}</span></h1>
              <button onClick={() => props.result(value.year) }>clickme</button>
            </div>
          )
        })}
    </div>
  )
}

export default Child;