import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import ListTechnology from "../../components/ListTechnology";
import NewTechnology from "../../components/NewTechnology";
import { Container } from "./style";

function Home({ authenticated }) {
  const [techs, setTechs] = useState({});
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  function newUser(data, token) {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Tecnologia Criada");
        setTechs({ ...techs, response });
      })
      .catch((err) => {
        toast.error("Erro ao criar Tecnologia verifique os dados");
      });
  }

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  function logout() {
    history.push("/login");
    localStorage.clear()    
  }
  return (
    <Container>
      <Toaster position="top-right" />
      <div className="HeaderPage">
        <h1>Kenzie Hub</h1>
        <button onClick={() => logout()}>Sair</button>
      </div>
      <div className="HelloUser">
        <h1>Olá, {user?.name}</h1>
        <h2>{user?.course_module}</h2>
      </div>
      <div>
        <NewTechnology token={token} newUser={newUser} />
        <ListTechnology
          token={token}
          user={user}
          techs={techs}
          setTechs={setTechs}
        />
      </div>
    </Container>
  );
}

export default Home;
