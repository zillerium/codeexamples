import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <div>
      <Form inline>
        {checkboxes.map((checkbox, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={checkbox.label}
            checked={checkbox.checked}
            readOnly
            style={{ display: "flex", alignItems: "center" }}
            id={`checkbox-${index}`}
            labelClassName="mr-3"
          />
        ))}
      </Form>
    </div>
  );
};

export default AssetCheckboxList;
