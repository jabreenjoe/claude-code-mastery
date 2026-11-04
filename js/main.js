// 모바일 메뉴 열기/닫기, 다크 모드 토글, 메뉴 링크 클릭 시 메뉴 닫기

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');

// 모바일 메뉴 버튼: 메뉴 표시 상태와 aria-expanded 값을 함께 바꿈
menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// 메뉴 링크를 누르면 모바일 메뉴를 닫음 (데스크톱에서는 메뉴가 항상 보이므로 영향 없음)
navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// 다크 모드 버튼 문구를 현재 상태에 맞춤
function updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
}

// 다크 모드 토글: 선택한 값은 localStorage에 저장 (저장소를 쓸 수 없으면 저장 없이 동작)
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
        // 저장소 접근이 막힌 환경에서는 저장하지 않음
    }
    updateThemeButton();
});

updateThemeButton();

// 이미지 불러오기에 실패하면 data-fallback에 적힌 샘플 이미지로 바꿈
// error 이벤트는 버블링되지 않으므로 capture 단계에서 받음
document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.fallback) {
        return;
    }
    // 샘플 이미지도 실패하면 무한 반복하지 않도록 한 번만 바꿈
    if (image.src === image.dataset.fallback) {
        return;
    }
    image.src = image.dataset.fallback;
}, true);
