import React from 'react'
import Header from '../../components/comn/Header'
import CreateMenm from '../../components/create/CreateMenm';
import styled from 'styled-components';

const CREATE_MNEM = () => {
  return (
    <Container>
      <Header title = "Secret recovery phrase"/>
      <CreateMenm />
    </Container>
  )
}

export default CREATE_MNEM;

const Container = styled.div`
  width: 360px;
  height: 600px;
  `