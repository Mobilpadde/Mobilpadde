import moi from "./images/moi.jpeg";

import s from "./header.module.css";

export function Header() {
  return (
    <div id={s.header}>
      <span>
        <h1 className={s.name}>Mads Bram Cordes</h1>
        <h2 className={s.subtitle} data-title="Magical Full-stacker">
          Magical Full-stacker
        </h2>
      </span>

      <span className={s.me}>
        <img src={moi} />
      </span>
    </div>
  );
}
