import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import SearchField from "./components/SearchField";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Header animationPath="/86558-in-peace.json" />
        <SearchField />
      </Container>
    </>
  );
}

export default App;
