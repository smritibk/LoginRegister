"use client";
import React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { loginUserValidationSchema } from "@/validation-schema/login.user.validation.schema";

const Login = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col max-w-[400px] shadow-2xl justify-between p-8 items-center shadow-black rounded-2xl"
            >
              <p className="text-red-950 text-2xl">Sign in</p>
              //? email
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  className="text-gray-300"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              //? password
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  className="text-gray-300 mb-4"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText>{formik.errors.password}</FormHelperText>
                ) : null}
              </FormControl>
              <Button
                sx={{ marginTop: "2rem" }}
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                signUp
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default Login;
