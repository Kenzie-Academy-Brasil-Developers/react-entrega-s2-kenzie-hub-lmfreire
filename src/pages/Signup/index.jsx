import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import {
  ButtonStyle,
  Container,
  InputStyle,
  PaperStyled,
  TypographyStyle,
} from "./styled";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { Typography } from "@mui/material";
function Signup({ authenticated }) {
  const [course_module, setModulo] = useState(
    "Primeiro módulo (Introdução ao Frontend)"
  );

  const handleChange = (event) => {
    setModulo(event.target.value);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .min(6, "Minimo 6 digitos"),
    passwordConfirm: yup
      .string()
      .required("Senha é obrigatório")
      .oneOf([yup.ref("password"), null], "Password não são iguais"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password, bio, contact }) => {
    const data = { name, email, password, bio, contact, course_module };
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Erro ao criar a conta, tente outro email");
      });
  };

  return (
    <Container>
      <div>
        <h1>Kenzie Hub</h1>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <PaperStyled
          elevation={3}
          sx={{
            bgcolor: "#212529",
          }}
        >
          <TypographyStyle variant="h6" component="h1" className="h1ClassName">
            Crie sua conta
          </TypographyStyle>
          <Typography variant="subtitle2" component="p" className="pClassName">
            Rapido e grátis, vamos nessa
          </Typography>

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
          <InputStyle placeholder="Nome" {...register("name")} />
          {!!errors.name && <span>{errors.name.message}</span>}

          <InputLabel
            sx={{
              color: "#F8F9FA",
              fontSize: "12px",
              margin: "0",
              marginLeft: "5px",
            }}
          >
            Email
          </InputLabel>
          <InputStyle placeholder="Email" {...register("email")} />
          {!!errors.email && <span>{errors.email.message}</span>}

          <InputLabel
            sx={{
              color: "#F8F9FA",
              fontSize: "12px",
              margin: "0",
              marginLeft: "5px",
            }}
          >
            Senha
          </InputLabel>
          <InputStyle
            placeholder="Senha"
            type="password"
            {...register("password")}
          />
          {!!errors.password && <span>{errors.password.message}</span>}

          <InputLabel
            sx={{
              color: "#F8F9FA",
              fontSize: "12px",
              margin: "0",
              marginLeft: "5px",
            }}
          >
            Confirmar Senha
          </InputLabel>
          <InputStyle
            placeholder="Senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {!!errors.passwordConfirm && (
            <span>{errors.passwordConfirm.message}</span>
          )}

          <InputLabel
            sx={{
              color: "#F8F9FA",
              fontSize: "12px",
              margin: "0",
              marginLeft: "5px",
            }}
          >
            Bio
          </InputLabel>
          <InputStyle placeholder="Bio" {...register("bio")} />
          {!!errors.bio && <span>{errors.bio.message}</span>}

          <InputLabel
            sx={{
              color: "#F8F9FA",
              fontSize: "12px",
              margin: "0",
              marginLeft: "5px",
            }}
          >
            Contato
          </InputLabel>
          <InputStyle placeholder="Contato" {...register("contact")} />
          {!!errors.contact && <span>{errors.contact.message}</span>}

          <InputLabel
            sx={{
              color: "white",
            }}
          >
            Selecione um modulo
          </InputLabel>

          <Select
            value={course_module}
            onChange={handleChange}
            sx={{
              color: "white",
              border: "1px solid white",
              background: "#343B41",
            }}
          >
            <MenuItem value={"Primeiro módulo (Introdução ao Frontend)"}>
              Primeiro módulo (Introdução ao Frontend)
            </MenuItem>
            <MenuItem value={"Segundo módulo (Frontend Avançado)"}>
              Segundo módulo (Frontend Avançado)
            </MenuItem>
            <MenuItem value={"Terceiro módulo (Introdução ao Backend)"}>
              Terceiro módulo (Introdução ao Backend)
            </MenuItem>
            <MenuItem value={"Quarto módulo (Backend Avançado)"}>
              Quarto módulo (Backend Avançado)
            </MenuItem>
          </Select>
          <ButtonStyle primary variant="contained" type="sumbit">
            Cadastrar
          </ButtonStyle>
        </PaperStyled>
      </form>
      <Toaster position="top-right" />
    </Container>
  );
}

export default Signup;
