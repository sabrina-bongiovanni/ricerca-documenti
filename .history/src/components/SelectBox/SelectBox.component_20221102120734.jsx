import { Select } from 'design-react-kit';

import './SelectBox.styles.scss';

const SelectBoxes = ({ strutture, tipiDocumento, onChangeHandler }) => {
  return (
    <div className="select-menu-container">
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          onChange={() => {
            strutture.map((struttura) => {
              onChangeHandler(struttura.label);
            });
          }}
          options={strutture}
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
