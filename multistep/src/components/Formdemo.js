import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import {Formik, Form, Field} from "formik";
import {CheckboxWithLabel, TextField} from "formik-material-ui";
const Formdemo = () => {
  return (
    <Card>
      <Formik>
        <Form>
          <Field name="firstName" component={TextField} />
        </Form>
      </Formik>
    </Card>
  );
};

export default Formdemo;
