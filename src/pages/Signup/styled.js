import styled from "styled-components";
import * as muiComponents from "@mui/material";

export const Container = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    gap: 3.5rem;

    h1 {
      color: #ff577f;
      font-size: 24px;
    }

    button {
      padding: 15px 13px;
      border: none;
      border-radius: 4px;
      background-color: #212529;
      color: #f8f9fa;
      font-weight: 600;
      font-size: 12px;      
    }
  }
`;

export const PaperStyled = styled(muiComponents.Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 15px;
  max-width: 250px;
  margin: 15px auto;
  padding: 0.5rem;

  .pClassName {
    margin: 0 auto;
    color: #868e96;
  }

  span {
    margin-top: -15px;
    margin-left: 5px;
    color: #e83f5b;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.primary ? "#FF577F" : "#868E96")};
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
`;

export const TypographyStyle = styled(muiComponents.Typography)`
  color: white;
  text-align: center;
`;

export const InputStyle = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-top: -10px;
  margin-bottom: 10px;
  background-color: #343b41;
  color: #868e96;
`;
