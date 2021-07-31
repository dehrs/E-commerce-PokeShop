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
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
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
`;

export const PokemonAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin-left: 20px;
`;

export const PokemonDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  p{
    line-height: 30px;
  }

  span {
    font-size: 0.9em;
  }
`;

export const PokemonStats = styled.div`
    display: flex;

    > div {
      padding: 5px 20px;
      width: 100px;

      & + div {
        margin: 0 10px;
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
`;
