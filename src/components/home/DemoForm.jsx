import { useState } from 'react'
import { BRANCH_OPTIONS, FINAL_CTA } from '../../data/home'
import { NiceSelect } from '../ui/NiceSelect'

const initialValues = {
  name: '',
  email: '',
  branches: '1',
  message: '',
}

export function DemoForm() {
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
    <div className="cta-form-card">
      <h3>{FINAL_CTA.primary}</h3>
      <form onSubmit={handleSubmit}>
        <div className="cta-field-row">
          <label className="cta-field" htmlFor="name">
            <span>Name</span>
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
              value={values.name}
              onChange={(event) => updateField('name', event.target.value)}
              required
            />
          </label>
          <label className="cta-field" htmlFor="email">
            <span>Email</span>
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="you@restaurant.com"
              type="email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
              required
            />
          </label>
        </div>

        <label className="cta-field">
          <span>Number of branches</span>
          <NiceSelect
            name="branches"
            value={values.branches}
            options={BRANCH_OPTIONS}
            onChange={updateField}
          />
        </label>

        <label className="cta-field" htmlFor="message">
          <span>How can we help?</span>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="Tell us about your restaurant"
            rows={4}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
          />
        </label>

        <button type="submit" className="btn btn-theme effect btn-md">
          {submitted ? 'Request sent' : FINAL_CTA.secondary}
        </button>
        {submitted ? <p className="cta-form-success">Thanks — we’ll be in touch shortly.</p> : null}
      </form>
    </div>
  )
}
