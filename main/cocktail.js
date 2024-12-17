document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.opacity');  // .opacity 클래스를 가진 요소 선택
    
    if (imageContainer) {
      imageContainer.addEventListener('click', function() {
        // 클릭 시 .clicked 클래스 토글
        imageContainer.classList.toggle('clicked');
      });
    } else {
      console.error("요소를 찾을 수 없습니다.");
    }
  });
  