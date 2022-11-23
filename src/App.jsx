/* This file shows the usages of the input components */

// Instructions:
//   1. Convert entire project to typescript.
//   2. Add number, date, and multiline input fields to the existing form
//   3. Create an identical form with controlled state

import { Form } from "react-final-form";
import { TextField } from "./Input";
import "./App.css";

function App() {
  return (
    <Form onSubmit={values => window.alert(JSON.stringify(values))}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="form">
          <TextField label="Text field" name="textField" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
}

export default App;
