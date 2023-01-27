import { Descriptions, Space, Tag } from "antd";
import "./Resumo.css";
// import { Table } from "antd";

const Resumo = ({ formik, user }) => {
  const dataSource = formik.values;
  console.log(dataSource, "datasource");

  return (
    <div>
      <div>
        <Descriptions title="Informações do Usuario">
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
          <Space size={[0, 8]} wrap>
            <Tag color={dataSource.cor}>Cor</Tag>
          </Space>
        </Descriptions>
      </div>
    </div>
  );
};

export default Resumo;
