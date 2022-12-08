import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDevs } from '../../../redux/devs/action';

const Devs = () => {

    const [ input, setInput ] = useState({
        name : '',
        email :'',
        cell : ''
    })

    const dispatch = useDispatch();

    const { devs } = useSelector( state => state.devs )

    //state update
    const handleInputChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    //form submit
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(createDevs(input))  
    }

  return (
    <>
        <div className="devs">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2>All developers</h2>
                                <hr />
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Cell</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            devs.map( data => 
                                                <tr>
                                                    <td>1</td>
                                                    <td>{ data.name}</td>
                                                    <td>{ data.email}</td>
                                                    <td>{ data.cell}</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2>Add new devs</h2>
                                <hr />
                                <form action="" onSubmit={ handleFormSubmit }>
                                    <div className="my-3">
                                        <label htmlFor="">Name</label>
                                        <input name='name' ype="text"  className='form-control' value={input.name} onChange={ handleInputChange }/>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="Name">Email</label>
                                        <input name='email' type="text"  className='form-control' value={input.email} onChange={ handleInputChange }/>
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="Name">Cell</label>
                                        <input name='cell' type="text"  className='form-control'value={input.cell} onChange={ handleInputChange }/>
                                    </div>
                                    <div className="my-3">
                                        <button type='submit' className='btn btn-primary w-100'>Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Devs