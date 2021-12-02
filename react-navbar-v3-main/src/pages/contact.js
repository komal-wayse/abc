import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap'
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
  constructor(props) {
    super(props);
    
  
    this.state = { deps: [],searchTerm :'',sortType:'asc'}
    this.searchTerm = this.search.bind(this);
  
  }
  

componentDidMount() {
  this.receivedData()
}
  refreshList() {
    fetch(process.env.REACT_APP_API + 'fintech')
      .then(response => response.json())
      .then(data => {
        this.setState({ deps: data });
        this.setState({ Percentage_change: data });
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
      this.setState({ sortType  });
   
     }
     
    render(){

      const { deps,sortType } = this.state;
      const sorted = deps.sort((a,b)=>{
        const isReversed = (sortType === 'asc')? 1 : -1;
      
        return isReversed * (a.Percentage_change-b.Relative_Volume)

      });

      
       return (
        <>

<div className= "container-fluid mt-5">
           <div className="main-heading">
             <h1 className="mb-5 text-center"> </h1>
           </div>
         
<div
       style={{ marginRight: '32.5%', marginTop: '60px', width: '36.8%'
          }}> 
    <Box color="white" bgcolor="#AEB6BF" p={1}>
   <h3 style={{ color:'black' }} >52WEEK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Button variant="link"  type="button"
 onClick={(e) => {
   e.preventDefault();
   window.location.href='/high'
   }}>
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
    <table className="per">
            <thead>
              <tr>
                <th scope="col">SYMBOL</th>&nbsp;
                
               <th scope="col">CLOSE</th>&nbsp;&nbsp;
              <th scope="col">52WEEKHIGH</th>&nbsp;&nbsp;&nbsp;
               <th scope="col">Away_52WeekHigh</th>
              </tr>
            </thead>
            <tbody>

            {this.state.deps.filter(dep =>{
                return Math.max(10)

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
          </div>
          <div>
        </div>
       

       

        </>
      )
    }
  }
  export default Home;
  

