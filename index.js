function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[columnIndex];
        y = rows[i + 1].getElementsByTagName("td")[columnIndex];

        if (columnIndex === 2) {
          // Сортування числових значень як числа
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else {
          // Сортування рядкових значень
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }

      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  } 