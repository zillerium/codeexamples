import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <div className="d-flex flex-row mx-3 w-100">
      {checkboxes.map((checkbox, index) => (
        <Form.Group key={index} className="mb-0">
          <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label={checkbox.label}
              checked={checkbox.checked}
              readOnly
              className="mr-3"
            />
            <span>{checkbox.label}</span>
          </div>
        </Form.Group>
      ))}
    </div>
  );
};

export default AssetCheckboxList;
