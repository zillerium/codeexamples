import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {CartContext} from './CartContext';
import {Container, Table, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {AssetShowPage} from './pages/AssetShowPage';
import {ArrowRight,Search} from 'react-bootstrap-icons';

// import {productsArray} from '../productsStore';
//import ProductCard from '../components/ProductCard';
  //                    {productsArray.map((product, idx) => (
    //                       <ProductCard product={product} />

const Welcome =  () => {

//	let res = await searchDB(props.query);
  //      console.log(res.data);
	return  (
		 <Container className="mt-5">
<Row>
<Col>
          <h1 className="text-center">Welcome to Doramo</h1>
          <p className="lead text-center">
            Use this website to add assets to the blockchain.
          </p>
		 <div className="d-flex justify-content-center mt-5">
            <img src="/houses.jpg" alt="houses" className="img-fluid rounded"/>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <ul className="list-group">
              <li className="list-group-item">Add Asset</li>
              <li className="list-group-item">List Asset</li>
              <li className="list-group-item">
                Click on the link to see the page
              </li>
            </ul>
          </div>
        </Col>
</Row>

    </Container>
	)
}


export default Welcome;


