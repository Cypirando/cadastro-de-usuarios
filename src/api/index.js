import axios from "axios";

const rota = "http://localhost:3000/sorteio";

async function enviarCadastro() {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    return await axios.post(rota, {  }, config);
  } catch (error) {
    throw error;
  }
}

export default enviarCadastro;