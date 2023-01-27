import "./Resumo.css";

const Resumo = ({formik}) => {
  return (
    <div className="form-resumo">
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {formik.values.nome} 
          {formik.values.sobrenome}

        </tbody>
      </table>
    </div>
  );
};

export default Resumo ;
