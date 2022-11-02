import { Select } from 'design-react-kit';

import './SelectBox.styles.scss';

const SelectBoxes = ({ strutture, tipiDocumento, onChangeHandler }) => {
  const listTipiDocumento = (tipiDocumento) => {
    return;
    tipiDocumento.map((tipoDocumento) => {
      return (
        <option key={tipoDocumento.value} value={tipoDocumento.value}>
          {tipoDocumento.label}
        </option>
      );
    });
  };

  return (
    <div className="select-menu-container">
      <div className="bootstrap-select-wrapper">
        <select
          id="selectExampleClassic"
          onChange={(event) => {
            console.log(event.target.value);
          }}
          // options={strutture}
          aria-label="Struttura"
          // isSearchable={false}
        >
          <option default selected>
            Struttura
          </option>
          <option>2</option>
        </select>
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          onChange={(event) => event}
          options={listTipiDocumento}
          placeholder="Tipo di documento"
          aria-label="Tipo di documento"
          isSearchable={false}
        ></Select>
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Area di interesse"
          aria-label="Area di interesse"
          isSearchable={false}
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Utile per"
          aria-label="Utile per"
          isSearchable={false}
        />
      </div>
    </div>
  );
};

export default SelectBoxes;
