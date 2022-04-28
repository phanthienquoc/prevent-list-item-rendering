import { ThemeProvider as Provider } from "@mui/material/styles";

import defaultTheme from './themes';

const ThemeProvider = ({ children }) => {
    return (
        <Provider theme={defaultTheme}>
            {children}
        </Provider>
    )
}

export default ThemeProvider;