import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap'

class high extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [],searchTerm :'',sortType:'asc'}
    this.searchTerm = this.search.bind(this);
    
  }
  componentDidMount() {
    this.receivedData()
  }
  refreshList() {
    fetch(process.env.REACT_APP_API +'fintech')
      .then(response => response.json())
      .then(data => {
        this.setState({ deps: data });
        this.setState({ WeekHigh: data });

      });
    }
    search(e) {
      console.log(e.target.value)
      this.setState({searchTerm: e.target.value})
      
    }
    componentDidMount(){
      this.refreshList();
    }
    componentDidUpdate(){
      this.refreshList();
    }
    onSort = sortType =>{
      this.setState({ sortType});
   
     }
     render(){
      
      const { deps,sortType } = this.state;
      const sorted = deps.sort((a,b)=>{
        const isReversed = (sortType === 'asc')? 1 : -1;
      
        return isReversed * (a.Avg_Price_5days-b.Relative_Volume)

      
      });
     
  
      return (
        <>
    <table  className='tb' border='1' >
            <thead>
                
               
                <th>SYMBOL</th>&nbsp;&nbsp;&nbsp;&nbsp;
                <th>CLOSE1</th>&nbsp;&nbsp;&nbsp;&nbsp;
                <th>WEEKHIGH</th>
                
                

                
            </thead>
           
            <tbody>
          
              {this.state.deps.filter(dep =>{
                return dep.SYMBOL.toLowerCase().indexOf(this.state.searchTerm) > -1;

              }).map(dep=>
                <tr key={dep.SyllabusId}>
                  <td align='center'>{dep.SYMBOL}</td>
                 <td align='center'>{dep.CLOSE1}</td>&nbsp;&nbsp;
                  <td align='center'>{dep.WEEKHIGH}</td>
                 
                 
                </tr>)}
            </tbody>
          </table>
<br></br><br></br>

      
        </>
      )
    }
  }
  export default high;
  

