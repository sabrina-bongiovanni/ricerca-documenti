import { Select } from 'design-react-kit';

import './SelectBox.styles.scss';

const SelectBoxes = ({ strutture, tipiDocumento }) => {
  const nomiStrutture = [];

  console.log(strutture.length);

  for (let i = 1; i <= strutture.length; i++) {
    nomiStrutture.push(strutture[i]);
  }

  console.log(strutture[0].nome);
  // strutture.map((struttura) => console.log(struttura.nome));
  return (
    <div className="select-menu-container">
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={strutture.map((struttura) => console.log(struttura.nome))}
          placeholder="Struttura"
          aria-label="Struttura"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          options={tipiDocumento}
          placeholder="Tipo di documento"
          aria-label="Tipo di documento"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Area di interesse"
          aria-label="Area di interesse"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Utile per"
          aria-label="Utile per"
        />
      </div>
    </div>
  );
};

export default SelectBoxes;