"use client";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as React from "react";

import { useFormState } from "react-dom";
import { login } from "@/lib/actions";
import { Alert } from "@mui/material";

const loginInitialState = {
  message: "",
  errors: {
    email: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);

  return (
    <Box component="form" action={formAction} noValidate sx={{ mt: 1 }}>
      {formState?.message && (
        <Alert severity="error">{formState.message}</Alert>
      )}
      <TextField
        error={!!formState?.errors.email}
        helperText={formState?.errors.email}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Username"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        error={!!formState?.errors.password}
        helperText={formState?.errors.password}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
