function getJsBasicsKeywordMeaning(term) {
  const keywords = {
    node: "runtime",
    v8: "engine",
    null: "intentional absence of value",
    undefined: "default unassigned value",
    typeof: "type checker",
    let: "block scoped variable",
    const: "constant binding",
  };

  const normalizedTerm = term.trim().toLowerCase();

  return keywords[normalizedTerm] || "unknown";
}
