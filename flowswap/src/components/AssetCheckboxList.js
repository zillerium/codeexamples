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
          />
        ))}
      </Form>
    </div>
  );
};

export default AssetCheckboxList;
 




