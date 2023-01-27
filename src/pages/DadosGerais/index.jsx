import { DatePicker, Form, Input, Select } from "antd";
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      defaultValue={"+55"}
      style={{
        width: 70,
      }}
    >
      <Option value="55">+55</Option>
    </Select>
  </Form.Item>
);
const DadosGerais = ({ formik }) => {
  const listaGenero = [
    { id: 1, name: "Masculino" },
    { id: 2, name: "Feminino" },
    { id: 3, name: "Transgenero" },
    { id: 4, name: "Outro" },
  ];
  const listaEstadoCivil = [
    { id: 1, name: "Solteiro(a)" },
    { id: 2, name: "Casado(a)" },
    { id: 3, name: "Divorciado(a)" },
    { id: 4, name: "Viúvo(a)" },
    { id: 5, name: "União estável" },
  ];

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <Form.Item
          name="nome"
          label="Nome"
          help={formik.errors.values}
          validateStatus={formik.errors.nome ? "error" : ""}
          initialValue={formik.values.nome}
        >
          <Input name="nome" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          name="sobrenome"
          label="Sobrenome"
          help={formik.errors.sobrenome}
          validateStatus={formik.errors.sobrenome ? "error" : ""}
        >
          <Input
            name="sobrenome"
            onChange={formik.handleChange}
            value={formik.values.sobrenome}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          help={formik.errors.email}
          validateStatus={formik.errors.email ? "error" : ""}
        >
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Item>

        <Form.Item
          name="cpf"
          label="CPF"
          help={formik.errors.cpf}
          validateStatus={formik.errors.cpf ? "error" : ""}
        >
          <Input
            name="cpf"
            onChange={formik.handleChange}
            value={formik.values.cpf}
          />
        </Form.Item>

        <Form.Item
          name="cor"
          label="Cor Preferida"
          help={formik.errors.cor}
          validateStatus={formik.errors.cor ? "error" : ""}
        >
          <Input
            type="color"
            className="imput-cor"
            name="cor"
            onChange={formik.handleChange}
            value={formik.values.cor}
          />
        </Form.Item>

        <Form.Item
          name="estadoCivil"
          label="Estado Civil"
          help={formik.errors.estadoCivil}
          validateStatus={formik.errors.estadoCivil ? "error" : ""}
        >
          <Select
            name="estadoCivil"
            onChange={(value) =>
              formik.handleChange({
                target: { name: "estadoCivil", value },
              })
            }
            onBlur={formik.handleBlur}
            value={formik.values.estadoCivil}
          >
            {listaEstadoCivil.map((item, index) => (
              <Option value={item.id}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="genero"
          handleChange
          label="Genero"
          help={formik.errors.genero}
          validateStatus={formik.errors.genero ? "error" : ""}
        >
          <Select
            name="genero"
            onChange={(value) =>
              formik.handleChange({ target: { name: "genero", value } })
            }
            onBlur={formik.handleBlur}
            value={formik.values.genero}
          >
            {listaGenero.map((item, index) => (
              <Option value={item.id}>{item.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dataNacimento"
          label="Data de Nascimento"
          help={formik.errors.dataNacimento}
          validateStatus={formik.errors.dataNacimento ? "error" : ""}
        >
          <DatePicker
            name="dataNacimento"
            onChange={(date, dateString) =>
              formik.handleChange({
                target: { name: "dataNacimento", value: dateString },
              })
            }
            value={formik.values.dataNacimento}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Telefone"
          help={formik.errors.phone}
          validateStatus={formik.errors.phone ? "error" : ""}
        >
          <Input
            addonBefore={prefixSelector}
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </Form.Item>

        <Form.Item
          name="opicional"
          label="Telefone 2"
          help={formik.errors.phone2}
          validateStatus={formik.errors.phone2 ? "error" : ""}
        >
          <Input
            addonBefore={prefixSelector}
            name="phone2"
            onChange={formik.handleChange}
            value={formik.values.phone2}
          />
        </Form.Item>
        {/* 
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item> */}
      </form>
      {/* )} */}
      {/* </Formik> */}
    </div>
  );
};
export default DadosGerais;
