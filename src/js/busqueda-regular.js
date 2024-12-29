document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const query = document.getElementById("query").value;

  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    ("_blank");
  }
});

// https://www.google.com/search?q=${encodeURIComponent(query)}&sca_esv=95be9b4eddff4e70&hl=es-419&authuser=0&sxsrf=ADLYWII8Q_DYkUExRN3EsuxQvZRAv2MOqw:1730250934459&source=hp&biw=950&bih=912&ei=toghZ467GsKXkPIPm5HB6Ak&iflsig=AL9hbdgAAAAAZyGWxnvkR8ZljdFQdOs_td3kwsbHJVrF&ved=0ahUKEwiO7saC97SJAxXCC0QIHZtIEJ0Q4dUDCBA&uact=5&oq=${encodeURIComponent(query)}&gs_lp=EgNpbWciBW1hbmdvMgQQIxgnMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyBRAAGIAESIUrUPsGWIwgcAF4AJABAJgBxQKgAewFqgEHMi4yLjAuMbgBA8gBAPgBAYoCC2d3cy13aXotaW1nmAIGoAKCBqgCCsICBxAjGCcY6gLCAg4QABiABBixAxiDARiKBZgDBZIHBzIuMy4wLjGgB9Ye&sclient=img&udm=2

// https://www.google.com/imghp?hl=es-419&authuser=0&ogbl
