import styled from 'styled-components';
import { darken } from 'polished';


export const ProductList = styled.ul`
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    a {
     display: flex;
     justify-content: center;

      img{
        width: 60%;

        &:hover {
          transform: scale(1.1)
        }
      }

    }

    > strong {
      /* font-size: 16px; */
      margin-top: 15px;
      line-height: 20px;
      color: #333;
      align-self: center;
    }

    > span {
      /* font-size: 21px; */
      font-weight: bold;
      margin: 5px 0 20px;
      align-self: center;
    }

    button {
      background: var(--background-button);
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#E46654')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }


`;
