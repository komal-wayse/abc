import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import Box from '@material-ui/core/Box';

class momentum extends Component{

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'condition')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    
    render(){
        const {deps}=this.state;
        
        return(
            <div 
            style={{ marginRight: '32.5%', marginTop: '60px', width: '60%'
               }}> 
         <Box color="white" bgcolor="#AEB6BF" p={1} >
        <h4 align="center" style={{ color:'black' }} >Scannesr 2
        
                 </h4>
        </Box>
            <div >
                
                <div class="row">
  <div class="column">
    
    <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                    <tr>
                     
                        <th>Symbol</th>
                        <th>Volume</th>
                        <th>Per_chng_1D</th>
                        <th>Avg_Price_5days</th>
                        <th>TIMESTAMP1</th> 
                    </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.SYMBOL}>
                                <td>{dep.SYMBOL}</td>
                                <td>{dep.Volume}</td>
                                <td>{dep.Per_chng_1D.toFixed(3)}</td>
                                <td>{dep.Avg_Price_5days.toFixed(3)}</td>
                                <td>{dep.TIMESTAMP1}</td>
                                
                                </tr>)}
                    </tbody>

          </Table>
  </div>
 
  
</div>

</div>
</div>


        )
    }
}
export default momentum ;