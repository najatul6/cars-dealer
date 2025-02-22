import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Bounce, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
import router from "./Routes/router";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              theme="colored"
              transition={Bounce}
            />
          </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);