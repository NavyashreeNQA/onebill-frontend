import React from "react";
import { Form, Button} from 'react-bootstrap';
import './Product.css'
import axios from 'axios';

function AddProduct(props){
    const handleSubmitClick = (e) => {
        props.history.push('/product'); 
        e.preventDefault();
        
        let object = {};
        let formData=new FormData(e.target);
        formData.forEach((value,key)=>{
            object[key] = value;
            
        }
        );
        console.log(object);
        let json = JSON.stringify(object); 
        console.log(json); 
  
  
        const config = {     
            headers: { 'content-type' : "application/json" }
        }
  
        axios.post('http://localhost:8080/billingapp/product/service', json,config).then((response)=>{
             console.log(response);
           })   
           .catch((error)=>{
             console.log(error);
          });
        }
        return (
            
            <div className="col-md-4 offset-4 card card-body mt-5">
                
                
                <Form onSubmit={handleSubmitClick} >
                    <h3>Add Products</h3>

                    <div className="form-group">
                        <label> Product Type</label>
                        <input type="text" className="form-control" name="serviceType"  placeholder="enter product type"  required/>
                    </div>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="serviceName" placeholder="enter product name" />
                    </div>

                    <div className="form-group">
                        <label>company Name</label>
                        <input type="number" className="form-control" name="companyName" placeholder="Enter company name"  required/>
                    </div>  
                   <br></br>
                    
                <div>
                    <Button variant="outline-primary" type="submit" >Add </Button>{' '}
                     <Button variant="outline-danger" className="offset-4 " type= "reset">cancel</Button>{' '}
                    </div>

                </Form>
            </div>
     
        );
    }

export default AddProduct;