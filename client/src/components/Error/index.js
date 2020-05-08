import React, { useEffect, useState } from 'react';
import './Error.css'
import { connect } from 'react-redux';
import { setError } from '../../actions';

const Error = function(props) {

  const { error } = props;
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    console.log('NOVO ERRO: ', error);
    if (error) {
      setVisible(true)
      setTimeout(() => {
        console.log('HI FROM TIMEOUT')
        setVisible(false);
        props.setError('');
      }, 5000)
    }
    return () => {

    } 
  }, [ props ])

  return ( visible ?
    <div className="Error">
      <p>{error}</p>
    </div> 
   : null )
}


const mapStateToProps = state => ({
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  setError: (error) => dispatch(setError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Error);
