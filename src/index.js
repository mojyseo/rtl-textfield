import React from 'react'
import styles from './styles.module.css'
import TextField from '@material-ui/core/TextField'

export default function ExampleComponent(props) {
  return (
    <TextField
      dir='rtl'
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      classes={props.classes}
      color={props.color}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      error={props.error}
      FormHelperTextProps={props.FormHelperTextProps}
      fullWidth={props.fullWidth}
      helperText={props.helperText}
      id={props.id}
      InputLabelProps={props.InputLabelProps}
      inputProps={props.inputProps}
      InputProps={props.InputProps}
      inputRef={props.inputRef}
      label={props.label}
      margin={props.margin}
      multiline={props.multiline}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
      rows={props.rows}
      rowsMax={props.rowsMax}
      select={props.select}
      SelectProps={props.SelectProps}
      size={props.size}
      type={props.type}
      value={props.value}
      variant={props.variant}
      className={styles.textfieldRtl}
    />
  )
}
