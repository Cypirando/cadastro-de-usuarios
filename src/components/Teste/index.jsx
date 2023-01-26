// import React, { useState } from 'react';

// function Form() {
//   const [step, setStep] = useState(1);
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [input3, setInput3] = useState('');

//   const handleInput1Change = (e) => {
//     setInput1(e.target.value);
//   }

//   const handleInput2Change = (e) => {
//     setInput2(e.target.value);
//   }

//   const handleInput3Change = (e) => {
//     setInput3(e.target.value);
//   }

//   const handleNext = () => {
//     setStep(step + 1);
//     //aqui você poderia enviar os dados para uma API ou armazená-los no localStorage
//   }

//   const handlePrevious = () => {
//     setStep(step - 1);
//     //aqui você poderia recuperar os dados do localStorage ou da API
//   }

//   return (
//     <div>
//       {step === 1 && (
//         <div>
//           <input value={input1} onChange={handleInput1Change} />
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 2 && (
//         <div>
//           <input value={input2} onChange={handleInput2Change} />
//           <button onClick={handlePrevious}>Previous</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       {step === 3 && (
//         <div>
//           <input value={input3} onChange={handleInput3Change} />
//           <button onClick={handlePrevious}>Previous</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;

import React, { useState } from 'react';

function Form() {
const [step, setStep] = useState(1);
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
});

const handleNomeChange = (e) => {
setUser({...user, nome: e.target.value});
}

const handleSobrenomeChange = (e) => {
setUser({...user, sobrenome: e.target.value});
}

const handleEmailChange = (e) => {
setUser({...user, email: e.target.value});
}

const handleNext = () => {
setStep(step + 1);
//aqui você poderia enviar os dados para uma API ou armazená-los no localStorage
}

const handlePrevious = () => {
setStep(step - 1);
//aqui você poderia recuperar os dados do localStorage ou da API
}

return (
<div>
{step === 1 && (
<div>
<input value={user.nome} onChange={handleNomeChange} placeholder="Nome" />
<input value={user.sobrenome} onChange={handleSobrenomeChange} placeholder="Sobrenome" />
<input value={user.email} onChange={handleEmailChange} placeholder="Email" />
<button onClick={handleNext}>Next</button>
</div>
)}
{step === 2 && (
<div>
{/* O resto dos inputs e botões /}
<button onClick={handlePrevious}>Previous</button>
<button onClick={handleNext}>Next</button>
</div>
)}
{step === 3 && (
<div>
{/ O resto dos inputs e botões */}
<button onClick={handlePrevious}>Previous</button>
</div>
)}
</div>
);
}

export default Form;