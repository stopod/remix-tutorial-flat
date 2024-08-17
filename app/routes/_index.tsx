import { Form } from "@remix-run/react";

export const loader = () => {
  console.log("loader test");
  return null;
};

export default function Index() {
  return (
    <p id="index-page">
      これはRemixのデモです。
      <br />
      <a href="https://remix.run">remix.runのドキュメント</a>をご覧ください。
      <Form navigate={false}>
        <button type="submit">sample button</button>
      </Form>
    </p>
  );
}
