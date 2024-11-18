import React, { useState } from "react";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import Ajv from "ajv";

interface JsonEditorProps {
  onChange: (json: object) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [error, setError] = useState<string | null>(null);
  const ajv = new Ajv();

  const handleChange = (json: object) => {
    try {
      setError(null); // Clear error
      if (!ajv.validateSchema(json)) throw new Error("Invalid JSON Schema");
      onChange(json);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <Editor
        onChange={handleChange}
        mode="code"
        onValidationError={(errors) =>
          setError(errors.length ? "Invalid JSON Syntax" : null)
        }
      />
      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
    </div>
  );
};

export default JsonEditor;