import React from 'react'

const columns = [
  {
    Header: 'Company Name',
    accessor: 'company',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Request type',
    accessor: 'type',
  },
  {
    Header: 'Created at',
    accessor: 'created',
  }
]

export default function table() {
  return (
    <div>table</div>
  )
}
