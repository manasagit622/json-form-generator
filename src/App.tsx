import React, { useState } from "react";
import JsonEditor from "./components/JsonEditor";
import DynamicForm from "./components/DynamicForm";
import "./App.css";

const App: React.FC = () => {
  const [schema, setSchema] = useState<object>({
    title: "Dynamic Form",
    type: "object",
    properties: {
      name: { type: "string", title: "Name" },
      age: { type: "number", title: "Age" },
    },
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left-side JSON Editor */}
      <div style={{ flex: 1, borderRight: "1px solid #ccc" }}>
        <h2>JSON Editor</h2>
        <JsonEditor onChange={(json) => setSchema(json)} />
      </div>

      {/* Right-side Form */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <h2>Generated Form</h2>
        <DynamicForm schema={schema} />
      </div>
    </div>
  );
};

export default App;