import type { LinksFunction, MetaFunction } from "@remix-run/node";

import tailwindstyles from "./tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Dev Demo",
  viewport: "width=device-width,initial-scale=1",
});


// https://remix.run/api/app#links
export const links = () => {
  return [
    { rel: "stylesheet", href: tailwindstyles }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
