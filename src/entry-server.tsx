import { renderToString } from "react-dom/server";
import App from "./App";

/** Renders the app to static markup for build-time prerendering. */
export const render = () => renderToString(<App />);
