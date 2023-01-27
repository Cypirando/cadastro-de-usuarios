import { useState } from "react";
import { useFormik } from "formik";

import DadosGerais from "../../pages/DadosGerais";
import Interesses from "../../pages/Interesses";
import Resumo from "../../pages/Resumo";

import * as Yup from "yup";
import "./Stepers.css";
import { Button, message, theme, Steps } from "antd";

const App = () => {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Por favor digite o Nome"),
    sobrenome: Yup.string().required("Por favor digite o Sobrenome"),
    email: Yup.string()
      .email("E-mail inválido!")
      .required("Por favor digite o Nome E-mail!"),
    cpf: Yup.string()
      .matches(/^\d{11}$/, "CPF inválido")
      .required("Por favor digite seu CPF"),
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
    phone2: "",
    atributos: " dataSource.map((item) => console.log(item.group))",
  });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };
  // console.log(handleInputChange, "steUser");
  const formik = useFormik({
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: user,

    onSubmit: (values) => {
      console.log(values, "values submit");

    },
  });


  const steps = [
    {
      title: "Dados Gerais",
      content: DadosGerais,
    },
    {
      title: "Interesses",
      content: Interesses,
    },
    {
      title: "Resumo",
      content: Resumo,
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const Component = steps[current].content;
  return (
    <>
      <Steps current={current} items={items} user={user} />
      <div style={contentStyle}>
        <Component formik={formik} />
      </div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              formik.handleSubmit();
              next();
            }}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              message.success("Processing complete!");
            }}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              prev();
              setUser((prevState) => ({ ...prevState }));
            }}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
