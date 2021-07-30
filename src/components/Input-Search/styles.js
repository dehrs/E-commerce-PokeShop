import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 16px;
  width:100%;

  border-radius: 15px;

  display:flex;
  align-items:center;

  margin-bottom: 20px;

 input{
    background:transparent;
    flex:1;
    border:0;
    color: black;
    font-size:1rem;

    &::placeholder{
      color: gray;
    }

    &:focus-visible{
      outline:0;
    }
  }

  svg{
    margin-right:16px;
  }

`
