$(function(){
    let colors=["#1D55A0","#ED1B24","#FF9F00","#00A652","#993300","#663399"];
    let images=["cpp.png","java.webp","python.jpg","database.png","dequy.png","git.png"];
  
    // thêm môn học
    $(".add").click(function(){
      let name = prompt("Tên môn học mới:");
      if(!name) return;
      let color = colors[Math.floor(Math.random()*colors.length)];
      let img = images[Math.floor(Math.random()*images.length)];
      let html = `<div class="course">
                    <div class="title" style="background:${color}">${name}</div>
                    <span class="close">x</span>
                    <img src="../img/${img}">
                  </div>`;
      $(this).before(html);
    });
  
    // xóa môn học
    $(document).on("click",".close",function(){
      if(confirm("Bạn có chắc chắn muốn xóa môn học này?")){
        $(this).parent().remove();
      }
    });
  
    // hiệu ứng chạy chữ tiêu đề
    $(document).on("mouseenter",".course",function(){
      let title=$(this).find(".title");
      title.animate({scrollLeft:title[0].scrollWidth},4000,"linear");
    }).on("mouseleave",".course",function(){
      let title=$(this).find(".title");
      title.stop().scrollLeft(0);
    });
  });
  