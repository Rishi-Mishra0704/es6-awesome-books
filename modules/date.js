const date = document.querySelector("#date-time");

import { DateTime } from "../node_modules/luxon/src/luxon.js";

 const timeCalc = () => {
  let time = setInterval(() => {
    const now = DateTime.utc().toJSDate().toLocaleString();
    date.innerHTML = now;
  }, 0.1);
};
export default timeCalc