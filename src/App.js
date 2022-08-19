import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { prefixer } from "stylis";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import Landing from "./pages/landing/Landing";
import Loading from "./component/loading/Loading";
import NotFound from "./pages/error/NotFound";
import PanelPersonal from "./pages/panelPersonal/PanelPersonal";
import PanelAdmin from "./pages/panelAdmin/PanelAdmin";
import PanelOrganization from "./pages/panelOrganization/PanelOrganization";
import Login from "./pages/landing/login/Login";
import Package from "./pages/landing/package/Package";
import Contact from "./pages/landing/contact/Contact";
import StructureOrganization from "./component/structureOrganization/StructureOrganization";

const theme = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<Router className="App">
					<Routes>
						<Route exact path="/" element={<Landing />} />
						<Route path="/admin/*" element={<PanelAdmin />} />
						<Route path="/user/*" element={<PanelPersonal />} />
						<Route path="/organization/*" element={<PanelOrganization />} />
						<Route path="/structure" element={<StructureOrganization />} />
						<Route path="/login/*" element={<Login />} />
						<Route path="/package" element={<Package />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/loading" element={<Loading />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
