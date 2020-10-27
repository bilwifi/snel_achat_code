import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import styled from 'styled-components';

const CardStyle = styled(Card)`
    width: 150px;
    border-radius: 10%;
    box-shadow:  0 15px 40px rgba(166,173,201,.2),0 5px 10px rgba(154,160,185,.05);
    padding: 5%;
    margin:5%;
    text-align: center;
   

`;
const CardDetail = ({label, valeur}) => {
    return ( 
        <CardStyle>
            <h3>{label}</h3>
    <p>{valeur}</p>

            </CardStyle>
     );
}
 
export default CardDetail;