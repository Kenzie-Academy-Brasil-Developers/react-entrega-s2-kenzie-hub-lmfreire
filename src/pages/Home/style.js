import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  /* background: white; */
  padding: 15px;
  margin: 0 auto;

  .HeaderPage {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    margin-top: -20px;

    & > h1 {
      text-align: center;
      margin-top: 30px;
      color: #ff577f;
      font-size: 24px;
    }

    & > button {
      padding: 10px 13px;      
      border: none;
      border-radius: 4px;
      background-color: #212529;
      color: #f8f9fa;
      font-weight: 600;
      font-size: 12px;
    }
  }

  .HelloUser {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 15px;

    & > h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #f8f9fa;
    }

    & > h2 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #868e96;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    .HelloUser {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
