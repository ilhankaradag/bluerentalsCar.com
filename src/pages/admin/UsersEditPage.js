import React from 'react'
import { Container } from 'react-bootstrap'
import UserEdit from '../../components/admin/UserEdit'
import PageHeader from '../../components/common/PageHeader'
import Spacer from '../../components/common/Spacer'

const UsersEditPage = () => {
  return (
    <>
      <PageHeader title="User Management" />
      <Spacer />
      <Container>
        <UserEdit />
      </Container>
      <Spacer />
    </>
  )
}

export default UsersEditPage
