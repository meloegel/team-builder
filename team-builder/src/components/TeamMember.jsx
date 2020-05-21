import React from 'react'

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your Team Member&apos;s details...</h3>
  }

  return (
    <div className='team-member container'>
      <h3>{details.name}</h3>
      <div id='memberDetails'>
      <p>Email: {details.email}</p>
      <p>Cohort: {details.cohort}</p>
      <p>Role: {details.role}</p>
      <p>Enrolled: {details.enrolled}</p>
      </div>
    </div>
  )
}
