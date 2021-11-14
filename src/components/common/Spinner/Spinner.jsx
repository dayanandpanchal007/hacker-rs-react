import React from 'react';
import ReactDOM from 'react-dom'

import './Spinner.css';

const Spinner = () => {
  return ReactDOM.createPortal(<div className='wrapper'>
  <div className='spinner'></div>
</div>, document.getElementById('root'));
}
 
export default Spinner;
