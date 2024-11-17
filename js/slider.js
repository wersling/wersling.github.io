document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('screenshotModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.modal-nav.prev');
    const nextBtn = document.querySelector('.modal-nav.next');
    const thumbnails = document.querySelectorAll('.screenshot-thumb');
    let currentIndex = 0;

    // 打开模态框
    function openModal(index) {
        currentIndex = index;
        modal.classList.add('show');
        modalImg.src = thumbnails[index].src;
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    // 关闭模态框
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // 切换图片
    function showImage(index) {
        currentIndex = index;
        modalImg.src = thumbnails[index].src;
    }

    // 下一张图片
    function nextImage() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    }

    // 上一张图片
    function prevImage() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    }

    // 添加事件监听
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('show')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
}); 