$(function(){
    // kiểm tra input rỗng với hiệu ứng border đỏ ẩn/hiện liên tiếp
    function validateInput(ids) {
      let ok = true;
      ids.forEach(id => {
        if(!$(id).val()) {
          let $input = $(id);
          $input.addClass("error");
          ok = false;
          
          // Hiệu ứng border đỏ ẩn/hiện liên tiếp
          let blinkCount = 0;
          const maxBlinks = 6; // Ẩn/hiện 3 lần (6 trạng thái)
          
          const blink = () => {
            if (blinkCount < maxBlinks) {
              $input.toggleClass("error");
              blinkCount++;
              setTimeout(blink, 300); // 300ms cho mỗi lần ẩn/hiện
            } else {
              $input.removeClass("error");
            }
          };
          
          blink();
        }
      });
      return ok;
    }
  
    // PT bậc 2
    $("#solve").click(function(){
      if(!validateInput(["#a","#b","#c"])) return;
      let a = parseFloat($("#a").val());
      let b = parseFloat($("#b").val());
      let c = parseFloat($("#c").val());
      
      if(a==0){ 
        $("#result").text("Không phải phương trình bậc 2"); 
        return;
      }
      
      let delta = b*b - 4*a*c;
      let result = "";
      
      if(delta < 0) {
        result = "Phương trình vô nghiệm";
      } else if(delta == 0) {
        let x = (-b/(2*a));
        result = `Phương trình có nghiệm kép x₁ = x₂ = ${x.toFixed(2)}`;
      } else {
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        result = `Phương trình có hai nghiệm phân biệt x₁ = ${x1.toFixed(2)} và x₂ = ${x2.toFixed(2)}`;
      }
      
      $("#result").text(result);
    });
  
    // BMI
    $("#bmiBtn").click(function(){
      if(!validateInput(["#weight","#height"])) return;
      let w = parseFloat($("#weight").val());
      let h = parseFloat($("#height").val());
      let bmi = w/(h*h);
      let status = "";
      
      if(bmi < 18.5) status = "Thiếu cân";
      else if(bmi < 25) status = "Bình thường";
      else if(bmi < 30) status = "Thừa cân";
      else status = "Béo phì";
      
      $("#bmiResult").text(`BMI = ${bmi.toFixed(2)}: ${status}`);
    });
  
    // Lãi suất
    $("#interestBtn").click(function(){
      if(!validateInput(["#money","#month","#rate"])) return;
      let m = parseFloat($("#money").val());
      let t = parseFloat($("#month").val());
      let r = parseFloat($("#rate").val());
      let interest = (t*r*m)/(12*100);
      
      // Format số tiền với dấu phẩy ngăn cách hàng nghìn
      let formattedInterest = interest.toLocaleString('vi-VN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      
      $("#interestResult").text(`Tiền lãi: ${formattedInterest} VNĐ`);
    });
  
    // Đổi tiền
    $("#convertBtn").click(function(){
      if(!validateInput(["#vnd"])) return;
      let v = parseFloat($("#vnd").val());
      let cur = $("#currency").val();
      let rate = {USD:22000, EUR:26000, AUD:16000};
      let result = v/rate[cur];
      
      // Format số tiền VNĐ với dấu phẩy ngăn cách hàng nghìn
      let formattedVND = v.toLocaleString('vi-VN');
      let formattedResult = result.toFixed(2);
      
      $("#currencyResult").text(`${formattedVND} VNĐ = ${formattedResult} ${cur}`);
    });
  });
  