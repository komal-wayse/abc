import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddWatchlist} from './AddWatchlist';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


import { FaTrash , FaPlus, } from 'react-icons/fa';

 
class about extends Component{
  constructor(props){
    super(props);
    this.state={deps:[], addModalShow:false}
  }
  refreshList(){
    fetch('http://localhost:62141/api/watchlist1')
    .then(response=>response.json())
    .then(data=>{
      this.setState({deps:data});
      
    });
  }

componentDidMount(){
    this.refreshList();
  }
  
  
  deleteDep(W1_ID){
    if(window.confirm('Are you sure')){
      fetch(process.env.REACT_APP_API+'watchlist1/'+W1_ID,{
        method:'DELETE',
        header:{'Accept':'application/json',
      'Content-Type':'application/json'
      }
      })
    }
  }
  
  render(){
    const{deps}=this.state;
    let addModalClose=()=>this.setState({addModalShow:false});
    return(
      <div className= "container-fluid mt-5">
           <div className="main-heading">
             <h1 className="mb-5 text-center"> </h1>
           </div>
      <div>
       <h4 className="headline">watchlist1 <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaPlus className="icon" variant ='primary' size="30px" color="blue" 
          onClick={()=>this.setState({addModalShow:true})}>
            </FaPlus>
            <Button variant="link"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='/Text'
      }}
> Search</Button>

            <AddWatchlist show={this.state.addModalShow}
            onHide={addModalClose}/>
            </h4>
            <div className= "scrollit">
            
        <Table style={{width:'30px'}}>
        
          <thead>
            <th>SYMBOL</th>
            <th>Per_Change</th>
            <th>CLOSE</th>
            <tr>
              
            </tr>
          </thead>
          <tbody>
            {deps.map(dep=>
              <tr key={dep.ID}>
               
                  <td>{dep.SYMBOL}</td>
                <td>
                  {(()=>{
                    if(dep.Per_chng_1D>0){
                      return(
                        <div style={{color:'green'}}>{dep.Per_chng_1D.toFixed(3)}</div>
                      )
                    }
                    else{
                      return(
                        <div style={{color:'red'}}>{dep.Per_chng_1D.toFixed(3)}</div>
                      )
                    }
                  })()}
                </td>
                
                <td>
                  {(()=>{
                    if(dep.Per_chng_1D>0){
                      return(
                        <div>{dep.CLOSE1}</div>
                      )
                    }
                    else{
                      return(
                        <div>{dep.CLOSE1}</div>
                      )
                    }
                  })()}
                </td>
                <td  align='left'><a href= {dep.link} visible ="true" > <TrendingUpIcon style={{ color:'black' }}></TrendingUpIcon></a>
                  </td>
                
                <td>
<FaTrash
        
        onClick = { ()=>this.deleteDep(dep.W1_ID) }>
        </FaTrash>
        </td>
        </tr>)}
          </tbody>
          </Table>
          </div>
          </div>
         
          <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/about'
            }}
          >W1</Button>&nbsp;&nbsp;
          <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/watchlist1'
            }}
          >W2</Button>&nbsp;&nbsp;
          <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/watchlist2'
            }}
          >W3</Button>&nbsp;&nbsp;
          <Button
           type="button"
           onClick={(e) => {
             e.preventDefault();
             window.location.href='/watchlist3'
             }}
          >W4</Button>&nbsp;&nbsp;
          <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='/watchlist4'
            }}
          >W5</Button>&nbsp;

      </div>
      
    )
  }
}

export default about;