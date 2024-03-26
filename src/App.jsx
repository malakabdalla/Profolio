import { ThemeProvider } from "./contexts";
import PageWrapper from "./layouts/PageWrapper/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as Pages from "./pages";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
