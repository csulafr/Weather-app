// Enum  kondisi cuaca
enum WeatherCondition {
    Sunny = "Sunny",
    Rainy = "Rainy",
    Cloudy = "Cloudy",
    Stormy = "Stormy"
}

// Interface objek laporan cuaca
interface WeatherReport {
    id: number;
    cityName: string;
    condition: WeatherCondition;
}

// Fungsi mendapatkan emoji berdasarkan kondisi cuaca
function getWeatherEmoji(condition: WeatherCondition): string {
    switch (condition) {
        case WeatherCondition.Sunny:
            return "☀️";
        case WeatherCondition.Rainy:
            return "🌧️";
        case WeatherCondition.Cloudy:
            return "☁️";
        case WeatherCondition.Stormy:
            return "⛈️";
        default:
            return "❓"; // Untuk kondisi yang tidak dikenal
    }
}

// Fungsi untuk menampilkan kondisi cuaca
function displayWeather(report: WeatherReport): void {
    const emoji = getWeatherEmoji(report.condition);
    console.log(`\n--- LAPORAN CUACA SAAT INI ---`);
    console.log(`ID Laporan: ${report.id}`);
    console.log(`Lokasi: ${report.cityName}`);
    console.log(`Kondisi: ${emoji} ${report.condition}`);
    console.log(`-------------------------------\n`);
}

// Fungsi untuk mengubah kondisi cuaca
function changeWeatherCondition(report: WeatherReport, newCondition: WeatherCondition): void {
    const oldCondition = report.condition;
    const oldEmoji = getWeatherEmoji(oldCondition);
    const newEmoji = getWeatherEmoji(newCondition);
    report.condition = newCondition;

    console.log(`➡️ Perubahan di ${report.cityName}:`);
    console.log(`   ${oldEmoji} ${oldCondition}  ➡️  ${newEmoji} ${newCondition}`);
}

// Program utama
function main(): void {
    console.log("===============================");
    console.log("  🌍 APLIKASI SIMULASI CUACA  ");
    console.log("===============================\n");

    // Membuat objek weatherReport dengan kondisi awal Sunny di Banda Aceh
    const weatherReport: WeatherReport = {
        id: 101,
        cityName: "Banda Aceh",
        condition: WeatherCondition.Sunny
    };

    // Menampilkan kondisi cuaca awal
    console.log("✅ Kondisi Cuaca Awal Terdeteksi:");
    displayWeather(weatherReport);

    console.log("⏳ Memulai Simulasi Perubahan Cuaca...\n");

    // --- Simulasi Perubahan Cuaca ---

    // Perubahan 1: Sunny → Cloudy (setelah 3 detik)
    setTimeout(() => {
        console.log(`\n--- Momen ${new Date().toLocaleTimeString()} ---`);
        changeWeatherCondition(weatherReport, WeatherCondition.Cloudy);
        displayWeather(weatherReport);

        // Perubahan 2: Cloudy → Rainy (setelah 4 detik dari perubahan sebelumnya)
        setTimeout(() => {
            console.log(`\n--- Momen ${new Date().toLocaleTimeString()} ---`);
            changeWeatherCondition(weatherReport, WeatherCondition.Rainy);
            displayWeather(weatherReport);

            // Perubahan 3: Rainy → Stormy (setelah 3.5 detik dari perubahan sebelumnya)
            setTimeout(() => {
                console.log(`\n--- Momen ${new Date().toLocaleTimeString()} ---`);
                changeWeatherCondition(weatherReport, WeatherCondition.Stormy);
                displayWeather(weatherReport);
                console.log("--- Simulasi Selesai ---");
            }, 3500); // 3.5 detik

        }, 4000); // 4 detik

    }, 3000); // 3 detik
}

// Menjalankan program
main();