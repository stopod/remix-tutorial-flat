import type { LinksFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import appStylesHref from "./app.css?url";
// import "./tailwind.css";
import { getContacts, createEmptyContact } from "./data";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: appStylesHref }];

export const loader = async () => {
  const contacts = await getContacts();
  return json({ contacts });
};

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { contacts } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            {/* 検索窓 */}
            <Form id="search-form" role="search">
              <input aria-label="Search contacts" id="q" name="q" placeholder="Search" type="search" />
              <div aria-hidden hidden={true} id="search-spinner" />
            </Form>
            {/* 追加 */}
            <Form method="post">
              {/* POSTされたらactionの処理が走って再レンダリングされる */}
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>名前なし</i>
                      )}{" "}
                      {contact.favorite ? <span>★</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>連絡先がありません</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
