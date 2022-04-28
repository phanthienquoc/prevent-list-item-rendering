
import { createTheme } from "@mui/material/styles";


let theme = createTheme({
    palette: {
        primary: {
            main: '#2E90FA',
        },
        secondary: {
            main: '#f44336',
        },
        dark: {
            main: '#98A2B3'
        }
    },
});

theme = createTheme(theme, {
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'dark' },
                    style: {
                        color: theme.palette.dark,
                        textTransform: 'none',
                        border: "none",
                    },
                },
                {
                    props: { variant: 'dark', color: 'primary' },
                    style: {
                        color: theme.palette.primary.main,
                        border: "none",
                    },
                },
                {
                    props: { variant: 'dark', color: 'secondary' },
                    style: {
                        color: theme.palette.primary.secondary,
                        border: "none",
                    },
                },
                {
                    props: { variant: 'dark', color: 'dark' },
                    style: {
                        color: theme.palette.dark.main,
                        border: "none",
                    },
                },
            ],
        },
    },
    typography: {
        dark: {
            color: theme.palette.dark.main
        },
    },
});


export default theme;