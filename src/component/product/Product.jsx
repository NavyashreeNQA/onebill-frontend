import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';
import './Product.css';
import '../plan/Plan.css';
import axios from 'axios';
 

function Product() {
    return (
    <Router>
      <div className="middle">
        <div className="text-center middle  bg-dark pb-2">
          <h1 className="text-light user"> Welcome to Billing App</h1>
          
        </div><p></p>
      </div>
       
       <div> 
        <Button variant="primary" size="lg" className="mr-5" href="./product" active>
          Add Product</Button>
          <Button variant="primary" size="lg" className="mr-5" href="./UpdateProduct" active>
          Update Product</Button><p></p>
          <div className="search">
         <Form inline >
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark" id='Q' type="submit">Search</Button>
      </Form> 
      </div>
         
      </div>
    </Router>)
}

export default Product;