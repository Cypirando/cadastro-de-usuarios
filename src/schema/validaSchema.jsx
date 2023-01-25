import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  nome: Yup.string().required("Por favor digite o Nome"),
  sobrenome: Yup.string().required("Por favor digite o Sobrenome"),
  email: Yup.string()
    .email("E-mail inválido!")
    .required("Por favor digite o Nome E-mail!"),
  cpf: Yup.string().required("Por favor digite seu CPF"),
  cor: Yup.string().required("Por favor escolha uma cor do seu gosto!"),
  estadoCivil: Yup.string().required("Por favor digite seu Estado Civil!"),
  genero: Yup.string().required("Por favor digite seu Genero!"),
  dataNacimento: Yup.string().required("Por favor digite o ano de nascimento!"),
  phone: Yup.string().required("Por favor digite seu numero!"),
});

<Formik
  initialValues={initialValues}
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
        <Input
          name="sobrenome"
          onChange={handleChange}
          value={values.sobrenome}
        />
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
        <Select
          name="estadoCivil"
          onChange={handleChange}
          value={values.estadoCivil}
        >
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
      ></Form.Item>
    </form>
  )}
</Formik>;
