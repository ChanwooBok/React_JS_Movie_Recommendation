import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import Detail from './router/Detail';
import Group from './router/Group';
import Home from "./router/Home";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/page/:group/:page`} element={<Group />} />
          <Route path={`/movie/:id`} element={<Detail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
