import Formulario from "../../components/Formulario";
import Stepers from "../../components/Stepers";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="form-inicio">
        <h2>Cadastro de Usuarios</h2>
        <Stepers />
        <Formulario/>

    </div>
  );
};

export default Inicio;
