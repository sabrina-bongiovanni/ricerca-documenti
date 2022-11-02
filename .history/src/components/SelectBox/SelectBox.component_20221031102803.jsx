import { Select } from 'design-react-kit';

import './SelectBox.styles.scss';

const SelectBoxes = () => {
  return (
    <div className="select-menu-container">
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Scegli una opzione"
          aria-label="Scegli una opzione"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Scegli una opzione"
          aria-label="Scegli una opzione"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Scegli una opzione"
          aria-label="Scegli una opzione"
        />
      </div>
      <div className="bootstrap-select-wrapper">
        <Select
          id="selectExampleClassic"
          // onChange={handleChange}
          // options={defaultOptions}
          placeholder="Scegli una opzione"
          aria-label="Scegli una opzione"
        />
      </div>
    </div>
  );
};

export default SelectBoxes;
