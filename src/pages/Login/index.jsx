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
import { Redirect, useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";

import toast, { Toaster } from "react-hot-toast";
import { InputLabel } from "@mui/material";

function Login({ setAuthenticated, authenticated }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .min(6, "Minimo 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/home");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
      });
  };

  if (authenticated) {
    setTimeout(() => {      
      return <Redirect to="/home" />;
    }, "1000")
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <PaperStyled
          elevation={3}
          sx={{
            bgcolor: "#212529",
          }}
        >
          <TypographyStyle variant="h6" component="h1" className="h1ClassName">
            Login
          </TypographyStyle>

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
            {...register("password")}
            type="password"
          />
          {!!errors.password && <span>{errors.password.message}</span>}

          <ButtonStyle primary variant="contained" type="sumbit">
            Entrar
          </ButtonStyle>
          <Typography variant="subtitle2" component="p" className="pClassName">
            Ainda não possui uma conta?
          </Typography>
          <ButtonStyle
            variant="contained"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Cadastre-se
          </ButtonStyle>
        </PaperStyled>
      </form>
      <Toaster position="top-right" />
    </Container>
  );
}

export default Login;
