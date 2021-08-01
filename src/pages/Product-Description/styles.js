import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: var(--background-button);
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#E46654')};
      }
    }
  }

  @media (max-width: 819px) {
    footer{
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 819px) {
    justify-content: center;
  }
`;

export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
  }

  strong {
    margin-top: 20px;
    line-height: 30px;
    color: #333;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 798px) {
    img {

      width: 150px;
    }
  }
  @media (max-width: 300px) {
    img {

      width: 100px;
    }
  }
  @media (max-width: 200px) {
    img {

      width:50px;
    }
  }
`;

export const PokemonAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 500px;
  margin-left: 20px;

  @media (max-width: 819px) {
    width: 460px;
  }

  @media (max-width: 798px) {
    width: 445px;
  }

  @media (max-width: 560px) {
    margin-left: 0;
  }
`;

export const PokemonDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;

  p{
    line-height: 30px;
  }

  span {
    font-size: 0.9em;
  }

  @media (max-width: 819px) {
    margin-bottom: 20px;
  }
`;

export const PokemonStats = styled.div`
    display: flex;

    > div {
      padding: 5px 20px;
      width: 100px;
      margin: 0 10px;

      @media (max-width: 813px) {
        margin: 10px;
     }

      background: #E4F1EF;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
      border-radius: 4px;

      p {
        text-transform: capitalize;
      }

      span {
        font-size: 0.9rem;
      }

    }

    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
`;
