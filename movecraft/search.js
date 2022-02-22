
function search(id) {
  const search = document.getElementById(`${id}-search`)
  const rows = document.getElementById(`${id}-table`).children;
  const input = search.value;

  // for all children of rows, set data to *their* children
  for (let i = 0; i < rows.length; i++) {
    let data = rows.item(i).children;

    for (let i = 0; i < data.length; i++) {
      let val = data.item(i)
      // if element is either a <th> or <input>, break.
      if (val.tagName === "TH" || val.tagName === "INPUT") {break;}
      // if child doesn't include input, hide
      if (!val.innerText.includes(input)) { data.item(i).style.display = 'none' }
      // if child does include input, show
      if (val.innerText.includes(input)) { data.item(i).style.display = 'table-cell' }
    }
  }
}