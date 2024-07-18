import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import theme from "@/theme";
import {mainListItems} from "@/app/(authenticated)/listItems";
import {AppBar, Drawer} from "@/app/components/AppBar";
import {Logo} from "@/app/components/Logo";
import Button from "@mui/material/Button";
import {auth} from "@/auth";
import {logout} from "@/lib/actions";

export default async function AuthenticatedLayout({children}: Readonly<{children: React.ReactNode;}>) {
    const session = await auth();
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={true}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            Welcome {session?.user?.firstName}
                        </Typography>
                        <form
                            action={logout}
                        >
                            <Button type="submit" color="inherit">
                                Logout
                            </Button>
                        </form>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={true}>
                    <Box className="flex justify-center my-4">
                        <Logo />
                    </Box>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"

                >
                    <Toolbar />
                    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                        {children}
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}