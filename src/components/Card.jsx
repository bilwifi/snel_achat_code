import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import styled from 'styled-components';
import CardDetail from './CardDetail';

const CardStyle = styled(Card)`
    width: 100%;
    // box-shadow:  0 15px 40px rgba(166,173,201,.2),0 5px 10px rgba(154,160,185,.05);
    // box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
    border-top: 1px solid red;
    border-top-left-radius : 20%;
    border-top-right-radius : 20%;
    padding-top: 10% ;
    display: flex;
    align-items: canter;
    justify-content:center;
    flex-wrap: wrap;
`;

const CardContainer = ({data}) => {
    return ( 
        <CardStyle>
            
                <CardDetail label={data.puissanceTotal+" Kw"} valeur="Puissance total"/>
                <CardDetail label={data.puissanceConsommee+" Kw"}valeur="Puissance utilisée"/>
                {/* <CardDetail label={(data.puissanceTotal-data.puissanceConsommee)+" Kw"} valeur="Puissance restante"/> */}
            
            </CardStyle>
     );
}
 
export default CardContainer;