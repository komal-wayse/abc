import React, { useEffect, useState } from 'react'

const Momentum = () => {
  const [data, setData] = useState([]);
    const getMomentumData = async () => {
       const res = await fetch('http://localhost:62141/api/momentum');
       const actualData = await res.json();
       console.log(actualData);
       setData(actualData);
   }

       useEffect(() => {
      getMomentumData();
   
   }, []);

   return (
       <>
          <div className= "container-fluid mt-5">
          <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
           <div className="main-heading">
             <h1 className="mb-5 text-center"> Momentum</h1>
           </div>
        <div className="table-responsive">
            <table class="table table-hover">
               <thead className="thead-dark">
                <tr>
                   <th> Symbol</th>
                   <th> Close Price</th>
                   <th> % Change</th>
                   <th> Relative Volume</th>
                </tr>
              </thead>
             <tbody>

                { 
                   data.map((curElem,ID) => {
                      return (
                      <tr key={ID}>
                      <th> {curElem.SYMBOL} </th>
                      <td> {curElem.CLOSE1.toFixed(3)} </td>
                      <td> {curElem.Per_chng_1D.toFixed(3)} </td>
                      <td> {curElem.Relative_Volume.toFixed(3)} </td>   
                          </tr>
                        )
                  })
                  }
               </tbody>
            </table>
        </div>
      </div>
   </>
   )
}
export default Momentum