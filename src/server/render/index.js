const render = (html) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Mercadolibre</title>

        <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
      </head>
      <body>
        ${html}
        <script src="assets/app.js" type="text/javascript"></script>
        <script src="assets/vendor.js" type="text/javascript"></script>
      </body>
    </html>
  `;
};

export default render;
