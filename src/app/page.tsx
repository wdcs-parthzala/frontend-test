import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import theme from "@/theme";
import {Logo} from "@/app/components/Logo";
import {Card, CardContent} from "@mui/material";
import LoginForm from "@/app/components/LoginForm";
import Box from "@mui/material/Box";


export default function SignIn() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    className="flex flex-col justify-center items-center gap-8"
                    style={{minHeight: '100vh'}}
                >

                    <Logo/>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <LoginForm />
                        </CardContent>
                    </Card>

                </Box>
            </Container>
        </ThemeProvider>
    );
}