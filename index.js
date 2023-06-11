// function sortTable(columnIndex) {
//     let table, rows, switching, i, x, y, shouldSwitch;
//     table = document.getElementById("myTable");
//     switching = true;

//     while (switching) {
//       switching = false;
//       rows = table.rows;

//       for (i = 1; i < (rows.length - 1); i++) {
//         shouldSwitch = false;
//         x = rows[i].getElementsByTagName("td")[columnIndex];
//         y = rows[i + 1].getElementsByTagName("td")[columnIndex];

//         if (columnIndex === 2) {
//           if (Number(x.innerHTML) > Number(y.innerHTML)) {
//             shouldSwitch = true;
//             break;
//           }
//         } else {
//           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//             shouldSwitch = true;
//             break;
//           }
//         }
//       }

//       if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//       }
//     }
//   } 

function sortTable(columnIndex) {
  const table = document.getElementById('dataTable');
  const rows = Array.from(table.rows).slice(1); // Пропускаємо заголовок таблиці

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      // Сортування числових значень як чисел
      return parseFloat(cellA) - parseFloat(cellB);
    } else {
      // Сортування рядків
      return cellA.localeCompare(cellB);
    }
  });

  // Очистка таблиці
  rows.forEach(row => table.tBodies[0].appendChild(row));
}
