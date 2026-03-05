// ==================== KONFIGURASI DATA KHITAN ====================
// EDIT SEMUA DATA DI SINI SESUAI KEBUTUHAN

const KHITAN_CONFIG = {
    // Data Anak
    namaAnak: "Muhammad Azmi",
    namaLengkap: "Muhammad Azmi",
    namaPanggilan: "Azmi",
    
    // Orang Tua
    namaAyah: "Mardi",
    namaIbu: "Desi Purnamasari",
    
    // Detail Anak
    tempatLahir: "",
    tanggalLahir: "",
    usiaKhitan: "",
    
    // Foto (Upload ke i.ibb.co)
    fotoAnak: "https://i.ibb.co.com/YF5xxQqm/IMG-20260304-WA0012.jpg",
    
    // Data Acara
    tanggalAcara: "2026-04-04", // Format: YYYY-MM-DD untuk countdown
    coverDate: "04 April 2026",
    heroDate: "Sabtu, 04 April 2026 / 8 Dzulhijjah 1445 H",
    
    // Khitan
    acaraDate: "04 April 2026",
    acaraTime: "Pukul 08:00 - Selesai",
    acaraVenue: "Kediaman Mardi",
    acaraAddress: "Kp.wangkal RT 003/07 des.kalijaya kec Cikarang Barat kab.bekasi",
    acaraMaps: "https://maps.app.goo.gl/RZk4Cf3qaXgqTCwMA",
    
    // Walimatul Khitan (Resepsi)
    resepsiDate: "04 April 2026"
    resepsiTime: "Pukul 13:00 - Selesai",
    resepsiVenue: "Kediaman Mardi",
    resepsiAddress: "Kp.wangkal RT 003/07 des.kalijaya kec Cikarang Barat kab.bekasi",
    resepsiMaps: "https://maps.app.goo.gl/RZk4Cf3qaXgqTCwMA",
    
    // Gallery (Upload ke i.ibb.co)
    galleryPhotos: [
        "https://i.ibb.co.com/7d45wVZH/photo-2026-03-04-21-51-36-7613521464276287564.jpg",
        "https://i.ibb.co.com/zHQPrhjZ/IMG-20260304-WA0005.jpg",
        "https://i.ibb.co.com/MyWzmZXq/IMG-20260304-WA0006.jpg"
    ],
    
    // Audio Background (Upload ke archive.org)
    audioUrl: "https://archive.org/download/sholawat-badar-sabyan-1/SHOLAWAT%20BADAR%20%28%D8%B5%D9%84%D9%88%D8%A7%D8%AA%20%D8%A8%D8%AF%D8%B1%29%20-%20SABYAN%20%281%29.mp3",
    
    // QRIS (Upload ke i.ibb.co)
    qrisImage: "https://i.ibb.co.com/Wv7d0CvZ/photo-2026-03-04-17-41-43-7613457061241684208.jpg",
    
    // Bank Accounts
    bankAccounts: [
        {
            bank: "Bank central asia",
            logo: "https://i.ibb.co/example/bsi-logo.png",
            nomor: "1234567890",
            nama: "Mardi"
        },
        {
            bank: "E wallet Dana",
            logo: "https://i.ibb.co/example/mandiri-logo.png",
            nomor: "0987654321",
            nama: "Desi Purnama sari"
        }
    ],
    
    // Kontak RSVP (Format: 62xxxxxxxxxx)
    whatsappRSVP: "6282298151430",
    namaKontak: "Desi Purnamasari",
    
    // Doa-doa Khitan (bisa ditambah/diedit)
    doaList: [
        {
            arab: "اَللّٰهُمَّ اَطْعِمْ مَنْ اَطْعَمَنِيْ وَاسْقِ مَنْ سَقَانِيْ",
            latin: "Allahumma ath'im man ath'amanii wasqi man saqaanii",
            arti: "Ya Allah, berilah makan orang yang memberiku makan dan berilah minum orang yang memberiku minum."
        },
        {
            arab: "اَللّٰهُمَّ اجْعَلْهُ وَلِيًّا وَاجْعَلْهُ ذُرِّيَّةً صَالِحَةً",
            latin: "Allahummaj'alhu waliyyan waj'alhu dzurriyyatan shalihah",
            arti: "Ya Allah, jadikanlah dia pemimpin yang shaleh dan jadikanlah dia keturunan yang baik."
        },
        {
            arab: "اللّٰهُمَّ طَهِّرْ قَلْبَهُ وَحَصِّنْ فَرْجَهُ وَأَصْلِحْ شَأْنَهُ",
            latin: "Allahumma tahhir qalbahu wa hashsin farjahu wa ashlih sha'nahu",
            arti: "Ya Allah, sucikanlah hatinya, peliharalah kemaluannya, dan perbaikilah urusannya."
        },
        {
            arab: "بَارَكَ اللّٰهُ فِيْمَا رَزَقَكَ وَبَارَكَ عَلَيْكَ وَأَجْمَعَ بَيْنَكُمَا فِيْ خَيْرٍ",
            latin: "Baarakallahu fiima razaqaka wa baaraka 'alaika wa ajma'a baynakuma fi khair",
            arti: "Semoga Allah memberkahi rezekimu, memberkahi atasmu, dan menyatukan kalian dalam kebaikan."
        },
        {
            arab: "اللّٰهُمَّ اِنِّيْ اَسْأَلُكَ لَهُ التَّقْوٰى وَالطُّهْرَ وَالعَفَافَ",
            latin: "Allahumma inni as'aluka lahu at-taqwa wat-tuhro wal-'afaf",
            arti: "Ya Allah, aku memohon kepada-Mu untuknya ketakwaan, kesucian, dan kesalehan."
        }
    ]
};

// ==================== INISIALISASI ====================

document.addEventListener('DOMContentLoaded', function() {
    initSnowEffect();
    populateData();
    initCountdown();
    generateDoa();
    generateGallery();
    generateBankList();
    setupWhatsApp();
    setupAudio();
    setupIntersectionObserver();
    
    // Cek parameter URL untuk nama tamu
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    if (guestName) {
        document.getElementById('guest-name-display').textContent = decodeURIComponent(guestName);
    }
});

// ==================== SNOW EFFECT ====================

function initSnowEffect() {
    const container = document.getElementById('snow-container');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake(container);
    }
}

function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const size = Math.random() * 10 + 10;
    
    snowflake.style.left = startLeft + '%';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.fontSize = size + 'px';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    
    container.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
        createSnowflake(container);
    }, (duration + delay) * 1000);
}

// ==================== POPULATE DATA ====================

function populateData() {
    // Cover & Hero
    document.getElementById('child-name').textContent = KHITAN_CONFIG.namaAnak;
    document.getElementById('cover-name').textContent = KHITAN_CONFIG.namaAnak;
    document.getElementById('hero-name').textContent = KHITAN_CONFIG.namaLengkap;
    document.getElementById('footer-family').textContent = `Keluarga Besar ${KHITAN_CONFIG.namaAyah.split(' ').pop()}`;
    
    document.getElementById('cover-date').textContent = KHITAN_CONFIG.coverDate;
    document.getElementById('khitan-date').textContent = KHITAN_CONFIG.heroDate;
    
    // Profile Anak
    document.getElementById('child-fullname').textContent = KHITAN_CONFIG.namaLengkap;
    document.getElementById('child-info').textContent = `Putra dari ${KHITAN_CONFIG.namaAyah} & ${KHITAN_CONFIG.namaIbu}`;
    document.getElementById('child-photo').src = KHITAN_CONFIG.fotoAnak;
    document.getElementById('birth-date').textContent = `${KHITAN_CONFIG.tempatLahir}, ${KHITAN_CONFIG.tanggalLahir}`;
    document.getElementById('khitan-age').textContent = KHITAN_CONFIG.usiaKhitan;
    
    // Parents
    document.getElementById('father-name').textContent = KHITAN_CONFIG.namaAyah;
    document.getElementById('mother-name').textContent = KHITAN_CONFIG.namaIbu;
    
    // Event Details - Akad
    document.getElementById('acara-date').textContent = KHITAN_CONFIG.acaraDate;
    document.getElementById('acara-time').textContent = KHITAN_CONFIG.acaraTime;
    document.getElementById('acara-venue').textContent = KHITAN_CONFIG.acaraVenue;
    document.getElementById('acara-address').textContent = KHITAN_CONFIG.acaraAddress;
    document.getElementById('acara-maps').href = KHITAN_CONFIG.acaraMaps;
    
    // Event Details - Resepsi
    document.getElementById('resepsi-date').textContent = KHITAN_CONFIG.resepsiDate;
    document.getElementById('resepsi-time').textContent = KHITAN_CONFIG.resepsiTime;
    document.getElementById('resepsi-venue').textContent = KHITAN_CONFIG.resepsiVenue;
    document.getElementById('resepsi-address').textContent = KHITAN_CONFIG.resepsiAddress;
    document.getElementById('resepsi-maps').href = KHITAN_CONFIG.resepsiMaps;
    
    // QRIS
    document.getElementById('qris-image').src = KHITAN_CONFIG.qrisImage;
    
    // Kontak
    document.getElementById('contact-name').textContent = KHITAN_CONFIG.namaKontak;
    document.getElementById('contact-number').textContent = KHITAN_CONFIG.whatsappRSVP.replace(/^62/, '0');
}

// ==================== GENERATE DOA ====================

function generateDoa() {
    const container = document.getElementById('doa-list');
    
    KHITAN_CONFIG.doaList.forEach(doa => {
        const card = document.createElement('div');
        card.className = 'doa-card';
        card.innerHTML = `
            <p class="doa-arab">${doa.arab}</p>
            <p class="doa-latin">"${doa.latin}"</p>
            <p class="doa-arti">${doa.arti}</p>
        `;
        container.appendChild(card);
    });
}

// ==================== GENERATE GALLERY ====================

function generateGallery() {
    const container = document.getElementById('gallery-container');
    
    KHITAN_CONFIG.galleryPhotos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${photo}" alt="Foto ${index + 1}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/1a2744/d4af37?text=Photo+${index+1}'">`;
        item.onclick = () => openLightbox(photo);
        container.appendChild(item);
    });
}

// ==================== GENERATE BANK LIST ====================

function generateBankList() {
    const container = document.getElementById('bank-list');
    
    KHITAN_CONFIG.bankAccounts.forEach(account => {
        const item = document.createElement('div');
        item.className = 'bank-item';
        item.innerHTML = `
            <img src="${account.logo}" alt="${account.bank}" onerror="this.src='https://via.placeholder.com/50x50/1a2744/d4af37?text=${account.bank.charAt(0)}'">
            <div class="bank-info">
                <p class="bank-name">${account.bank}</p>
                <p class="account-number" onclick="copyToClipboard('${account.nomor}')">
                    ${account.nomor} <i class="fas fa-copy"></i>
                </p>
                <p class="account-name">a.n. ${account.nama}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// ==================== SETUP WHATSAPP RSVP ====================

function setupWhatsApp() {
    const msgHadir = `Assalamualaikum Wr. Wb.%0A%0AYth. Keluarga ${KHITAN_CONFIG.namaAyah},%0A%0ASaya dengan senang hati mengkonfirmasi bahwa saya *AKAN HADIR* pada acara khitanan putra Anda: *${KHITAN_CONFIG.namaLengkap}* (%${KHITAN_CONFIG.namaPanggilan}%).%0A%0ATerima kasih atas undangannya.%0A%0AWassalamualaikum Wr. Wb.`;
    
    const msgTidak = `Assalamualaikum Wr. Wb.%0A%0AYth. Keluarga ${KHITAN_CONFIG.namaAyah},%0A%0AMohon maaf, saya *BERHALANGAN HADIR* pada acara khitanan putra Anda: *${KHITAN_CONFIG.namaLengkap}* karena ada halangan.%0A%0ASemoga acaranya lancar dan berkah.%0A%0AWassalamualaikum Wr. Wb.`;
    
    document.getElementById('wa-hadir').href = `https://wa.me/${KHITAN_CONFIG.whatsappRSVP}?text=${msgHadir}`;
    document.getElementById('wa-tidak').href = `https://wa.me/${KHITAN_CONFIG.whatsappRSVP}?text=${msgTidak}`;
}

// ==================== SETUP AUDIO ====================

function setupAudio() {
    const audio = document.getElementById('bg-music');
    if (KHITAN_CONFIG.audioUrl) {
        audio.querySelector('source').src = KHITAN_CONFIG.audioUrl;
        audio.load();
    }
}

// ==================== COUNTDOWN ====================

function initCountdown() {
    const eventDate = new Date(KHITAN_CONFIG.tanggalAcara + 'T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="time-box" style="grid-column: span 4;"><span style="font-size: 1.5rem;">Hari Berbahagia Telah Tiba! ☪</span></div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== INTERACTION FUNCTIONS ====================

function openInvitation() {
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    
    if (KHITAN_CONFIG.audioUrl) {
        music.play().then(() => {
            btn.classList.add('playing');
            btn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(err => {
            console.log('Autoplay prevented:', err);
        });
    }
    
    window.scrollTo(0, 0);
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    
    if (music.paused) {
        music.play();
        btn.classList.add('playing');
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        music.pause();
        btn.classList.remove('playing');
        btn.innerHTML = '<i class="fas fa-music"></i>';
    }
}

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const btn = event.target.closest('.account-number');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Tersalin';
        btn.style.color = '#25d366';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
        }, 2000);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Nomor rekening telah disalin: ' + text);
    });
}

// ==================== INTERSECTION OBSERVER ====================

function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('[data-section]').forEach(section => {
        observer.observe(section);
    });
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});
