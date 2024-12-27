"use client";

import { addProductValidationSchema } from "@/validation-schema/add.product.validation.schema";
import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

const AddProduct = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        brand: "",
        price: "",
        quantity: 1,
        category: "",
        freeShipping: false,
        description: "",
      }}
      validationSchema={addProductValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="'auth-form min-w-[450]"
          >
            <Typography variant="h3" color="secondary">
              Add product
            </Typography>
            <FormControl fullWidth>
              <TextField
                label="Product Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              ) : null}
            </FormControl>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddProduct;
