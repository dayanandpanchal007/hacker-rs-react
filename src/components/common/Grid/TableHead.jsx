import React, { Component } from 'react';

class TableHead extends Component {

  handleSort = field => {
    const sortColumn = { ...this.props.sortColumn };
    if (this.props.sortable) {
      if (sortColumn.field === field) {
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
      } else {
        sortColumn.field = field;
        sortColumn.order = 'asc';
      }
      this.props.onSort(sortColumn);
    }
  }

  renderSortIcon = column => {
    const { dataSource, sortColumn, sortable } = this.props;
    const shouldSort = sortable && dataSource && dataSource.length > 0 && column.field === sortColumn.field;
    if (shouldSort) {
      return sortColumn.order === 'asc' ? <i className="fa fa-long-arrow-up"></i> : <i className="fa fa-long-arrow-down"></i>;
    }
  }
  
  render() {
    const { columns, sortable } = this.props;
    return (
      <thead className="thead-dark">
        <tr>
          {
            columns.map(column => (
              <th className={sortable ? 'clickable' : ''} style={ { width: column.width || 'auto' } } key={column.id} scope="col" onClick={() => this.handleSort(column.field)} >
                {column.title}{" "}{this.renderSortIcon(column)}
              </th>
            ))
          }
        </tr>
      </thead>
    );
  }
}
 
export default TableHead;