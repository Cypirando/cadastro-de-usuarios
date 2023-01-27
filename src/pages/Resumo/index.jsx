import { Descriptions } from "antd";
import "./Resumo.css";
// import { Table } from "antd";

const Resumo = ({ formik, user }) => {
  const dataSource = formik.values;
  console.log(dataSource, "datasource");

  // const columns = [
  //   {
  //     title: "Nome",
  //     dataIndex: "nome",
  //     key: "nome",
  //   },
  //   {
  //     title: "Sobrenome",
  //     dataIndex: "sobrenome",
  //     key: "sobrenome",
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "email",
  //   },
  //   {
  //     title: "CPF",
  //     dataIndex: "cpf",
  //     key: "cpf",
  //   },
  //   {
  //     title: "Cor",
  //     dataIndex: "cor",
  //   },
  //   {
  //     key: "cor",
  //   },
  //   {
  //     title: "Estado Civil",
  //     dataIndex: "estadoCivil",
  //     key: "estadoCivil",
  //   },
  //   {
  //     title: "Gênero",
  //     dataIndex: "genero",
  //     key: "genero",
  //   },
  //   {
  //     title: "Data de Nascimento",
  //     dataIndex: "dataNacimento",
  //     key: "dataNacimento",
  //   },
  //   {
  //     title: "Telefone",
  //     dataIndex: "phone",
  //     key: "phone",
  //   },
  //   {
  //     title: "Telefone 2",
  //     dataIndex: "phone2",
  //     key: "phone2",
  //   },
  //   {
  //     title: "Hobbies",
  //     dataIndex: "hobbies",
  //     key: "hobbies",
  //   },
  // ];

  return (
    <div className="form-resumo">
      <div>
        <Descriptions title="User Info">
          <Descriptions.Item label="Nome Completo">
            {dataSource.nome} {dataSource.sobrenome}
          </Descriptions.Item>
          <Descriptions.Item label="Cpf">{dataSource.cpf}</Descriptions.Item>
          <Descriptions.Item label="Estadi Civil">
            {dataSource.estadoCivil}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {dataSource.email}
          </Descriptions.Item>
          <Descriptions.Item label="Gênero">
            {dataSource.genero}
          </Descriptions.Item>
          <Descriptions.Item label="Data de Nascimento">
            {dataSource.dataNacimento}
          </Descriptions.Item>
          <Descriptions.Item label="Telefone">
            {dataSource.phone}
          </Descriptions.Item>
          <Descriptions.Item label="Telefone 2">
            {dataSource.phone2}
          </Descriptions.Item>
          <Descriptions.Item label="Hobbies">
            {dataSource.hobbies.join(", ")}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default Resumo;
