function sortTable(columnIndex) {
  const table = document.getElementById('dataTable');
  const rows = Array.from(table.rows).slice(1); 

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      
      return parseFloat(cellA) - parseFloat(cellB);
    } else {
      
      return cellA.localeCompare(cellB);
    }
  });

  
  rows.forEach(row => table.tBodies[0].appendChild(row));
}
