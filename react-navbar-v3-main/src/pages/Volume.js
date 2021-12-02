import React, { Component,onSort } from 'react';
import { Button, Table } from 'react-bootstrap'
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.css';


class Volume extends Component {
  constructor(props) {
    super(props);
    
  
    this.state = { deps: [],searchTerm :'',sortType:'asc'}
    this.searchTerm = this.search.bind(this);
  
  }
  

componentDidMount() {
  this.receivedData()
}
  refreshList() {
    fetch(process.env.REACT_APP_API + 'active')
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
<div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
           <div className="main-heading">
             <h1 className="mb-5 text-center"> </h1>
           </div>
         
<div
       style={{ marginRight: '32.5%', marginTop: '60px', width: '26%'
          }}> 
    <Box color="white" bgcolor="#AEB6BF" p={1}>
   <h5 style={{ color:'black' }} >MOST ACTIVE&nbsp;&nbsp;&nbsp;&nbsp;
   
   <Button variant="link" type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/value'
      }}>
 
           Value
            </Button>&nbsp;&nbsp;&nbsp;
             <Button variant="link"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/Volume'
      }}
> Volume</Button>
            </h5>
            </Box>
            <Table style={{width:'40px'}}>
            <thead>
            <th>SYMBOL</th>
      <th>Volume</th>
      <th>C.M.P</th>
      

            <tr>
              
            </tr>
          </thead>
            <tbody>

            {this.state.deps.filter(dep =>{
                return Math.max(10)

              }).map(dep=>
                <tr key={dep.SyllabusId}>
                  <td align='left'style={{ color:'#6495ED' }}>{dep.SYMBOL}</td>
                  
                  
                 <td align='left'>{dep.Volume}</td>
                 <td align='center'>{dep.CLOSE1}</td>
                 

                </tr>)}
            </tbody>
          </Table>
          </div>
          </div>
          <div>
        </div>
       

       

        </>
      )
    }
  }
  export default Volume;
  

