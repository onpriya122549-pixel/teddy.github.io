function openGift() {
    // 1. หมุนฝากล่อง
    const lid = document.querySelector('.box-lid');
    lid.style.transform = 'rotate(-20deg) translateY(-20px)'; // หมุนและเลื่อนขึ้น

    // *** โค้ดใหม่: สร้างเอฟเฟกต์ Sparkle ***
    const boxRect = document.querySelector('.gift-box').getBoundingClientRect();
    const popupOverlay = document.getElementById('popup-card');

    for (let i = 0; i < 60; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        
        // ตำแหน่งเริ่มต้นที่ด้านบนของกล่อง
        spark.style.left = `${boxRect.left + boxRect.width / 2}px`;
        spark.style.top = `${boxRect.top - 20}px`; 

        // คำนวณทิศทางการพุ่ง
        const angle = Math.random() * 360;
        const distance = Math.random() * 300 + 100; // พุ่งไประยะ 50-250px
        const endX = Math.cos(angle * Math.PI / 180) * distance;
        const endY = Math.sin(angle * Math.PI / 180) * distance;

        // กำหนดตัวแปร CSS สำหรับแอนิเมชัน
        spark.style.setProperty('--x', `${endX}px`);
        spark.style.setProperty('--y', `${endY}px`);
        
        spark.style.animation = `explode 1s forwards ease-out ${Math.random() * 0.5}s`;
        
        popupOverlay.appendChild(spark); // เพิ่มประกายไฟเข้าไปใน Pop-up Overlay 

        // ลบประกายไฟออกหลังจากแอนิเมชันจบ
        setTimeout(() => spark.remove(), 2500);
    }

    // 2. แสดง Pop-up หลังจากหน่วงเวลาเล็กน้อย
    setTimeout(() => {
        const popup = document.getElementById('popup-card');
        popup.style.display = 'flex';
        
        // 3. ปิดการโต้ตอบกับปุ่ม "เปิด"
        document.querySelector('.open-button').disabled = true;

    }, 500); // 0.5 วินาที หลังฝาเปิด
}

function closeGift() {
    // 1. ปิด Pop-up
    const popup = document.getElementById('popup-card');
    popup.style.display = 'none';

    // 2. ปิดฝากล่อง
    const lid = document.querySelector('.box-lid');
    lid.style.transform = 'rotate(0deg) translateY(0)';
    
    // 3. เปิดใช้งานปุ่ม "เปิด" อีกครั้ง (ถ้าต้องการให้เปิดซ้ำได้)
    document.querySelector('.open-button').disabled = false;
}

function generateRandomSparkles(count) {
        const body = document.body;
        
        for (let i = 0; i < count; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('random-sparkle');
            sparkle.innerHTML = '✨'; // ใช้อิโมจิประกายดาว

            // กำหนดตำแหน่งแบบสุ่ม
            const randomX = Math.random() * 100; // ตำแหน่ง X (0% ถึง 100%)
            const randomY = Math.random() * 100; // ตำแหน่ง Y (0% ถึง 100%)
            
            sparkle.style.left = `${randomX}vw`;
            sparkle.style.top = `${randomY}vh`;
            
            // เพิ่มความหลากหลายของแอนิเมชัน
            sparkle.style.animationDelay = `${Math.random() * 2}s`; // ดีเลย์การเริ่ม (0-2 วินาที)
            sparkle.style.animationDuration = `${1.5 + Math.random() * 1}s`; // ระยะเวลาแอนิเมชัน (1.5-2.5 วินาที)

            body.appendChild(sparkle);
        }
    }

    // *** เรียกใช้ฟังก์ชันนี้ทันทีที่หน้าเว็บโหลด ***
    window.onload = function() {
        // ... หากมีโค้ดอื่นที่ต้องรันเมื่อโหลด ...
        generateRandomSparkles(30); // สร้างประกายดาว 80 ดวง

    }