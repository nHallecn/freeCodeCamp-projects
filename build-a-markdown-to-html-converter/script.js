** start of index.html **

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Markdown to HTML Converter</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Markdown to HTML Converter</h1>
    <div id="container">
        <div class="container">
            <h2>Markdown Input:</h2>
            <textarea id="markdown-input" placeholder="Enter your markdown here..."></textarea>
        </div>
        <div class="container">
            <h2>Raw HTML Output:</h2>
            <div id="html-output"></div>
        </div>
        <div class="container">
            <h2>HTML Preview:</h2>
            <div id="preview"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>

** end of index.html **

** start of styles.css **

* {
     box-sizing: border-box;
}
 body {
     font-family: Arial, sans-serif;
     padding: 20px;
}
 #markdown-input {
     width: 100%;
     height: 100px;
}
 #html-output, #preview {
     height: 100px;
     display: inline-block;
     width: 100%;
     border: 1px solid #ccc;
     padding: 10px;
     margin: auto;
     white-space: pre-wrap;
     background-color: #f9f9f9;
}
 @media (min-width: 600px) {
     #markdown-input, #html-output, #preview {
         height: 200px;
         margin: 0;
    }
     #container {
         display: flex;
         justify-content: space-evenly;
         gap: 10px;
    }
}

** end of styles.css **

** start of script.js **

function convertMarkdown() {
  const input = document.getElementById("markdown-input").value;

  let html = input
    .replace(/^(?:\s*)### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^(?:\s*)## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^(?:\s*)# (.+)$/gm, "<h1>$1</h1>")

    .replace(/^(?:\s*)> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
    .replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
  document.getElementById("html-output").textContent = html;
  document.getElementById("preview").innerHTML = html;

  return html;
}

document.getElementById("markdown-input").addEventListener("input", convertMarkdown);


** end of script.js **

