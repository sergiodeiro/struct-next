import React from 'react';
import styled from 'styled-components';

const ContMenu = styled.div`
 padding: 0px 20px;
 background-color: black;
 display: flex;
 margin: 0px;
`

const Menu = props => {
    return(
        <ContMenu>
            {props.children}
        </ContMenu>
    )
}

export default Menu;