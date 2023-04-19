import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { postProducts } from '../../../services/services';

const AdminUploadsProducts = () => {

    const [file, setFile] = useState()

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }


    const handleValidate = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('Products', file);
        console.log(file);
        let AXIOSconfig = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        postProducts(fd, AXIOSconfig)
            .then(res => { console.log(res);})
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleValidate} className="m-3">
            <Form.Group className="mb-1">
                <Form.Control
                    type="file"
                    name='prodImg'
                    onChange={handleFileChange}
                    className='login-form-input'
                />
            </Form.Group>
            <Button className='btn-standard' type="submit">
                Ingresar
            </Button>
        </Form>
    )
}

export default AdminUploadsProducts