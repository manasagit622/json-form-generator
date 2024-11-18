import React from "react";
import { Form, IChangeEvent } from "@rjsf/mui";

interface DynamicFormProps {
  schema: object;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const handleSubmit = (data: IChangeEvent) => {
    console.log("Form submitted with data:", data.formData);
  };

  return (
    <div style={{ padding: "1rem", overflowY: "auto" }}>
      <Form schema={schema} onSubmit={handleSubmit} />
    </div>
  );
};

export default DynamicForm;