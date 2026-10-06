// 1. تحديد العناصر من صفحة الـ HTML باستخدام ID لربطها بالبرمجة
const movieInput = document.getElementById('movieInput'); // الوصول لخانة إدخال اسم الفيلم
const addBtn = document.getElementById('addBtn'); // الوصول لزر الإضافة Add
const moviesList = document.getElementById('moviesList'); // الوصول لمكان عرض القائمة ul
const successMsg = document.getElementById('successMsg'); // الوصول لرسالة النجاح Successfully added

// 2. إضافة حدث (Event Listener) للزر ليتم تنفيذ الكود عند النقر عليه
addBtn.addEventListener('click', function() {
    
    // أخذ النص المكتوب داخل خانة الإدخال وحذف المسافات الزائدة من الطرفين باستخدام trim()
    const movieTitle = movieInput.value.trim();

    // التحقق مما إذا كانت الخانة فارغة أم تحتوي على اسم فيلم
    if (movieTitle === "") {
        alert("من فضلك اكتب اسم الفيلم أولاً!"); // إظهار تنبيه إذا حاول المستخدم الإضافة بدون كتابة نص
        return; // إيقاف تنفيذ بقية الكود إذا كانت الخانة فارغة
    }

    // 3. إنشاء عنصر جديد بالقائمة (li) لإضافة الفيلم فيه
    const newListItem = document.createElement('li'); // إنشاء عنصر <li> جديد في الذاكرة
    newListItem.textContent = movieTitle; // وضع اسم الفيلم المكتوب داخل العنصر الجديد

    // 4. إضافة العنصر الجديد إلى القائمة الرئيسية (ul) في الصفحة
    moviesList.appendChild(newListItem); // إدراج <li> الجديد داخل الـ <ul> ليظهر على الشاشة

    // 5. إظهار رسالة النجاح "Successfully added!"
    successMsg.classList.remove('hidden'); // إزالة الكلاس 'hidden' لجعل الرسالة تظهر للمستخدم

    // 6. تفريغ خانة الإدخال لتصبح جاهزة لكتابة فيلم جديد
    movieInput.value = ""; 

    // 7. إخفاء رسالة النجاح تلقائياً بعد مرور ثانيتين (2000 مللي ثانية)
    setTimeout(function() {
        successMsg.classList.add('hidden'); // إعادة كلاس 'hidden' للرسالة لإخفائها مجدداً
    }, 2000);

});
