import styled from "styled-components";

export const Container = styled.div`
  margin: 15px;
  padding: 15px;

  background-color: #212529;

  border-radius: 8px;

  .Card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    padding: 5px;

    background: #121214;
    border-radius: 4px;
    transition: 1s;

    &:hover {
      background-color: #343b41;
    }
    & > h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      margin-left: 5px;
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 1.3rem;

      & > p {
        font-family: "Inter";
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        text-align: right;

        color: #868e96;
      }

      & > button {
        align-items: center;
        background: none;
        border: none;
      }
    }
  }
`;
