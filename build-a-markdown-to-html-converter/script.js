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
