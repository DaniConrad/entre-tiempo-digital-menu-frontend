import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { postProducts } from '../../../services/services';

const AdminUploadsProducts = () => {

    const [file, setFile] = useState()
    const [values, setValues] = useState({})
    const [act, setAct] = useState("visually-hidden")
    const [err, setErr] = useState("visually-hidden")

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleValidate = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('Products', file);
        let AXIOSconfig = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        postProducts(fd, AXIOSconfig, values)
            .then(res => { if (res.data === "success") return setAct("") })
            .catch(err => { if (err) return setErr("") })
    }

    return (
        <div>
            <Form onSubmit={ handleValidate } className="m-3">
                <Form.Group className="mb-1">
                    <Form.Control
                        type="file"
                        name='prodImg'
                        onChange={ handleFileChange }
                        className='login-form-input'
                    />
                </Form.Group>
                <Form.Group className="mb-1">
                    <Form.Control
                        type="password"
                        placeholder="Ingresa la clave."
                        onChange={ handleInputChange }
                        name='key'
                        className='login-form-input'
                    />
                </Form.Group>
                <Button className='btn-standard' type="submit">
                    Ingresar
                </Button>
            </Form>
            <p className={act}>¡Actualizado correctamente!</p>
            <p className={err}>¡Algo salió mal!</p>
            
        </div>

    )
}

export default AdminUploadsProducts