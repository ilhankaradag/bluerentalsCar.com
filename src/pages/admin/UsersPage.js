import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Users from '../../components/admin/Users'
import PageHeader from '../../components/common/PageHeader'
import Spacer from '../../components/common/Spacer'

const UsersPage = () => {
  return (
    <>
      <PageHeader title="User Management" />
      <Spacer />
      <Container>
        <Users />
      </Container>
      <Spacer />
    </>
  )
}

export default UsersPage
