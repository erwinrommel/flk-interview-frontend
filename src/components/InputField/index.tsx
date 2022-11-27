import { Field, FieldRenderProps } from "react-final-form";
import "./InputField.css";

type Props = {
  label: string;
  children: JSX.Element;
};

const InputField: React.FC<Props> = ({ label, children }) => (
  <div className="input-container">
    <label>{label}</label>
    {children}
  </div>
);

export { InputField };
