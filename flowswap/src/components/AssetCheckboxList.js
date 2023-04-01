import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <div className="d-flex flex-wrap mx-3 w-100">
      {checkboxes.map((checkbox, index) => (
        <Form.Group key={index} className="mb-0 w-100">
          <div className="d-flex align-items-center justify-content-end">
            <Form.Check
              type="checkbox"
              label={checkbox.label}
              checked={checkbox.checked}
              readOnly
              className="ml-3"
            />
          </div>
        </Form.Group>
      ))}
    </div>
  );
};

export default AssetCheckboxList;
