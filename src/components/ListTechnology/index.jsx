import { useEffect, useState } from "react";
import api from "../../services/api";
import { FcFullTrash } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { Container } from "./style";

function ListTechnology({ user, techs, token }) {
  const [listTechs, setListTechs] = useState(false);

  function loadUserTask() {
    api.get(`/users/${user?.id}`).then((response) => {
      setListTechs(response.data.techs);
    });
  }

  useEffect(() => {
    loadUserTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techs, listTechs]);

  function deleteTech(e) {
    const techId = e.target.parentNode.parentNode?.id;

    api
      .delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Tecnologia Deletada");
        loadUserTask();
      });
  }

  return (
    <Container>
      <Toaster position="top-right" />
      {!!listTechs &&
        listTechs.map((tech) => (
          <div className="Card" key={tech.id}>
            <h1>{tech.title}</h1>
            <div>
              <p>{tech.status}</p>
              <button onClick={deleteTech} id={tech.id}>
                <FcFullTrash size={20} />
              </button>
            </div>
          </div>
        ))}
    </Container>
  );
}

export default ListTechnology;
