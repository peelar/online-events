import React from 'react'
import { Button as CHButton } from '@chakra-ui/react'

const Button: typeof CHButton = (props) => {
  return <CHButton colorScheme="pink" {...props} />
}

export default Button
