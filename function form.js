function showFormData() {
  // แสดงส่วนที่มี id="submitted-info"
  const submittedDataSection = document.querySelector('.submitted-data');
  submittedDataSection.style.display = 'block';

  // เข้าถึงข้อมูลที่ผู้ใช้กรอก
  const fullname_th = document.getElementById('fullname_th').value;
  const fullname_en = document.getElementById('fullname_en').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const studentID = document.getElementById('student_id').value;
  const faculty = document.getElementById('faculty').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const comments = document.getElementById('comments').value;

  // สร้างข้อความที่จะแสดงผล
  let submittedInfo = `
      ชื่อ-นามสกุล (ไทย): ${fullname_th}<br>
      ชื่อ-นามสกุล (อังกฤษ): ${fullname_en}<br>
      เพศ: ${gender}<br>
      รหัสนักศึกษา: ${studentID}<br>
      คณะที่ศึกษา: ${faculty}<br>
      ที่อยู่อีเมล: ${email}<br>
      วัน/เดือน/ปีเกิด: ${dob}<br>
      ข้อเสนอแนะ: ${comments}<br>
  `;

  // การเก็บข้อมูลกิจกรรมที่ผู้ใช้เลือก
  const activities = [];
  const checkboxes = document.querySelectorAll('input[name="Activity"]:checked');
  checkboxes.forEach((checkbox) => {
      activities.push(checkbox.value);
  });

  // เพิ่มข้อมูลกิจกรรมในข้อความที่แสดงผล
  if (activities.length > 0) {
      submittedInfo += `กิจกรรมที่เคยเข้าร่วม: ${activities.join(', ')}<br>`;
  }

  // แสดงผลข้อมูลที่รวบรวมไว้ในส่วนที่ต้องการ
  const submittedInfoContainer = document.getElementById('submitted-info');
  submittedInfoContainer.innerHTML = submittedInfo;
}
