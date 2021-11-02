import DisplayData from "./components/DisplayData";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styledComponents/GlobalStyles";
import { theme } from "./styledComponents/theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <DisplayData />
            </ThemeProvider>
        </>
    );
}

export default App;
