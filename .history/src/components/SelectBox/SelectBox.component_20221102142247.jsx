import { Select } from 'design-react-kit';

import './SelectBox.styles.scss';

const SelectBoxes = ({ strutture, tipiDocumento, onChangeHandler }) => {
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
          onChange={() => (value: ValueType<'IO'>, action: ActionMeta<IO>) =>
            onChangeHandler()}
          options={tipiDocumento}
          placeholder="Tipo di documento"
          aria-label="Tipo di documento"
          isSearchable={false}
        />
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