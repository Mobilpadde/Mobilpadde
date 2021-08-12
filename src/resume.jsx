import s from "./resume.module.css";

export function Resume() {
  return (
    <div id={s.resume}>
      <codersrank-summary username="Mobilpadde"></codersrank-summary>
      <codersrank-skills-chart
        username="Mobilpadde"
        tooltip
      ></codersrank-skills-chart>
    </div>
  );
}
