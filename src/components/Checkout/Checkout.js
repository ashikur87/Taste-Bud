import React, { useState } from 'react';
import './Checkout.css'

const Checkout = () => {
    const [data, setData] = useState({
        road: '',
        flat: '',
        phone: '',
        massage: ''
    })

    const handleBlur = (e) => {
        let formData = {
            road: '',
            flat: '',
            phone: '',
            massage: ''
        }
        if (e.target.name === 'road') {
            console.log(e.target.value)
            formData = {
                ...data,
                road: e.target.value,
            }
            setData(formData)
        }
        if (e.target.name === 'flat') {
            formData = {
                ...data,
                flat: e.target.value,
            }
            setData(formData)
        }
        if (e.target.name === 'phone') {
            formData = {
                ...data,
                phone: e.target.value,
            }
            setData(formData)
        }
        if (e.target.name === 'massage') {
            formData = {
                ...data,
                massage: e.target.value,
            }
            setData(formData)
        }
    }
    const handleSubmit = () => {
        fetch('http://localhost:9000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order is Placed successfully. Happy Meal!')
                }
            })
    }
    return (
        <div className='checkout-section'>
            <h2 className='edit-delivery'>Edit Delivery</h2>
            <form className='form'onSubmit={handleSubmit} >
                <input className='text' onBlur={handleBlur} name='road' type="text" placeholder='Road No' required></input>
                <br />
                <br />
                <input className='text' onBlur={handleBlur} name='flat' type="text" placeholder='Flat, suite or floor' required></input>
                <br />
                <br />
                <input className='text' onBlur={handleBlur} name='phone' type="text" placeholder='Phone Number' required></input>
                <br />
                <br />
                <textarea className='txt-msg' onBlur={handleBlur} name='massage' type="text" name="massage" placeholder='Add delivery instruction' required></textarea>
                <br />
                <br />
                <input className='checkout-btn' type="submit" value="Place Order"></input>
            </form>
        </div>

    );
};

export default Checkout;