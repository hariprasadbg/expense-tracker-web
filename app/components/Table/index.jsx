import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/Table.scss';

const Table = ({ categories }) => (
  <div className="table-container">
    <div className="table-container-head">
      <table>
        <thead>
          <tr className="head">
            <th className="column1">Id</th>
            <th className="column2">Name</th>
            <th className="column3">Created Type</th>
          </tr>
        </thead>
      </table>
    </div>

    <div className="table-container-body">
      <table>
        <tbody>
          {categories.map(category => (
            <tr className="body" key={category.id}>
              <td className="column1" title={category.id}>{category.id}</td>
              <td className="column2" title={category.name}>{category.name}</td>
              <td className="column3" title={category.type}>{category.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

Table.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Table;
