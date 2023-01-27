import { Checkbox, Table } from "antd";
import { useEffect, useState } from "react";
import Atributos from "../../components/Atributos/Atributos";
const Interesses = ({ formik }) => {
  const dataSource = Object.values(Atributos);
  const [selectedInteresses, setSelectedInteresses] = useState(
    JSON.parse(localStorage.getItem("selectedInteresses")) || []
  );

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedInteresses([...selectedInteresses, name]);
    } else {
      setSelectedInteresses(selectedInteresses.filter((i) => i !== name));
    }
  };

  useEffect(() => {
    if (selectedInteresses) {
      localStorage.setItem(
        "selectedInteresses",
        JSON.stringify(selectedInteresses)
      );
    }
    const storedInteresses = localStorage.getItem("selectedInteresses");
    if (storedInteresses) {
      setSelectedInteresses(JSON.parse(storedInteresses));
    }
  }, [selectedInteresses]);

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
              name={child.label}
              onChange={handleCheckboxChange}
              checked={selectedInteresses.includes(child.label)}
            >
              {child.label}
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
