import React, {useState} from 'react';
import {
    goBack
  } from 'react-chrome-extension-router';
import arrow from '../../../public/img/arrow_back.png';
import styled from 'styled-components';

const Header = ({title}) => {
    return(
        <Container>
            <Image src={arrow} onClick={() => goBack()}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

const Container = styled.header`
  width: 360px;
  height: 100px;
`
const Image = styled.img`
    position: absolute;
    left: 21px;
    top: 18px;
`
const Title = styled.h1`
    position: absolute;
    left: 37px;
    top: 38px;
`

export default Header;