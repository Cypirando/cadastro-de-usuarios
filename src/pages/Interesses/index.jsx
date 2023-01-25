import "./Interesses.css";
import { useState } from "react";
import { Checkbox, Table } from "antd";

const Interesses = () => {
  const [selectedInteresses, setSelectedInteresses] = useState([]);
  const estiloDeVida = [
    { id: 1, name: "Leitura", group: "Arte e Cultura" },
    { id: 2, name: "Viagens", group: "Lazer" },
    { id: 3, name: "Música", group: "Arte e Cultura" },
    { id: 4, name: "Esportes", group: "Saúde e Bem-estar" },
    { id: 5, name: "Culinária", group: "Lazer" },
    { id: 6, name: "Filmes", group: "Arte e Cultura" },
    { id: 7, name: "Tecnologia", group: "Ciência e Tecnologia" },
    { id: 8, name: "Fotografia", group: "Arte e Cultura" },
    { id: 9, name: "Moda", group: "Estilo de Vida" },
    { id: 10, name: "Jardinagem", group: "Natureza e Meio Ambiente" },
    { id: 11, name: "Jogos", group: "Entretenimento" },
    { id: 12, name: "Animais de estimação", group: "Natureza e Meio Ambiente" },
    { id: 13, name: "Artesanato", group: "Arte e Cultura" },
    { id: 14, name: "Dança", group: "Arte e Cultura" },
    { id: 15, name: "Exercícios físicos", group: "Saúde e Bem-estar" },
    { id: 16, name: "Gastronomia", group: "Lazer" },
    { id: 17, name: "História", group: "Arte e Cultura" },
    { id: 18, name: "Ciência", group: "Ciência e Tecnologia" },
    { id: 19, name: "Natureza", group: "Natureza e Meio Ambiente" },
    { id: 20, name: "Política", group: "Atualidades e Notícias" },
    { id: 21, name: "Religião", group: "Filosofia e Espiritualidade" },
    { id: 22, name: "Automóveis", group: "Transporte e Mobilidade" },
    { id: 23, name: "Bicicletas", group: "Transporte e Mobilidade" },
    { id: 24, name: "Barcos", group: "Lazer" },
    { id: 25, name: "Aviação", group: "Transporte e Mobilidade" },
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedInteresses([...selectedInteresses, name]);
    } else {
      setSelectedInteresses(selectedInteresses.filter((i) => i !== name));
    }
  };

  const groupInteresses = estiloDeVida.reduce((acc, interesse) => {
    if (!acc[interesse.group]) {
      acc[interesse.group] = { group: interesse.group, children: [] };
    }
    acc[interesse.group].children.push(interesse.name);
    return acc;
  }, {});

  const dataSource = Object.values(groupInteresses);
  console.log(dataSource);

  const columns = [
    {
      title: "Grupo",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Nomes",
      dataIndex: "children",
      key: "children",
      render: (children) => (
        <>
          {children.map((child) => (
            <Checkbox
              name={child}
              onChange={handleCheckboxChange}
              checked={selectedInteresses.includes(child)}
            >
              {child}
            </Checkbox>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="interesses-container">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Interesses;
