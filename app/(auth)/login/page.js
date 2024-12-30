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
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              "http://localhost:8080/user/login",
              values
            );

            window.localStorage.setItem("token", response?.data?.accessToken);
            window.localStorage.setItem(
              "firstName",
              response?.data?.userDetails?.firstName
            );
            window.localStorage.setItem(
              "role",
              response?.data?.userDetails?.role
            );
            router.push("/");
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="auth-form">
              <p className="text-red-950 text-2xl">Sign in</p>
              //? email
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              //? password
              <FormControl fullWidth>
                <TextField
                  label="Password"
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
              <div>
                <Link href="/register" className="text-red-950">
                  New here? Register
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default Login;
