/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { InputLabel, Input } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";

export default function TextField({ labelText, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mt-10 ">
      <InputLabel>{labelText}</InputLabel>
      <div>
        <Input {...props} {...field} />
      </div>
      <div>
        <ErrorMessage
          name={field.name}
          component="span"
          className="text-red-400"
        />
      </div>
    </div>
  );
}
