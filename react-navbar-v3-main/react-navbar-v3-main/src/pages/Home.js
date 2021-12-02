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
     

        </>
      )
    }
  }
  export default Home;
  

