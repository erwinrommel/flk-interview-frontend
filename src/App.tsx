/* This file shows the usages of the input components */

// Instructions:
//   1. Convert entire project to typescript.
//   2. Add number, date, and multiline input fields to the existing form
//   3. Create an identical form with controlled state

import { Form, Field } from "react-final-form";
import {
  InputField,
  DateInput,
  MultiLineInput,
  NumberInput,
  TextInput,
} from "./components";
import "./App.css";

function App() {
  return (
    <Form onSubmit={(values) => window.alert(JSON.stringify(values))}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          <InputField label="Text field">
            <Field name="textField" component={TextInput} />
          </InputField>
          <InputField label="Number field">
            <Field name="numberField" component={NumberInput} />
          </InputField>
          <InputField label="Date field">
            <Field name="dateField" component={DateInput} />
          </InputField>
          <InputField label="MultiLine field">
            <Field
              name="multiLineField"
              render={(props) => <MultiLineInput {...props} rows={5} />}
            />
          </InputField>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
}

export default App;
