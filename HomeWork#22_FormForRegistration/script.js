document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const tableContainer = document.getElementById('table-container');

    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function () {
        const formData = new FormData(form);
        const table = document.createElement('table');
        for (const [key, value] of formData.entries()) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = key;
            cell2.textContent = value;
        }
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
        tableContainer.style.display = 'block';
    });
});
