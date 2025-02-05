import "./base.css";

import { checkLocalStorage } from "./scripts/utils";

import initial from "./scripts/initial";
import handleDates from "./scripts/handle-dates";
import handleDialog from "./scripts/handle-dialog";
import handleSidebar from "./scripts/handle-sidebar";

if (checkLocalStorage("projects")) initial();

handleDates();
handleDialog();
handleSidebar();
