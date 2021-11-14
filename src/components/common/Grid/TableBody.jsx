import React from 'react';

const tableBody = ({ dataSource, columns, onRowClick, clickable }) => {
  return (
    <tbody>
      { dataSource.length > 0 ?
        dataSource.map((dataItem, idx) => (
          <tr className='grid-row' style={ {cursor: clickable ? 'pointer' : 'default'} } onClick={e => clickable ? onRowClick(dataItem, e) : null} key={idx}>
            {
              columns.map((column, jdx) => <td key={idx+jdx} >
                {
                  column['field'] ? dataItem[column['field']] : column.content(dataItem, idx)
                }
              </td>)
            }
          </tr>
        )) :
        <tr>
          <td colSpan={columns.length}>No records</td>
        </tr>
      }
    </tbody>
  );
}
 
export default tableBody;