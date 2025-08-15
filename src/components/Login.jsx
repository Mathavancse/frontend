import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as log } from "../services";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    try {
      const res = await log(payload);
      console.log(res);
      localStorage.setItem("token", res?.data);
      navigate("/protected");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #74ABE2, #5563DE)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2} align="center">
          Loginlogin
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#5563DE",
                "&:hover": { backgroundColor: "#3e4fb1" },
                py: 1.2,
              }}
            >
              Submit
            </Button>

            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link to="/register" style={{ color: "#5563DE" }}>
                Register login
              </Link>
            </Typography>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
