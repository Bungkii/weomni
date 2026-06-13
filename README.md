# FlexiPOS e-Solution Platform 🚀

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Payload CMS](https://img.shields.io/badge/Payload_CMS-000000?style=for-the-badge&logo=payload&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**FlexiPOS** คือระบบบริหารจัดการจุดขาย (Point of Sale) บนคลาวด์สำหรับธุรกิจยุคใหม่ ออกแบบมาเพื่อธุรกิจร้านค้าปลีก ร้านอาหาร และธุรกิจบริการ (Hospitality) ที่ต้องการความยืดหยุ่นสูง การจัดการสต็อกแบบ Real-time และสถาปัตยกรรมระดับองค์กร (Enterprise-grade Architecture)

## ✨ ฟีเจอร์เด่น (Key Features)

- ☁️ **100% Cloud Database Sync:** ข้อมูลร้านค้า สต็อก และยอดขาย ซิงค์แบบเรียลไทม์ผ่านฐานข้อมูล **Supabase (PostgreSQL)** ปลอดภัยไร้กังวลเรื่องเซิร์ฟเวอร์ล่ม
- ⚡ **Next-Gen Speed:** พัฒนาด้วยเทคโนโลยีล้ำสมัยอย่าง **Next.js 16 (App Router)** ช่วยให้หน้าจอแคชเชียร์ (Kiosk Mode) โหลดไวและคิดเงินได้ลื่นไหล ไม่สะดุด
- 🛠️ **Ultra-Customization:** จัดการระบบหลังบ้าน สิทธิผู้ใช้งาน และคลังสินค้าด้วย **Payload CMS**
- 🖨️ **Commercial Hardware Ready:** รองรับฮาร์ดแวร์ POS อุตสาหกรรมแบบ Plug & Play (POSIFLEX, BIXOLON, CODESOFT, iMin Swan 2, ฯลฯ)
- 📄 **Interactive Quotation Generator:** ระบบแคตตาล็อกหน้าเว็บที่ให้ลูกค้าเลือกชิ้นส่วนฮาร์ดแวร์ (À la carte) พร้อมคำนวณราคาบวกกำไร (Markup) และถอด VAT เพื่อสร้างใบเสนอราคา PDF ระดับองค์กรได้อัตโนมัติ

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)

โปรเจกต์นี้แบ่งออกเป็นส่วนเว็บไซต์หน้าบ้าน (Marketing & Sales Site) ที่พัฒนาด้วย HTML5 / CSS3 (Tailwind-inspired) / Vanilla JS 

```text
flexipos-main/
│
├── index.html                 # หน้า Landing Page หลักของ FlexiPOS
├── pricing.html               # หน้าตารางราคาแบบจัดเซตฮาร์ดแวร์ (Set A, B, C, AIO)
├── subscription.html          # หน้าแผนบริการเช่าใช้ซอฟต์แวร์รายเดือน (SaaS)
├── hardware.html              # หน้าแคตตาล็อกอุปกรณ์รายชิ้น พร้อมระบบออกใบเสนอราคา PDF
├── terms-and-conditions.html  # หน้าข้อกำหนดและเงื่อนไขการใช้บริการ
├── FAQ.html                   # หน้าคำถามที่พบบ่อย
│
├── logo.png                   # โลโก้หลักของ FlexiPOS
├── award1.png                 # รูปภาพป้ายรางวัลยืนยันมาตรฐาน
├── clientlogo1.jpg            # รูปภาพแบรนด์ลูกค้าอ้างอิง
├── ...
│
└── asset/
    └── hardware/              # รูปภาพสินค้าฮาร์ดแวร์ (ต้องนำไฟล์รูปมาใส่ให้ตรงชื่อในโค้ด)
        ├── easy-print-pos-w1plus.png
        ├── posiflex-rt-6015g2.png
        ├── bixolon-srp-330ii.png
        ├── imin-swan-2.png
        └── ...
