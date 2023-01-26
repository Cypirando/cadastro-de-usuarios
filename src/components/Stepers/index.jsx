import { Divider, Steps } from 'antd';
import { useState } from 'react';
import Interesses from '../../pages/Interesses';
import Resumo from '../../pages/Resumo';
import Inicio from '../../pages/Inicio';


const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Dados Gerais',
            content: <Inicio />,
          },
          {
            title: 'Interesses',
            content: <Interesses />,

          },
          {
            title: 'Resumo',
            content: <Resumo />,

          },
        ]}
      />

      <Divider />

    </>
  );
};
export default App;