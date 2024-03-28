const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let timer;

function generateRandomAlphabet() {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const alphabetDiv = document.getElementById('alphabet');

    function startRandomLetters() {
        // Kiểm tra xem timer đã tồn tại chưa
        if (!timer) {
            timer = setInterval(function () {
                const randomChar = generateRandomAlphabet();
                alphabetDiv.textContent = randomChar;
            }, 10); // Giảm thời gian giữa các chữ cái xuất hiện xuống còn 50ms
        }
    }

    alphabetDiv.addEventListener('click', function () {
        startRandomLetters();

        // Sau 1 giây, dừng lại
        setTimeout(function () {
            clearInterval(timer);
            timer = null; // Đặt timer thành null khi dừng interval
        }, 700);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});
