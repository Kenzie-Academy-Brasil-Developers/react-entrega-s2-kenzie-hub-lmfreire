import styled from "styled-components";
import * as muiComponents from "@mui/material";

export const Container = styled.div`
  & > h1 {
    text-align: center;
    margin-top: 30px;
    color: #ff577f;
    font-size: 24px;
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

  .h1ClassName {
    margin: 0 auto;
  }

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

export const TypographyStyle = styled(muiComponents.Typography)`
  color: white;
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

export const InputStyle = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin-top: -10px;
  margin-bottom: 10px;
  background-color: #343b41;
  color: #868e96;
`;
