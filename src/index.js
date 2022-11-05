import React from 'react'
import styles from './styles.module.css'
import TextField from '@mui/material/TextField'

export default function ExampleComponent(props) {
  return <TextField dir='rtl' className={styles.textfieldRtl} {...props} />
}
