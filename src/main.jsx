import CodersrankSummary from "@codersrank/summary";
import CodersRankSkillsChart from "@codersrank/skills-chart";

import { render } from "preact";

import { Header } from "./header";
import { Letter } from "./letter";
import { Resume } from "./resume";

window.customElements.define("codersrank-summary", CodersrankSummary);
window.customElements.define("codersrank-skills-chart", CodersRankSkillsChart);

render(<Header />, document.getElementById("header"));
render(<Letter />, document.getElementById("letter"));
render(<Resume />, document.getElementById("resume"));
