import React, { Component } from 'react';
import _ from 'lodash';

import TableHead from './TableHead';
import TableBody from './TableBody';
import Pagination from './Pagination';

class Grid extends Component {

  paginate = (pagination, ds, currentPage, skip) => {
    skip = pagination ? skip : ds.length;
    currentPage = pagination ? currentPage : 1
    const startIndex = (currentPage - 1) * skip;
    return _(ds).slice(startIndex).take(skip).value();
  }

  getPages = (ds, skip) => {
    const pageCount = Math.ceil(ds.length / skip);
    return _.range(1, pageCount + 1);
  }

  getSortedData = () => {
    const { dataSource, sortColumn, sortable } = this.props;
    return sortable ? _.orderBy(dataSource, [sortColumn.field], [sortColumn.order]) : dataSource;
  }

  render() {
    const { dataSource: ds, columns, clickable, onRowClick, pagination, pageChange, sortable, sortColumn, onSort } = this.props;
    let {skip, currentPage} = this.props;
    const pages = this.getPages(ds, skip);
    const sortedData = this.getSortedData();
    const dataSource = this.paginate(pagination, sortedData, currentPage, skip);
    return (
      <div className="grid">
        <table className="table table-striped table-hover">
          <TableHead columns={columns} dataSource={dataSource} sortable={sortable} sortColumn={sortColumn} onSort={onSort} />
          <TableBody dataSource={dataSource} columns={columns} onRowClick={onRowClick} clickable={clickable} />
        </table>
        {
          pagination ?
          <Pagination 
            pages={pages}
            currentPage={currentPage}
            pageChange={pageChange}
          /> : <React.Fragment />
        }
      </div>
    );
  }
}
 
export default Grid;
