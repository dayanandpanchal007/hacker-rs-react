import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { pages, currentPage, pageChange } = this.props;

    return (
      <nav aria-label="pagination">
        <ul className="pagination">
          { pages.length > 1 ?
            pages.map((page) => (
              <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a className="clickable page-link" onClick={pageChange.bind(this, page)}>{page}</a>
              </li>
            )) : <React.Fragment />
          }
        </ul>
      </nav>
    );
  }
}
 
export default Pagination;