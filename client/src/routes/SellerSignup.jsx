import React from 'react'
import {Form, Button} from "react-bootstrap"

const formFields = [
  {
    type: "hidden",
    placeholder: "",
    name:"s-uid",
    required: true,
    value: 
  },
  {
    type: "text",
    placeholder: "Your Name",
    name:"s-name",
    required: true
  },
  {
    type: "email",
    placeholder: "Your Email",
    name:"s-email",
    required: true
  },
  {
    type: "number",
    placeholder: "09xxxxxxxxx",
    name: "s-phone",
    required: true
  },
  {
    type: "text",
    placeholder: "Address 1",
    name: "s-address1",
    required: true
  },
  {
    type: "text",
    placeholder: "Address 2",
    name: "s-address2",
    required: false
  }
]

export default function SellerSignup() {
  return (
    <Form>
      {formFields.map(field => {
        return <>
          <Form.Group className="mb-3">
            <Form.Control type={field.type} placeholder={field.placeholder} name={field.name} required={ field.required }/>
          </Form.Group>
        </>
      })}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>





  )
}
