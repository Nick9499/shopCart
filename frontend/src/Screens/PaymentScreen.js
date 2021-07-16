import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Col, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import CheckOutSteps from '../components/checkOutSteps'

const PaymentScreen = ({ history }) => {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart
    if (!shippingAddress) {
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckOutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form action="" onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">Select Method</Form.Label>

                    <Col>
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            label="Paypal or Credit Card"
                            value="paypal"
                            id="Paypal"
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                    </Col>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
