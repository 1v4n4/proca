import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

const extractTokens = (text) => {
  const r = /{{[a-z.]+}}/g;
  let tokens = [];
  let m;
  // eslint-disable-next-line
  while ((m = r.exec(text))) {
    tokens.push(m[0].substring(2, m[0].length - 2));
  }
  if (tokens.includes("name")) {
    tokens.push("firstname");
    tokens.push("lastname");
  }
  if (tokens.includes("target.name") || tokens.includes("target.salutation")) {
    tokens.push("targets");
  }
  return tokens;
};

const applyToken = (text, token, data, t) => {
  if (token.includes("name")) {
    data.name = (data.firstname || "") + " " + (data.lastname || "");
  }
  if (data.targets && data.targets.length > 0) {
    data.target = {};
    if (token.includes("target.name")) {
      data.target.name = data.targets.map((d) => d.name).join(", ");
    }
    if (token.includes("target.salutation")) {
      data.target.salutation = data.targets
        .map((d) => d.salutation || d.name)
        .join(", ");
    }
  }
  data.nsSeparator = false; // VERY IMPORTANT, otherwise it mangles any text containing ":"
  data.defaultValue = text; //very IMPORTANT too, fallback if the NS goes weird anyway
  return t(text, data);
};

const useToken = (text, data, handleChange) => {
  const token = extractTokens(text);
  const { t } = useTranslation();
  const [rendered, merge] = useState(text);
  useEffect(() => {
    const updated = applyToken(text, token, data, t);
    if (updated !== rendered) {
      handleChange && handleChange(updated);
      merge(updated);
    } // eslint-disable-next-line
  }, [handleChange, text, data, token]);

  return rendered;
};

export default useToken;
export { extractTokens, applyToken };
