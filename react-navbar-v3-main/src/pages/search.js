import React, { Component,onSort } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [],searchTerm :'',sortType:'asc'}
    this.searchTerm = this.search.bind(this);
    
   
  }
  refreshList() {
    fetch(process.env.REACT_APP_API + 'watchlist')
      .then(response => response.json())
      .then(data => {
        this.setState({ deps: data });
        
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
   
    render(){

      const { deps,sortType } = this.state;
     

     
      const sorted = deps.sort((a,b)=>{
    const isReversed = (sortType === 'asc')? 1 : -1;
   
    return isReversed * (a.Away_From_52WeekHigh-b.Away_From_52WeekHigh)
   
   
      });

 
      return (
        <>
        <div className='ab'>
                <h4 ></h4>
                </div>
                <div className='ab1'>
                <input class="search-box" onChange={(e) => this.searchTerm(e)}   type="text"></input></div>
 
 <br></br>
  
          <table  border='1'>
          <thead>
          
            </thead>
            <tbody>

              {this.state.deps.filter(dep =>{
                return dep.SYMBOL.toUpperCase().indexOf(this.state.searchTerm) > -1;

              }).map(dep=>
                <tr key={dep.SyllabusId}>
                  <td>{dep.SYMBOL}</td>
                 <td>{dep.CLOSE1}</td>
                  
                  
                </tr>)}
            </tbody>
          </table>


        
        </>
      )
    }
  }
  export default Text;

 

