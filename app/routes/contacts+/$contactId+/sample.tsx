import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  return redirect("/");
};
