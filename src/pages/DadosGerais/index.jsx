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
  console.log(formik.values, "Formik");
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} key={formik.values}>
        <Form.Item
          key={formik.errors.nome}
          name="nome"
          label="Nome"
          help={formik.errors.values}
          validateStatus={formik.errors.nome ? "error" : ""}
          initialValue={formik.values.nome}
        >
          <Input
            defaultValue={formik.values.nome}
            name="nome"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          key={formik.errors.sobrenome}
          name="sobrenome"
          label="Sobrenome"
          help={formik.errors.sobrenome}
          validateStatus={formik.errors.sobrenome ? "error" : ""}
          initialValue={formik.values.nome}
        >
          <Input
            defaultValue={formik.values.sobrenome}
            name="sobrenome"
            onChange={formik.handleChange}
            value={formik.values.sobrenome}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.email}
          name="email"
          label="E-mail"
          help={formik.errors.email}
          validateStatus={formik.errors.email ? "error" : ""}
          initialValue={formik.values.email}
        >
          <Input
            defaultValue={formik.values.email}
            name="email"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.nome}
          name="cpf"
          label="CPF"
          help={formik.errors.cpf}
          validateStatus={formik.errors.cpf ? "error" : ""}
          initialValue={formik.values.cpf}
        >
          <Input
            defaultValue={formik.values.cpf}
            name="cpf"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.cor}
          name="cor"
          label="Cor Preferida"
          help={formik.errors.cor}
          validateStatus={formik.errors.cor ? "error" : ""}
          initialValue={formik.values.cor}
        >
          <Input
            type="color"
            className="imput-cor"
            name="cor"
            onChange={formik.handleChange}
            defaultValue={formik.values.cor}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.estadoCivil}
          name="estadoCivil"
          label="Estado Civil"
          help={formik.errors.estadoCivil}
          validateStatus={formik.errors.estadoCivil ? "error" : ""}
          initialValue={formik.values.estadoCivil}
        >
          <Select
          defaultValue={formik.values.genero}
            name="estadoCivil"
            onChange={(value) =>
              formik.handleChange({
                target: { name: "estadoCivil", value },
              })
            }
            onBlur={formik.handleBlur}
          >
            {listaEstadoCivil.map((item, index) => (
              <Option key={index} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          key={formik.errors.genero}
          name="genero"
          handleChange
          label="Genero"
          help={formik.errors.genero}
          validateStatus={formik.errors.genero ? "error" : ""}
          initialValue={formik.values.genero}
        >
          <Select
          defaultValue={formik.values.genero}
            name="genero"
            onChange={(value) =>
              formik.handleChange({ target: { name: "genero", value } })
            }
            onBlur={formik.handleBlur}
          >
            {listaGenero.map((item, index) => (
              <Option key={index} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          key={formik.errors.dataNacimento}
          name="dataNacimento"
          label="Data de Nascimento"
          help={formik.errors.dataNacimento}
          validateStatus={formik.errors.dataNacimento ? "error" : ""}
          initialValue={formik.values.dataNacimento}
        >
          <DatePicker
            name="dataNacimento"
            onChange={(date, dateString) =>
              formik.handleChange({
                target: { name: "dataNacimento", value: dateString },
              })
            }
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.phone}
          name="phone"
          label="Telefone"
          help={formik.errors.phone}
          validateStatus={formik.errors.phone ? "error" : ""}
          initialValue={formik.values.phone}
        >
          <Input
            defaultValue={formik.values.phone}
            addonBefore={prefixSelector}
            name="phone"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.phone2}
          name="opicional"
          label="Telefone 2"
          help={formik.errors.phone2}
          validateStatus={formik.errors.phone2 ? "error" : ""}
          initialValue={formik.values.phone2}
        >
          <Input
            defaultValue={formik.values.phone2}
            addonBefore={prefixSelector}
            name="phone2"
            onChange={formik.handleChange}
          />
        </Form.Item>
        {/* 
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item> */}
      </form>
   
    </div>
  );
};
export default DadosGerais;
