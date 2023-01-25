
// import {
//   Button,
//   DatePicker,
//   Form,
//   Input,
//   Select,
// } from "antd";
// import "./Formulario.css";
// const { Option } = Select;

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
// const Formulario = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };
//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="55">+55</Option>
//       </Select>
//     </Form.Item>
//   );

//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         residence: ["zhejiang", "hangzhou", "xihu"],
//         prefix: "55",
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="nome"
//         label="Nome"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite o Nome",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="sobrenome"
//         label="Sobrenome"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite o Sobrenome",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: "email",
//             message: "E-mail invalido!",
//           },
//           {
//             required: true,
//             message: "Por favor digite o Nome E-mail!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="cpf"
//         label="CPF"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite seu CPF",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="cor"
//         label="Cor Preferida"
//         rules={[
//           {
//             required: true,
//             message: "Por favor escolha uma cor do seu gosto!",
//           },
//         ]}
//       >
//         <Input type="color" className="imput-cor" />
//       </Form.Item>

//       <Form.Item
//         name="estadoCivil"
//         label="Estado Civil"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite seu Estado Civil!",
//           },
//         ]}
//       >
//         <Select placeholder="Selecione uma opção...">
//           <Option value="solteiro">Solteiro</Option>
//           <Option value="casado">Casado</Option>
//           <Option value="viuvo">Viúvo</Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         name="genero"
//         label="Genero"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite seu Genero!",
//           },
//         ]}
//       >
//         <Select placeholder="Selecione uma opção...">
//           <Option value="masculino">Maculino</Option>
//           <Option value="feminino">Feminino</Option>
//           <Option value="outro">Outro</Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         name="dataNacimento"
//         label="Data de Nascimento"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite o ano de nascimento!",
//           },
//         ]}
//       >
//         <DatePicker />
//       </Form.Item>

//       <Form.Item
//         name="phone"
//         label="Telefone"
//         rules={[
//           {
//             required: true,
//             message: "Por favor digite seu numero!",
//           },
//         ]}
//       >
//         <Input
//           addonBefore={prefixSelector}
//           style={{
//             width: "100%",
//           }}
//         />
//       </Form.Item>

//       <Form.Item
//         name="celOpicinal"
//         label="Telefone 2 "
//         rules={[
//           {
//             required: false,
//           },
//         ]}
//       >
//         <Input
//           placeholder="Opicional"
//           addonBefore={prefixSelector}
//           style={{
//             width: "100%",
//           }}
//         />
//       </Form.Item>

//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
// export default Formulario;
