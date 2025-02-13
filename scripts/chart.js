// Data Total Penduduk
const totalPopulation = 281090; // Ganti dengan data dinamis jika ada

// Menampilkan Total Penduduk di Elemen
document.getElementById('totalPopulationCount').textContent = totalPopulation.toLocaleString();

// Penduduk Berdasarkan Jenis Kelamin Chart
const genderDistributionCtx = document.getElementById('genderDistributionChart')?.getContext('2d');
if (genderDistributionCtx) {
    new Chart(genderDistributionCtx, {
        type: 'pie',
        data: {
            labels: ['Laki-Laki', 'Perempuan'],
            datasets: [{
                label: 'Jenis Kelamin',
                data: [145720, 134370],
                backgroundColor: ['#eb891b', '#0093dd'],
                borderColor: ['#eb891b', '#0093dd'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Distribusi Jenis Kelamin (Jiwa)' }
            }
        }
    });
}

// Data Penduduk Berdasarkan Usia
const ageData = {
    labels: [
        '0-4', '5-14', '15-24', '25-34', '35-44', 
        '45-54', '55-64', '65-74', '75+'
    ],
    datasets: [{
        label: 'Jumlah Penduduk',
        data: [23920, 46730, 46720, 50240, 38690, 34550, 25480, 11630, 3120],
        backgroundColor: '#0093dd',
        borderColor: '#0093dd',
        borderWidth: 1
    }]
};

// Opsi Diagram Batang
const ageOptions = {
    responsive: true,
    maintainAspectRatio: false, // Agar fleksibel mengikuti ukuran elemen induk
    plugins: {
        legend: {display: true, position: 'top'},
        title: {display: true, text: 'Distribusi Penduduk Dari Usia (Jiwa)'}
    },
    scales: {
        x: {
            title: {display: true, text: 'Kelompok Usia'}
        },
        y: {
            title: {display: true, text: 'Jumlah Penduduk'},
            beginAtZero: true
        }
    }
};

// Membuat Diagram Batang
const ageCtx = document.getElementById('ageDistributionChart')?.getContext('2d');
if (ageCtx) {
    new Chart(ageCtx, {
        type: 'bar',
        data: ageData,
        options: ageOptions
    });
}

// Grafik Garis: Jumlah Penduduk (2020-2024)
const populationTrendCtx = document.getElementById('populationTrendChart')?.getContext('2d');
if (populationTrendCtx) {
    new Chart(populationTrendCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Jumlah Penduduk',
                data: [268880, 272070, 275170, 278180, 281090],
                borderColor: '#68b92e',
                backgroundColor: 'rgba(104, 185, 46, 0.2)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Tinggi grafik menyesuaikan card
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Tren Jumlah Penduduk 2020-2024 (Jiwa)' }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Tahun' }
                },
                y: {
                    title: { display: true, text: 'Jumlah Penduduk' },
                    beginAtZero: false
                }
            }
        }
    });
}

// Grafik Donat: Status Kawin
const maritalStatusCtx = document.getElementById('maritalStatusChart')?.getContext('2d');
if (maritalStatusCtx) {
    new Chart(maritalStatusCtx, {
        type: 'doughnut',
        data: {
            labels: ['Belum Kawin', 'Kawin', 'Cerai'], // Label status kawin
            datasets: [{
                label: 'Status Kawin',
                data: [57.48, 38.93, 3.59], // Data persentase
                backgroundColor: ['#eb891b', '#0093dd', '#68b92e'], // Warna donat 
                borderColor: '#fff', // Warna border
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Distribusi Status Kawin (Presentase)' }
            }
        }
    });
}

// Data Pekerjaan
const jobData = {
    labels: [
        'Berusaha sendiri',
        'Berusaha dibantu buruh tanpa dibayar',
        'Berusaha dibantu buruh dibayar',
        'Karyawan/pegawai',
        'Pertanian',
        'Nonpertanian',
        'Pekerja keluarga'
    ],
    datasets: [{
        label: 'Persentase Pekerjaan',
        data: [18.05, 30.04, 0.79, 18.05, 0.24, 0.86, 0.79],
        backgroundColor: [
            '#eb891b', '#0093dd', '#ffcc00', '#68b92e', '#a64d79', '#4635B1', '#cc0000'
        ],
        borderColor: '#fff',
        borderWidth: 1
    }]
};

// Opsi Grafik Batang Horizontal
const jobOptions = {
    indexAxis: 'y', // Membuat grafik batang horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: true, position: 'top' },
        title: { display: true, text: 'Distribusi Pekerjaan Penduduk (Presentase)' }
    },
    scales: {
        x: {
            title: { display: true, text: 'Persentase (%)' },
            beginAtZero: true
        },
        y: {
            title: { display: true, text: 'Jenis Pekerjaan' }
        }
    }
};

// Membuat Grafik Batang Horizontal
const jobCtx = document.getElementById('jobDistributionChart')?.getContext('2d');
if (jobCtx) {
    new Chart(jobCtx, {
        type: 'bar',
        data: jobData,
        options: jobOptions
    });
}
