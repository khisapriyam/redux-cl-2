import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeBlue, makeGray, makeGreen, makeRed, makeYellow } from '../../redux/color/action';

const Colors = () => {

    const dispatch = useDispatch()

    const { food }  = useSelector(state => state); //food key diye dhortesi
  return (
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card counter">
                    <div className="card-body">
                        <button onClick={ () => dispatch(makeRed())}>RED</button>
                        <button onClick={ () => dispatch(makeGreen())} >GREEN</button>
                        <button onClick={ () => dispatch(makeYellow())}>YELLOW</button>
                        <button onClick={ () => dispatch(makeBlue())}>BLUE</button>
                        <button onClick={ () => dispatch(makeGray())}>GRAY</button>

                        <h1>{ food }</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colors