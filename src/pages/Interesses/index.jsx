import { Checkbox, Table } from "antd";
import { useState } from "react";
import Atributos from "../../components/Atributos/Atributos";
const Interesses = () => {
  const dataSource = Object.values(Atributos);
  const [selectedInteresses, setSelectedInteresses] = useState([]);


  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedInteresses([...selectedInteresses, name]);
    } else {
      setSelectedInteresses(selectedInteresses.filter((i) => i !== name));
    }
  };
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
          {children.map((child, index) => (
            <Checkbox
            key={index}
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
