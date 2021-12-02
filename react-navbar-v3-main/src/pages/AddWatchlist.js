import React,{Component} from 'react';
import { Modal,Button,Row,Col,Form } from 'react-bootstrap';

export class AddWatchlist extends Component{
    constructor(props){
        super(props);
        
       // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = { deps: [],searchTerm :''}
        this.searchTerm = this.search.bind(this);
}
handleSearch(event){
    event.preventDefault();
    fetch(process.env.REACT_APP_API+'watchlist',{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/Json'
        },
        
        body:JSON.stringify({
            //ID:null,
            SYMBOL:event.target.SYMBOL.value
        })
    })
    
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },

    (error)=>{
        alert('Failed');
    })
}
    search(e) {
      console.log(e.target.value)
      this.setState({searchTerm: e.target.value})
    } 
    
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'watchlist1',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/Json'
            },
            body:JSON.stringify({
                //ID:null,
                SYMBOL:event.target.SYMBOL.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return(
            <div className="container">
                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Add Watchlist</Modal.Title>
                        
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    
                                    <Form.Group controlId="SYMBOL">
                                        <Form.Label>SYMBOL</Form.Label>
                                        <Form.Control class="search-box" onChange={(e) => this.searchTerm(e)} type="text" name="SYMBOL" required
                                        placeholder="SYMBOL" /><br></br>
                                    </Form.Group>
                                    {this.state.deps.filter(dep =>{
                return dep.SYMBOL.toUpperCase().indexOf(this.state.searchTerm) > -1;

              })
              
              }
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Symbol
                                        </Button>
                                    </Form.Group>
                                </Form>
            
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                 </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
