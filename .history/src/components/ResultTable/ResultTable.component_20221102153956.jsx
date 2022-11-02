import Table from 'react-bootstrap/Table';

import './ResultTable.styles.scss';

const ResultTable = ({ tableData }) => {
  if (tableData.length === 0) {
    return (
      <Table hover bsPrefix="table" className="py-10 gy-10">
        <tr>
          <p>Ciao</p>
        </tr>
      </Table>
    );
  } else {
    return (
      <Table hover bsPrefix="table" className="py-10 gy-10">
        <thead>
          <tr>
            <th scope="col" className="px-5 col-3">
              <p>Strutture</p>
            </th>
            <th scope="col" className="px-5 col-2">
              <p>Tipo</p>
            </th>
            <th scope="col" className="px-5 col-1">
              <p>Descrizione</p>
            </th>
            <th scope="col" className="px-5 col-1">
              <p>Revisione</p>
            </th>
            <th scope="col" className="px-5 col-2">
              <p>Data</p>
            </th>
            <th scope="col" className="px-5 col-3">
              <p>Azione</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData
            // .filter((dividedData) => {
            //   return dividedData.id <= maxResNo;
            // })
            .map((singleData) => {
              const {
                id,
                struttura,
                tipoDocumento,
                descrizione,
                revisione,
                data,
                link,
              } = singleData;
              return (
                <tr key={id}>
                  <td className="px-5 col-3">
                    <p>{struttura}</p>
                  </td>
                  <td className="px-5 col-2">
                    <p>{tipoDocumento}</p>
                  </td>
                  <td className="px-5 col-1">
                    <p>{descrizione}</p>
                  </td>
                  <td className="px-5 col-1">
                    <p>{revisione}</p>
                  </td>
                  <td className="px-5 col-2">
                    <p>{data}</p>
                  </td>
                  <td className="px-5 col-3">
                    <a href={link} download>
                      <button>Scarica pdf</button>
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
};

export default ResultTable;
