document
  .getElementById("imageSearchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const _query = document.getElementById("imageQuery").value;

    if (_query) {
      window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
        _query
      )}`;
    }
  });
