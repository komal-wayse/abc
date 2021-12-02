import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap';
import Box from '@material-ui/core/Box';

class low extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [],searchTerm :'',sortType:'max'}
    this.searchTerm = this.search.bind(this);
    
  }
  refreshList() {
    fetch(process.env.REACT_APP_API + 'weeklow')
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
      
        return isReversed * (a.WEEKLOW-b.CLOSE1)

      
      });
     
  
      return (
        <>
        <div 
       
       style={{ marginRight: '32.5%', marginTop: '60px', width: '29.6%'
          }}> 
    <Box color="white" bgcolor="#AEB6BF" p={1}>
   <h3 style={{ color:'black' }} >52WEEK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button variant="link" 
 type="button"
 onClick={(e) => {
   e.preventDefault();
   window.location.href='/high'
   }}
>
           HIGH
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Button variant="link"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/low'
      }}
> LOW</Button>
            </h3>
   </Box>
     
    <table  className='tb' border='1' >
            <thead>
                
               
            <th scope="col">SYMBOL</th>&nbsp;
                
                <th scope="col">CLOSE</th>&nbsp;&nbsp;
                <th scope="col">52WEEKLOW</th>&nbsp;&nbsp;&nbsp;
                <th scope="col">Away_52WeekLow</th>
                

                
            </thead>
           
            <tbody>
          
              {this.state.deps.filter(dep =>{
                return dep.SYMBOL.toLowerCase().indexOf(this.state.searchTerm) > -1;

              }).map(dep=>
                <tr key={dep.SyllabusId}>
                 <td align='left'style={{ color:'#6495ED' }}>{dep.SYMBOL}</td>&nbsp;
                  
                  
                  <td align='left'>{dep.CLOSE1}</td>&nbsp;
                  <td align='center'>{dep.WEEKLOW}</td>&nbsp;
                  <td align='center'>{dep.Away_52WeekLow.toFixed(3)}</td>
                 
                </tr>)}
            </tbody>
          </table>


</div>
<div className='bo'
       

       style={{ marginRight: '32.5%', width: '29.6%',borderColor:'black'
          }}>  
    <Box color="black" bgcolor="white" p={1} border= "1px solid black">
      <h5 align='center'>Data not found </h5>
   

   </Box>
   
   </div> 
        </>
      )
    }
  }
  export default low;
  

