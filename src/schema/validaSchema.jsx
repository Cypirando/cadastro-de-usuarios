import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Por favor digite o Nome"),
  lastName: Yup.string().required("Por favor digite o Sobrenome"),
  email: Yup.string()
    .email("E-mail inválido!")
    .required("Por favor digite o Nome E-mail!"),
  cpf: Yup.string().required("Por favor digite seu CPF"),
  color: Yup.string().required("Por favor escolha uma cor do seu gosto!"),
  maritalStatus: Yup.string().required("Por favor digite seu Estado Civil!"),
  genre: Yup.string().required("Por favor digite seu Genero!"),
  birthDay: Yup.string().required("Por favor digite o ano de nascimento!"),
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
        name="name"
        label="name"
        help={errors.name}
        validateStatus={errors.name ? "error" : ""}
      >
        <Input name="name" onChange={handleChange} value={values.name} />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="lastName"
        help={errors.lastName}
        validateStatus={errors.lastName ? "error" : ""}
      >
        <Input
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
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
        name="color"
        label="color Preferida"
        help={errors.color}
        validateStatus={errors.color ? "error" : ""}
      >
        <Input
          type="color"
          className="imput-cor"
          name="color"
          onChange={handleChange}
          value={values.color}
        />
      </Form.Item>

      <Form.Item
        name="maritalStatus"
        label="Estado Civil"
        help={errors.maritalStatus}
        validateStatus={errors.maritalStatus ? "error" : ""}
      >
        <Select
          name="maritalStatus"
          onChange={handleChange}
          value={values.maritalStatus}
        >
          <Option value="solteiro">Solteiro</Option>
          <Option value="casado">Casado</Option>
          <Option value="viuvo">Viúvo</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="genre"
        label="genre"
        help={errors.genre}
        validateStatus={errors.genre ? "error" : ""}
      ></Form.Item>
    </form>
  )}
</Formik>;
