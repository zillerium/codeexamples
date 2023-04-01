import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <Form>
      <div className="d-flex flex-wrap">
        {checkboxes.map((checkbox, index) => (
          <Form.Group key={index} className="mr-3">
            <Form.Check
              type="checkbox"
              label={checkbox.label}
              checked={checkbox.checked}
              readOnly
              className="d-inline-block align-middle"
              id={`checkbox-${index}`}
            />
          </Form.Group>
        ))}
      </div>
    </Form>
  );
};

export default AssetCheckboxList;
