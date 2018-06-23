import React from 'react'
import { compose } from 'recompose'

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

// import DatePickerInput from "./DatePickerInput";
import DateTimePickerPlay from './DateTimePickerPlay'

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <Field
          name="data"
          component={DateTimePickerPlay}
          fullWidth
          label="Data"
          placeholder="Data"
          autoOk
          animateYearScrolling={false}
        />
      </form>)
  }

}


const mapStateToProps = state => ({})

export default compose(
  reduxForm({
    form: 'form',
  }),
  connect(mapStateToProps)
)(MyForm)
