# 🌌 FlexiOmni Ecosystem

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Payload CMS](https://img.shields.io/badge/Payload_CMS-000000?style=for-the-badge&logo=payload&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**FlexiOmni** คือสถาปัตยกรรมซอฟต์แวร์ระดับองค์กร (Enterprise-grade Ecosystem) ที่เชื่อมโยงการบริหารจัดการธุรกิจในทุกมิติเข้าไว้ด้วยกันอย่างไร้รอยต่อ ผ่านฐานข้อมูลกลางบนคลาวด์ เพื่อยกระดับประสบการณ์ของทั้งผู้ใช้งานและลูกค้าปลายทาง (End-to-End Solutions)

## 🧩 จักรวาลของ FlexiOmni (Core Modules)

ระบบของเราประกอบด้วย 5 โมดูลหลักที่สามารถทำงานแยกกัน หรือผสานการทำงานร่วมกันได้อย่างสมบูรณ์แบบ:

- 🛍️ **FlexiPOS:** ระบบบริหารจัดการจุดขาย (Point of Sale) การคิดเงิน และระบบคลังสินค้าแบบ Real-time
- 🏨 **FlexiHotel:** ระบบบริหารจัดการห้องพักและการจอง (Property Management System) สำหรับธุรกิจโรงแรมและรีสอร์ต
- 🏢 **FlexiVisitor:** ระบบจัดการและบันทึกข้อมูลผู้มาติดต่อ (Visitor Management) เพื่อความปลอดภัยและการแลกบัตรเข้า-ออกอาคาร
- 🎟️ **FlexiQueq:** ระบบจัดการคิวอัจฉริยะ (Queue Management System) เพื่อลดความแออัดหน้าสาขาและจัดการลำดับการให้บริการ
- 🤝 **FlexiCRM:** ศูนย์กลางข้อมูลลูกค้า (Customer Relationship Management) เก็บฐานข้อมูล สมาชิก สะสมแต้ม และวิเคราะห์พฤติกรรมลูกค้าจากทุกโมดูล

---

## 🚀 โฟกัสปัจจุบัน: โปรเจกต์เว็บขาย FlexiPOS

Repository นี้ (ณ ปัจจุบัน) มุ่งเน้นไปที่การพัฒนา **เว็บไซต์ฝั่งการตลาดและการขาย (Marketing & Sales Site)** สำหรับเจาะตลาดโปรดักส์ **FlexiPOS** โดยเฉพาะ

### 📂 โครงสร้างโฟลเดอร์ (Project Structure)

```text
flexipos-main/
│
├── index.html                 # หน้า Landing Page หลัก นำเสนอจุดเด่นของ FlexiPOS
├── pricing.html               # หน้าตารางราคาแบบจัดเซตฮาร์ดแวร์ (Set A, B, C, AIO)
├── subscription.html          # หน้าแผนบริการเช่าใช้ซอฟต์แวร์รายเดือน (SaaS)
├── hardware.html              # หน้าแคตตาล็อกอุปกรณ์รายชิ้น พร้อมระบบออกใบเสนอราคา PDF 
├── terms-and-conditions.html  # หน้าข้อกำหนดและเงื่อนไขการใช้บริการ
├── FAQ.html                   # หน้าคำถามที่พบบ่อย (Help Center)
│
├── logo.png                   # โลโก้หลักของ FlexiPOS / FlexiOmni
├── ...
│
└── asset/
    └── hardware/              # รูปภาพสินค้าฮาร์ดแวร์ที่ดึงมาแสดงในแคตตาล็อก
