function loadData() {
    const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const dataList = document.getElementById('data-list');

    if (dataList) {
        dataList.innerHTML = '';
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            dataList.appendChild(li);
        });
    }
}

// Panggil fungsi loadData saat halaman dimuat
window.onload = loadData;

