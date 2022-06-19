import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Container, ContainerTec, StyledModal } from "./style";

import Modal from "@mui/material/Modal";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { ButtonStyle, InputStyle } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function NewTechnology({ token, newUser }) {
  const [status, setStateTecnology] = useState("Iniciante");

  const handleChange = (event) => {
    setStateTecnology(event.target.value);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitFunction = ({ title }) => {
    const data = { title, status };

    newUser(data, token);
    setOpen(false);
  };
  return (
    <div>
      <ContainerTec>
        <h1>Tecnologias</h1>
        <button onClick={() => handleOpen()}>
          <FaPlus color="white" />
        </button>
      </ContainerTec>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <div className="TitleDiv">
            <h2>Cadastrar Tecnologia</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Container>
              <InputLabel
                sx={{
                  color: "#F8F9FA",
                  fontSize: "12px",
                  margin: "0",
                  marginLeft: "5px",
                }}
              >
                Nome
              </InputLabel>
              <InputStyle
                placeholder="Nome da Tecnologia"
                {...register("title")}
              />
              {!!errors.title && <span>{errors.title.message}</span>}

              <InputLabel
                sx={{
                  color: "#F8F9FA",
                  fontSize: "12px",
                  margin: "0",
                  marginLeft: "5px",
                }}
              >
                Selecionar status
              </InputLabel>
              <Select
                value={status}
                onChange={handleChange}
                sx={{
                  color: "white",
                  border: "1px solid white",
                  background: "#343B41",
                }}
              >
                <MenuItem value={"Iniciante"}>Iniciante</MenuItem>
                <MenuItem value={"Intermediário"}>Intermediário</MenuItem>
                <MenuItem value={"Avançado"}>Avançado</MenuItem>
              </Select>
              {!!errors.password && <span>{errors.password.message}</span>}

              <ButtonStyle primary variant="contained" type="sumbit">
                Entrar
              </ButtonStyle>
            </Container>
          </form>
        </StyledModal>
      </Modal>
    </div>
  );
}

export default NewTechnology;
