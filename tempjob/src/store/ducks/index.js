import { combineReducers } from "redux";

import jobOpportunity from "./jobOpportunity";
import user from "./user";
import theme from "./theme";
import jobApplication from "./jobApplication";
import jobHistory from "./jobHistory";

export default combineReducers({
  jobOpportunity, user, theme, jobApplication, jobHistory
});
