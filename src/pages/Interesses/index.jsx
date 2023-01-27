// import { Checkbox, Table } from "antd";
// // import Atributos from "../../components/Atributos/Atributos";
// const Interesses = ({ formik, user, setUser }) => {
//   // const dataSource = Object.values(Atributos);

//   // const handleCheckboxChange = (e) => {
//   //   const value = e.target.name;
//   //   let newUser = { ...user };
//   //   if (e.target.checked) {
//   //     newUser.hobbies = [...newUser.hobbies, value];
//   //     setUser(newUser);
//   //     formik.setFieldValue("hobbies", newUser.hobbies);
//   //   } else {
//   //     newUser.hobbies = newUser.hobbies.filter((hobby) => hobby !== value);
//   //     setUser(newUser);
//   //     formik.setFieldValue("hobbies", newUser.hobbies);
//   //   }
//   // };

//   console.log(user, "formik");


//   const columns = [
//     {
//       title: "Grupo",
//       dataIndex: "group",
//       key: "group",
//     },
//     {
//       title: "Nomes",
//       dataIndex: "children",
//       key: "children",
//       render: (children) => (
//         <>
//           {children.map((child, index) => (
//             <Checkbox
//               key={index}
//               name={child.label}
//               // onChange={handleCheckboxChange}
//               // checked={user.hobbies.includes(child.label)}
//             >
//               {child.label}
//             </Checkbox>
//           ))}
//         </>
//       ),
//     },
//   ];
//   return (
//     <div className="interesses-container">
//       <Table dataSource={dataSource} columns={columns} />
//     </div>
//   );
// };

// export default Interesses;
