document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('languageSelect');
    
    // 从 URL 获取语言设置
    function getLanguageFromUrl() {
        const hash = window.location.hash;
        if (hash.startsWith('#lang=')) {
            return hash.replace('#lang=', '');
        }
        return null;
    }

    // 更新 URL 中的语言参数
    function updateUrlLanguage(language) {
        const newUrl = window.location.pathname + '#lang=' + language;
        history.replaceState(null, '', newUrl);
    }

    // 检查语言设置的优先级：URL > localStorage > 浏览器语言
    const urlLanguage = getLanguageFromUrl();
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const browserLanguage = navigator.language.toLowerCase();
    
    let currentLanguage = 'zh'; // 默认语言

    if (urlLanguage && translations[urlLanguage]) {
        currentLanguage = urlLanguage;
    } else if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        updateUrlLanguage(currentLanguage);
    } else {
        // 根据浏览器语言选择最匹配的支持语言
        const supportedLanguages = Object.keys(translations);
        for (let lang of supportedLanguages) {
            if (browserLanguage.startsWith(lang.toLowerCase())) {
                currentLanguage = lang;
                break;
            }
        }
        updateUrlLanguage(currentLanguage);
    }

    // 设置初始语言
    languageSelect.value = currentLanguage;
    updateLanguage(currentLanguage);

    // 监听语言选择变化
    languageSelect.addEventListener('change', function(e) {
        const selectedLanguage = e.target.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        updateUrlLanguage(selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    // 监听 URL 变化
    window.addEventListener('hashchange', function() {
        const newLanguage = getLanguageFromUrl();
        if (newLanguage && translations[newLanguage] && newLanguage !== languageSelect.value) {
            languageSelect.value = newLanguage;
            localStorage.setItem('selectedLanguage', newLanguage);
            updateLanguage(newLanguage);
        }
    });

    // 更新页面文本
    function updateLanguage(language) {
        document.documentElement.lang = language;
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    const androidButton = document.getElementById('androidButton');
    androidButton.addEventListener('click', function(e) {
        e.preventDefault();
        const currentLang = document.documentElement.lang;
        alert(translations[currentLang].android_not_available);
    });
}); 