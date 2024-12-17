document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
          this.classList.toggle("active");

          const panel = this.nextElementSibling;
          // panel의 실제 display 값 확인 (인라인 스타일이 아닌 실제 스타일)
          const computedStyle = window.getComputedStyle(panel);
          if (computedStyle.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  });

  // flip 버튼 이벤트 리스너
  document.getElementById('flipButton').addEventListener('click', function() {
    const flipCardInner = document.querySelector('.flip-card-inner');
    
    if (flipCardInner) { // 요소가 존재하는지 확인
      if (flipCardInner.classList.contains('flip')) {
        // 이미 flip 상태일 때는 제거하며 회전 종료 후 상태 변경
        flipCardInner.classList.remove('flip');
      } else {
        // flip 상태로 추가
        flipCardInner.classList.add('flip');
      }
    } else {
      console.error('flip-card-inner 요소를 찾을 수 없습니다.');
    }
  });
  document.getElementById('flipb').addEventListener('click', function() {
    const flipCardInner = document.querySelector('.flip-card-inner');
    
    if (flipCardInner) { // 요소가 존재하는지 확인
      if (flipCardInner.classList.contains('flip')) {
        // 이미 flip 상태일 때는 제거하며 회전 종료 후 상태 변경
        flipCardInner.classList.remove('flip');
      } else {
        // flip 상태로 추가
        flipCardInner.classList.add('flip');
      }
    } else {
      console.error('flip-card-inner 요소를 찾을 수 없습니다.');
    }
  });
  // 이미지 클릭 시 효과 토글
  const imageContainer = document.querySelector('.opacity');
  
  if (imageContainer) {
    imageContainer.addEventListener('click', function() {
      imageContainer.classList.toggle('clicked');
    });
  } else {
    console.error("요소를 찾을 수 없습니다.");
  }
});
