document
  .getElementById("advancedSearchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const queryInput = document.getElementById("searchQuery").value;

    let query = "";

    // Buscar coincidencias en el formato "all:", "exact:", "any:", "none:"
    const allWords = queryInput.match(/all:([^\"]+)( |$)/i);
    const exactPhrase = queryInput.match(/exact:"([^"]+)"/i);
    const anyWords = queryInput.match(/any:([^\"]+)( |$)/i);
    const noneWords = queryInput.match(/none:([^\"]+)( |$)/i);

    if (allWords) query += `${allWords[1].trim()} `;
    if (exactPhrase) query += `"${exactPhrase[1].trim()}" `;
    if (anyWords) query += `${anyWords[1].split(" ").join(" OR ")} `;
    if (noneWords) query += `-${noneWords[1].split(" ").join(" -")} `;

    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
        query.trim()
      )}`;
    }
    ("_blank");
  });
