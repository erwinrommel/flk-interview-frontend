import React from "react";
import { FieldRenderProps } from "react-final-form";
import "./MultiLineInput.css";

type Props = FieldRenderProps<string, any>;

const MultiLineInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => {
  console.log(rest, input);
  return <textarea {...input} {...rest} />;
};

export { MultiLineInput };
