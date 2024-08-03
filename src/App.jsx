import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Form, Main } from "./components/pages";
import { BGProvider } from "./context/BGcontext";

function App() {
  return (
    <>
      <BrowserRouter>
        <BGProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="appointment" element={<Form />} />
            </Route>
          </Routes>
        </BGProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
