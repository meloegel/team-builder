import React from 'react'

export default function TeamMemberForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='forms submit'>
        <h2>Add Team Member</h2>
        <button>submit</button>
      </div>
      <div className='forms inputs'>
        <h4>Team Member Information</h4>
        <label>Name:&nbsp;
          <input
            type='text'
            placeholder='Type a name'
            maxLength='20'
            name='name'
            value={values.name}
            onChange={onInputChange}
          />
        </label>
        <label>Email:&nbsp;
          <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>
        <label>Cohort:&nbsp;
          <input
            type='text'
            placeholder='Type cohort'
            maxLength='10'
            name='cohort'
            value={values.cohort}
            onChange={onInputChange}
          />
        </label>
        <label>Role:&nbsp;
          <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='Student'>Student</option>
              <option value='Instructor'>Instructor</option>
              <option value='Alumni'>Alumni</option>
              <option value='TL'>TL</option>
          </select>
        </label>
        <label>Enrolled:&nbsp;
          <input
            type='checkbox'
            id='enrolled'
            name='enrolled'
            value='yes'
            onChange={onInputChange}
          />
        </label>
      </div>
    </form>
  )
}
