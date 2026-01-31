document.addEventListener('DOMContentLoaded', () => {
    
    // IP Kopyalama Fonksiyonu
    const copyIp = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            showToast("IP ADRESİ KOPYALANDI!");
        });
    }

    document.getElementById('copy-ip')?.addEventListener('click', () => copyIp("dragonsmp.shock.gg"));
    document.getElementById('copy-ip-2')?.addEventListener('click', () => copyIp("dragonsmp.shock.gg"));

    // Yakında Butonları
    const comingSoonBtns = document.querySelectorAll('.coming-soon-btn');
    comingSoonBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showToast("BU ÖZELLİK YAKINDA GELECEK!");
        });
    });

    // Toast Mesajı
    function showToast(message) {
        const toast = document.getElementById('toast');
        const msg = document.getElementById('toast-msg');
        
        msg.innerText = message;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
});