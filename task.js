fetch("https://workwithus.lucioai.com/access-check", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmVlbGltYSIsImVtYWlsIjoibmVlbGltYWFra2lyYWp1MjAwMUBnbWFpbC5jb20iLCJkYXRlIjoiMjAyNS0wNC0wMSAxMDoxODoyMCJ9.InmXyR14TA4EbrJ3hF7fbXvKjERX67UrEQzZzC75sXE"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  
  