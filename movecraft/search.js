
function search(id) {
  const search = document.getElementById(`${id}-search`)
  const rows = document.getElementById(`${id}-table`).children;
  const input = search.value;

    for (let i = 0; i < rows.length; i++) {
      let val = rows.item(i)
      // if element is a <h3> or <input>, break.
      if (val.tagName === "H3" || val.tagName === "INPUT") {continue}
      // if child doesn't include input, hide
      if (!val.innerText.includes(input)) { val.style.display = 'none' }
      // if child does include input, show
      if (val.innerText.includes(input)) { val.style.display = 'inline-block' }
    }
}