import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css';
import TeamMember from './TeamMember'
import TeamMemberForm from './TeamMemberForm'

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'Mark',
    email: 'Mark@Mark.com',
    cohort: 'Web31',
    role: 'Student',
    enrolled: 'yes',
  },
  {
    id: uuid(),
    name: 'Billy',
    email: 'Billy@Billy.com',
    cohort: 'Web30',
    role: 'Student',
    enrolled: 'yes',
  },
  {
    id: uuid(),
    name: 'Sally',
    email: 'Sally@Sally.com',
    cohort: 'Web29',
    role: 'Student',
    enrolled: 'no',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  cohort:'',
  role: '',
  enrolled: 'no',
}



export default function App() {
const [teamMembers, setTeamMember] = useState(initialTeamMembers)
const [formValues, setFormValues] = useState(initialFormValues)

const onInputChange = evt => {
  const { name } = evt.target
  const { value } = evt.target
  setFormValues({ ...formValues, [name]: value })
}
const onSubmit = evt => {
  evt.preventDefault()
  if (
    !formValues.name.trim() ||
    !formValues.email.trim() ||
    !formValues.cohort.trim() ||
    !formValues.role.trim()
  ) {
    return
  }
  const newTeamMember = { ...formValues, id: uuid() }
  setTeamMember([ newTeamMember, ...teamMembers ])
  setFormValues(initialFormValues)
}


return (
  <div className='container'>
    <header><h1>Team Members</h1></header>
    <TeamMemberForm
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />

    {
      teamMembers.map(teamMember => {
        return (
          <TeamMember key={teamMember.id} details={teamMember} />
        )
      })
    }
  </div>
)
  }