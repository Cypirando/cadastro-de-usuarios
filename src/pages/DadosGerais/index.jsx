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
      <form onSubmit={formik.handleSubmit} key={formik.values}>
        <Form.Item
          key={formik.errors.name}
          name="name"
          label="Nome"
          help={formik.errors.values}
          validateStatus={formik.errors.name ? "error" : ""}
          initialValue={formik.values.name}
        >
          <Input
            defaultValue={formik.values.name}
            name="name"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          key={formik.errors.lastName}
          name="lastName"
          label="Sobrenome"
          help={formik.errors.lastName}
          validateStatus={formik.errors.lastName ? "error" : ""}
          initialValue={formik.values.lastName}
        >
          <Input
            defaultValue={formik.values.lastName}
            name="lastName"
            onChange={formik.handleChange}
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
          key={formik.errors.cpf}
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
          key={formik.errors.color}
          name="color"
          label="color Preferida"
          help={formik.errors.color}
          validateStatus={formik.errors.color ? "error" : ""}
          initialValue={formik.values.color}
        >
          <Input
            type="color"
            className="imput-cor"
            name="color"
            onChange={formik.handleChange}
            defaultValue={formik.values.color}
          />
        </Form.Item>

        <Form.Item
          key={formik.errors.maritalStatus}
          name="maritalStatus"
          label="Estado Civil"
          help={formik.errors.maritalStatus}
          validateStatus={formik.errors.maritalStatus ? "error" : ""}
          initialValue={formik.values.maritalStatus}
        >
          <Select
          defaultValue={formik.values.maritalStatus}
            name="maritalStatus"
            onChange={(value) =>
              formik.handleChange({
                target: { name: "maritalStatus", value },
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
          key={formik.errors.genre}
          name="genre"
          handleChange
          label="Genero"
          help={formik.errors.genre}
          validateStatus={formik.errors.genre ? "error" : ""}
          initialValue={formik.values.genre}
        >
          <Select
          defaultValue={formik.values.genre}
            name="genre"
            onChange={(value) =>
              formik.handleChange({ target: { name: "genre", value } })
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
          key={formik.errors.birthDay}
          name="birthDay"
          label="Data de Nascimento"
          help={formik.errors.birthDay}
          validateStatus={formik.errors.birthDay ? "error" : ""}
          initialValue={formik.values.birthDay}
        >
          <DatePicker
            name="birthDay"
            onChange={(date, dateString) =>
              formik.handleChange({
                target: { name: "birthDay", value: dateString },
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
