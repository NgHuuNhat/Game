const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let timer;

function generateRandomAlphabet() {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const alphabetDiv = document.getElementById('alphabet');

    function startRandomLetters() {
        alphabetDiv.style.opacity = '0'; // Ẩn đi chữ cái hiện tại

        timer = setInterval(function () {
            const randomChar = generateRandomAlphabet();
            alphabetDiv.textContent = randomChar;
            alphabetDiv.style.opacity = '1'; // Hiển thị chữ cái ngẫu nhiên
            setTimeout(function () {
                alphabetDiv.style.opacity = '1'; // Sau 0.3 giây, ẩn đi chữ cái để chuẩn bị cho hiệu ứng tiếp theo
            }, 50);
        }, 50); // Giảm thời gian giữa các chữ cái xuất hiện xuống còn 500ms
    }

    alphabetDiv.addEventListener('click', function () {
        clearInterval(timer); // Dừng bất kỳ hành động nhảy chữ cái nào đang diễn ra
        startRandomLetters();

        // Sau 2 giây, dừng lại
        setTimeout(function () {
            clearInterval(timer);
        }, 1000);
    });

    // Khởi động ngẫu nhiên chữ cái ngay từ đầu
    // startRandomLetters();
});

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});


