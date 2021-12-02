import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap';
import Box from '@material-ui/core/Box';

class high extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [],searchTerm :'',sortType:'max'}
    this.searchTerm = this.search.bind(this);
    
  }
  refreshList() {
    fetch(process.env.REACT_APP_API + 'fintech')
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
       

       style={{ marginRight: '32.5%', marginTop: '60px', width: '36.2%'
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
           >HIGH
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
                <th scope="col">52WEEKHIGH</th>&nbsp;&nbsp;&nbsp;
                <th scope="col">Away_52WeekHigh</th>
                

                
            </thead>
           
            <tbody>
          
              {this.state.deps.filter(dep =>{
                return dep.SYMBOL.toLowerCase().indexOf(this.state.searchTerm) > -1;

              }).map(dep=>
                <tr key={dep.SyllabusId}>
                 <td align='left'style={{ color:'#6495ED' }}>{dep.SYMBOL}</td>&nbsp;
                  
                  
                  <td align='left'>{dep.CLOSE1}</td>&nbsp;
                  <td align='center'>{dep.WEEKHIGH}</td>&nbsp;
                  <td align='center'>{dep.Away_52WeekHigh.toFixed(3)}</td>
                 
                </tr>)}
            </tbody>
          </table>


</div>

        </>
      )
    }
  }
  export default high;
  

