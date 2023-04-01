import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <Form>
      {checkboxes.map((checkbox, index) => (
        <Form.Group key={index} className="mr-3">
          <Form.Check
            type="checkbox"
            label={checkbox.label}
            checked={checkbox.checked}
            readOnly
            className="d-inline-block align-top ml-2"
            id={`checkbox-${index}`}
          />
        </Form.Group>
      ))}
    </Form>
  );
};

export default AssetCheckboxList;
