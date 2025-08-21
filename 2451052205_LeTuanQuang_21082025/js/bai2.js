$(function(){
  // Khởi tạo: hiển thị ảnh đầu tiên và đánh dấu active
  $(".thumb").first().addClass("active");
  $(".color-swatch").first().addClass("active");
  
  // Mapping màu sắc với ảnh tương ứng - ĐÃ SỬA LẠI MÀU
  const colorImages = {
    'gold': '../img/s8_-3.webp',    // Màu vàng (đã sửa từ s8_-2.jpg)
    'blue': '../img/s8_-2.jpg',     // Màu xanh dương (đã sửa từ s8_-3.webp)  
    'pink': '../img/s8_-4.webp',    // Màu hồng
    'white': '../img/s8_-5.webp'    // Màu trắng
  };
  
  // Click vào thumbnail để thay đổi ảnh chính
  $(".thumb").click(function(){
    // Xóa active class từ tất cả thumbnails
    $(".thumb").removeClass("active");
    // Thêm active class cho thumbnail được click
    $(this).addClass("active");
    // Thay đổi ảnh chính
    $("#mainImg").attr("src", $(this).attr("src"));
  });
  
  // Click vào nút chọn màu để nạp danh sách ảnh tương ứng
  $(".color-swatch").click(function(){
    const selectedColor = $(this).data("color");
    
    // Xóa active class từ tất cả color swatches
    $(".color-swatch").removeClass("active");
    // Thêm active class cho color swatch được click
    $(this).addClass("active");
    
    // Xóa tất cả thumbnails hiện tại
    $(".thumbnails").empty();
    
    // Nạp ảnh tương ứng với màu được chọn
    const selectedImage = colorImages[selectedColor];
    
    // Tạo thumbnail mới với ảnh của màu được chọn
    const thumbnail = `<img class="thumb active" src="${selectedImage}" alt="Màu ${selectedColor}" data-color="${selectedColor}">`;
    $(".thumbnails").append(thumbnail);
    
    // Cập nhật ảnh chính
    $("#mainImg").attr("src", selectedImage);
    
    // Gắn lại sự kiện click cho thumbnail mới
    $(".thumb").click(function(){
      $(".thumb").removeClass("active");
      $(this).addClass("active");
      $("#mainImg").attr("src", $(this).attr("src"));
    });
  });
});
