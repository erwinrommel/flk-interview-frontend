import React from "react";
import { FieldRenderProps } from "react-final-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css"
import { isValid } from 'date-fns'

type Props = FieldRenderProps<string, any>;

const DateInput: React.FC<Props> = ({ name, input: { value, onChange } }) => {
    return (
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={value && isValid(value) ? new Date(value) : undefined}
        disabledKeyboardNavigation
        name={name}
        onChange={(date) => {
          if (isValid(date)) {
            onChange(date);
          } else {
            onChange(null);
          }
        }}
      />
    );
  };

export { DateInput };