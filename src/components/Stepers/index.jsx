import { useState } from "react";
import { useFormik } from "formik";
import DadosGerais from "../../pages/DadosGerais";
import Resumo from "../../pages/Resumo";
import * as Yup from "yup";
import "./Stepers.css";
import { Button, theme, Steps, message } from "antd";
import axios from 'axios';

const App = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Por favor digite o Nome"),
    lastName: Yup.string().required("Por favor digite o Sobrenome"),
    email: Yup.string()
      .email("E-mail inválido!")
      .required("Por favor digite o Nome E-mail!"),
    cpf: Yup.string()
      .matches(/^\d{11}$/, "CPF inválido")
      .required("Por favor digite seu CPF"),
    color: Yup.string().required("Por favor escolha uma cor do seu gosto!"),
    genre: Yup.string().required("Por favor digite seu Genero!"),
    maritalStatus: Yup.string().required("Por favor digite seu Estado Civil!"),
    birthDay: Yup.string().required("Por favor digite o ano de nascimento!"),
    phone: Yup.string().required("Por favor digite seu numero!"),
    phone2: Yup.string(),
  });

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    cpf: "",
    color: "",
    genre: "",
    birthDay: "",
    maritalStatus: "",
    phone: "",
    phone2: "",
  });

  const formik = useFormik({
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: user,

    onSubmit: (values) => {
      console.log(values, "values submit");
      axios
        .post("http://localhost:3000/sorteio", values)
        .then((response) => {
          console.log(response);
          message.success("Dados enviados com sucesso!");
        })
        .catch((error) => {
          console.log(error);
          message.error("Erro ao enviar dados");
        });
    },
  });

  const steps = [
    {
      title: "Dados Gerais",
      content: DadosGerais,
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
  const dataSource = formik.values;
  console.table(dataSource, "Values11");
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
        <Component formik={formik} user={user} setUser={setUser} />
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

// import { useState } from "react";
// import { useFormik } from "formik";
// // import Erro from "../Erro";

// // import Atributos from "../../components/Atributos/Atributos";

// import DadosGerais from "../../pages/DadosGerais";
// // import Interesses from "../../pages/Interesses";
// import Resumo from "../../pages/Resumo";
// // import enviarCadastro from "../../api";
// import * as Yup from "yup";
// import "./Stepers.css";
// import { Button, theme, Steps, message } from "antd";

// const App = () => {
//   const schema = Yup.object().shape({
//     name: Yup.string().required("Por favor digite o Nome"),
//     lastName: Yup.string().required("Por favor digite o Sobrenome"),
//     email: Yup.string()
//       .email("E-mail inválido!")
//       .required("Por favor digite o Nome E-mail!"),
//     cpf: Yup.string()
//       .matches(/^\d{11}$/, "CPF inválido")
//       .required("Por favor digite seu CPF"),
//     color: Yup.string().required("Por favor escolha uma cor do seu gosto!"),
//     genre: Yup.string().required("Por favor digite seu Genero!"),
//     maritalStatus: Yup.string().required("Por favor digite seu Estado Civil!"),
//     birthDay: Yup.string().required(
//       "Por favor digite o ano de nascimento!"
//       ),
//     phone: Yup.string().required("Por favor digite seu numero!"),
//     phone2: Yup.string(),
//   });

//   const [user, setUser] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     cpf: "",
//     color: "",
//     genre: "",
//     birthDay: "",
//     maritalStatus: "",
//     phone: "",
//     phone2: "",
//   });

//   const formik = useFormik({
//     validationSchema: schema,
//     validateOnBlur: true,
//     validateOnChange: true,
//     initialValues: user,
//     onSubmit:  (values) => {
//       console.log(values, "values submit");

//       // await enviarCadastro(values);
//     },
//   });

//   const steps = [
//     {
//       title: "Dados Gerais",
//       content: DadosGerais,
//     },
//     // {
//     //   title: "Interesses",
//     //   content: Interesses,
//     // },
//     {
//       title: "Resumo",
//       content: Resumo,
//     },
//   ];
//   const { token } = theme.useToken();
//   const [current, setCurrent] = useState(0);
//   const next = () => {
//     setCurrent(current + 1);
//   };
//   const prev = () => {
//     setCurrent(current - 1);
//   };
//   const items = steps.map((item) => ({
//     key: item.title,
//     title: item.title,
//   }));
//   const contentStyle = {
//     lineHeight: "260px",
//     textAlign: "center",
//     color: token.colorTextTertiary,
//     backgroundColor: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: `1px dashed ${token.colorBorder}`,
//     marginTop: 16,
//   };
//   const Component = steps[current].content;
//   const dataSource = formik.values;
//   console.table(dataSource, "Values11");
//   // const [erro, setError] = useState();

//   // async function onClick() {
//   //   try {
//   //     await enviarCadastro(dataSource);

//   //   } catch (error) {
//   //     if (error.response) {
//   //       switch (error.response.status) {
//   //         case 400:
//   //           setError(
//   //             "Bad request: Por favor, verifique se todos os campos estão preenchidos corretamente."
//   //           );
//   //           break;
//   //         case 401:
//   //           setError(
//   //             "Unauthorized: Não autorizado, verifique suas credenciais."
//   //           );
//   //           break;
//   //         case 500:
//   //           setError(
//   //             "Internal Server Error: Ocorreu um erro no servidor, por favor, tente novamente mais tarde."
//   //           );
//   //           break;
//   //         default:
//   //           setError(`Erro: ${error.response.status}`);
//   //           break;
//   //       }
//   //     } else {
//   //       setError(
//   //         "Ocorreu um erro com a chamada de API. Por favor, tente novamente mais tarde."
//   //       );
//   //     }
//   //   }
//   // }

//   return (
//     <>
//       <Steps current={current} items={items} />
//       <div style={contentStyle}>
//         {/* {erro && <Erro message={erro} />} */}
//         <Component formik={formik} user={user} setUser={setUser} />
//       </div>
//       <div
//         style={{
//           marginTop: 24,
//         }}
//       >
//         {current < steps.length - 1 && (
//           <Button
//             // disabled={!formik.isValid || formik.isSubmitting}
//             type="primary"
//             onClick={() => {
//               formik.handleSubmit();
//               next();
//             }}
//           >
//             Next
//           </Button>
//         )}
//         {current === steps.length - 1 && (
//           <Button
//             type="primary"
//             onClick={() => {
//               message.success("Processing complete!");
//             }}
//           >
//             Done
//           </Button>
//         )}
//         {current > 0 && (
//           <Button
//             style={{
//               margin: "0 8px",
//             }}
//             onClick={() => {
//               prev();
//               setUser((prevState) => ({ ...prevState }));
//             }}
//           >
//             Previous
//           </Button>
//         )}
//       </div>
//     </>
//   );
// };
// export default App;
