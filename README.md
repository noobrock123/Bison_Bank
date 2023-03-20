จัดทำโดย

นายธัญญวัฒน์ ธนัครสมบัติ

เนื่องจากโปรแกรมนี้ยังไม่สามารถใช้งานได้อย่างเนื่องจากเกิดปัญหาเรื่อง Permission ควรใช้โปรแกรมดังนี้
- ใช้คำสั่ง npm run dev ใน Bison-Bank/react/

ปัญหาที่เจอในการทำงาน
- ไม่สามารถใช้คำสั่ง laravel new project-name ได้ ให้ error เป็น '''sh1: composer: Permission Denined'''
- ไม่สามารถเชื่อมต่อ mysql ผ่าน local machine ได้
- ไม่สามารถใช้ mysql ได้เนื่องจากไม่ผ่าน Permission ของ Docker
- ไม่สามารถใช้ phpmyadmin ผ่าน docker ได้ผ่าน port=3306 เกิด '''Got packets out of order''

ปัญหาเหล่านี้เกิดขึ้นใน Ubuntu 22.04.2 LTS
