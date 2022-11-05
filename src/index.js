import React from 'react'
import styles from './styles.module.css'
import TextField from '@material-ui/core/TextField'

export default function ExampleComponent(props) {
  return (
    <TextField
      dir='rtl'
      className={styles.textfieldRtl}
      {...props}
    />
  )
}
