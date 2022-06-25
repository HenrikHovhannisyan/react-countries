import React from "react";
import { Alert } from "@mui/material";

const ErrorMessage = ({ message }) => {
    return (
        <Alert severity="error" sx={{ marginBottom: 0.5 }}>
            {message}
        </Alert>
    );
};

export default ErrorMessage;
