import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const counter = useSelector( state => state.counter);
    const dispatch = useDispatch()

  return (
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card counter">
                    <div className="card-body">
                        <h1>{counter}</h1>
                        <button onClick={ () => dispatch({ type : 'INCREMENT'})} className='btn btn-success'>++</button>&nbsp;&nbsp;
                        <button onClick={ () => dispatch({ type : 'DECREMENT'})} className='btn btn-danger'>--</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter