import styled from "styled-components";
import * as muiComponents from "@mui/material";

export const StyledModal = styled(muiComponents.Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 15px;
  transform: translate(-50%, -50%);
  width: 300px;
  min-height: 150px;
  /* max-height: 300px; */
  background-color: #212529;
  border: 2px solid gray;
  box-shadow: 24;

  .TitleDiv {
    background-color: #343b41;
    margin: -15px;
    margin-bottom: 15px;

    padding: 8px;
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
  /* margin-top: -10px; */
  margin-bottom: 10px;
  background-color: #343b41;
  color: #868e96;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    margin-top: -15px;
    margin-left: 5px;
    color: #e83f5b;
  }
`;

export const ContainerTec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  & > h1 {
    font-family: "Inter";
    font-weight: 600;
    font-size: 22px;
    line-height: 18px;

    color: #f8f9fa;
  }

  & > button {
    padding: 15px 13px;
    border: none;
    border-radius: 4px;
    background-color: #212529;
    color: #f8f9fa;
    font-weight: 600;
    font-size: 12px;
  }
`;
