import { Button, DatePicker, Form, Input, Select } from "antd";
import "./Formulario.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Formulario = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="55">+55</Option>
      </Select>
    </Form.Item>
  );

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Por favor digite o Nome"),
    sobrenome: Yup.string().required("Por favor digite o Sobrenome"),
    email: Yup.string()
      .email("E-mail inválido!")
      .required("Por favor digite o Nome E-mail!"),
    cpf: Yup.string().matches(/^\d{11}$/, 'CPF inválido').required("Por favor digite seu CPF"),
    cor: Yup.string().required("Por favor escolha uma cor do seu gosto!"),
    estadoCivil: Yup.string().required("Por favor digite seu Estado Civil!"),
    genero: Yup.string().required("Por favor digite seu Genero!"),
    dataNacimento: Yup.string().required(
      "Por favor digite o ano de nascimento!"
    ),
    phone: Yup.string().required("Por favor digite seu numero!"),
    phone2: Yup.string(),
  });

  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
    cor: "",
    estadoCivil: "",
    genero: "",
    dataNacimento: "",
    phone: "",
    phone2: ""
  });
  console.log(setUser)

  const onSubmit = (values) => {
    console.log(values);
    // Your logic here
  };

  return (
    <div className="App">
      <Formik
        initialValues={user}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <Form.Item
              name="nome"
              label="Nome"
              help={errors.nome}
              validateStatus={errors.nome ? "error" : ""}
            >
              <Input name="nome" onChange={handleChange} value={values.nome} />
            </Form.Item>
            <Form.Item
              name="sobrenome"
              label="Sobrenome"
              help={errors.sobrenome}
              validateStatus={errors.sobrenome ? "error" : ""}
            >
              <Input name="sobrenome" onChange={handleChange} value={values.sobrenome} />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              help={errors.email}
              validateStatus={errors.email ? "error" : ""}
            >
              <Input name="email" onChange={handleChange} value={values.email} />
            </Form.Item>

            <Form.Item
              name="cpf"
              label="CPF"
              help={errors.cpf}
              validateStatus={errors.cpf ? "error" : ""}
            >
              <Input name="cpf" onChange={handleChange} value={values.cpf} />
            </Form.Item>

            <Form.Item
              name="cor"
              label="Cor Preferida"
              help={errors.cor}
              validateStatus={errors.cor ? "error" : ""}
            >
              <Input
                type="color"
                className="imput-cor"
                name="cor"
                onChange={handleChange}
                value={values.cor}
              />
            </Form.Item>

            <Form.Item
              name="estadoCivil"
              label="Estado Civil"
              help={errors.estadoCivil}
              validateStatus={errors.estadoCivil ? "error" : ""}
            >
              <Select name="estadoCivil" onChange={handleChange} value={values.estadoCivil}>
                <Option value="solteiro">Solteiro</Option>
                <Option value="casado">Casado</Option>
                <Option value="viuvo">Viúvo</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="genero"
              label="Genero"
              help={errors.genero}
              validateStatus={errors.genero ? "error" : ""}
            >
              <Select name="genero" onChange={handleChange} value={values.genero}>
                <Option value="masculino">Maculino</Option>
                <Option value="feminino">Feminino</Option>
                <Option value="outro">Outro</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="dataNacimento"
              label="Data de Nascimento"
              help={errors.dataNacimento}
              validateStatus={errors.dataNacimento ? "error" : ""}
            >
              <DatePicker
                name="dataNacimento"
                onChange={(date, dateString) => handleChange({target: {name: "dataNacimento", value: dateString}})}
                value={values.dataNacimento}
              />
            </Form.Item>



            <Form.Item
              name="phone"
              label="Telefone"
              help={errors.phone}
              validateStatus={errors.phone ? "error" : ""}
            >
              <Input
                addonBefore={prefixSelector}
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
            </Form.Item>

            <Form.Item
              name="opicional"
              label="Telefone 2"
              help={errors.phone2}
              validateStatus={errors.phone2 ? "error" : ""}
            >
              <Input
                addonBefore={prefixSelector}
                name="phone2"
                onChange={handleChange}
                value={values.phone2}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Formulario;
