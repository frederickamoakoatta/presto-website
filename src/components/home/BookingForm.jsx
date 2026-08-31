import { useState } from 'react'
import { GUEST_OPTIONS } from '../../data/home'
import { NiceSelect } from '../ui/NiceSelect'

const initialValues = {
  name: '',
  email: '',
  guests: '1',
  date: '',
}

export function BookingForm() {
  const [values, setValues] = useState(initialValues)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setValues(initialValues)
  }

  return (
    <div className="form-box">
      <div className="icon">
        <i className="fas fa-utensils" />
      </div>
      <h3>Book a table</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <NiceSelect
                name="guests"
                value={values.guests}
                options={GUEST_OPTIONS}
                onChange={updateField}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                className="form-control"
                id="date"
                name="date"
                placeholder="Date"
                type="text"
                value={values.date}
                onChange={(event) => updateField('date', event.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" name="submit" id="submit">
              {submitted ? 'Booked' : 'Book Now'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
