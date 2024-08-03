import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Globalstyles from "./components/Globalstyles";
import { ThemeProvider } from "./ThemContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId ='811222267510-rb250kva0brv95mdloffo6tu3pt0917a.apps.googleusercontent.com';
root.render(
  <Globalstyles>
    <ThemeProvider>
    <GoogleOAuthProvider clientId={clientId}>
        <App/>
    </GoogleOAuthProvider>,
    </ThemeProvider>
  </Globalstyles>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
