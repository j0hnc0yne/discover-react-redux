import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListRow from './ListRow';
import * as lodash from 'lodash';

export default class PayeesList extends Component {
  render() {
    const { columnConfig, data, selectRow, sortData } = this.props;
    const fields = columnConfig.map(config => config.field);

    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            {columnConfig.map(config => (
              <ListHeader
                config={config}
                sortData={sortData}
                key={config.field}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(payee => (
            <ListRow
              selectRow={selectRow}
              fields={fields}
              row={payee}
              key={payee.id}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export function ListHeader({ config, sortData }) {
  const label = config.label || lodash.startCase(config.field);
  return <th onClick={() => sortData(config.field)}>{label}</th>;
}

PayeesList.propTypes = {
  data: PropTypes.array.isRequired,
  // columnConfig: PropTypes.object.isRequired,
  columnConfig: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      label: PropTypes.string,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  selectRow: PropTypes.func,
  sortData: PropTypes.func,
};
