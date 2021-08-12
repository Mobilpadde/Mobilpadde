import { html } from "../README.md";

import s from "./letter.module.css";

const target = html.replace(/<a /gim, '<a target="_blank" ');

export function Letter() {
  return (
    <div className={s.md} dangerouslySetInnerHTML={{ __html: target }}></div>
  );
}
