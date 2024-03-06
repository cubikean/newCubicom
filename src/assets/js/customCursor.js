function customCursor() {
    console.log('customCursor')
    let e = {};
    e.cursor = document.querySelector("#js-cc-cursor");
    e.cursor.classList.add("is-active");
    e.secCursor = document.querySelector('.cc-cursor__explore')
    e.secCursor.classList.remove('active')
    e.cursorInner = document.querySelector("#js-cc-cursor__inner");
    e.cursorPositionX = 0;
    e.cursorPositionY = 0;
    e.oldCursorPositionX = 0;
    e.oldCursorPositionY = 0;
      
    e.secCursorPositionX = 0;
    e.secCursorPositionY = 0;
    e.secOldCursorPositionX = 0;
    e.secOldCursorPositionY = 0;
  
    function updateElements(){
    console.log('customCursor updateElements')
  
      customExploreLinks = document.querySelectorAll('.custom_explore, [data-project-count], .link-next')  
  
      if (e.secCursor.classList.contains('active')){
        e.secCursor.classList.remove('active')
      }
  
    customExploreLinks.forEach(item => {
      item.addEventListener('mouseenter', function(){
        e.secCursor.firstElementChild.innerHTML = `EXPLORE`
        e.secCursor.classList.add('active')
        if (item.dataset.projectCount){
          e.secCursor.firstElementChild.innerHTML = `${item.dataset.projectCount} <br> Projets`
        }
  
      })
  
      item.addEventListener('mouseleave', function(){
        e.secCursor.classList.remove('active')
        e.secCursor.firstElementChild.innerHTML = ``
        if (item.dataset.projectCount){
        }
      })
    });
  
    e.a = document.querySelectorAll(" a , #MenuToggle , button");
    e.cursorInner.style.transform = 'scale(1)';
  
    e.a.forEach((element) => {
      
      element.addEventListener("mouseenter", function () {
        gsap.to(e.cursorInner, {
          duration: 0.6,
          ease: "power3.out",
          scale: 2,
        });
      });
      
      element.addEventListener("mouseleave", function () {
        gsap.to(e.cursorInner, {
          duration: 0.6,
          ease: "power3.out",
          scale: 1,
        });
      });
    });
    
    }
    updateElements()
  
    
    
  
    window.addEventListener(
      "mousemove",
      function (t) {
        e.cursorPositionX = t.clientX;
        e.cursorPositionY = t.clientY;
        
        e.secCursorPositionX = t.clientX;
        e.secCursorPositionY = t.clientY;
      },
      {
        passive: true,
      }
      );
      
    function updateCursorPosition() {
      let newCursorPositionX = e.oldCursorPositionX - e.cursorPositionX;
      let newCursorPositionY = e.oldCursorPositionY - e.cursorPositionY;
      let scaleValue =
        Math.min(
          20,
          Math.sqrt(
            newCursorPositionX * newCursorPositionX +
              newCursorPositionY * newCursorPositionY
          )
          ) / 10;
      let rotationValue =
      (180 * Math.atan2(newCursorPositionY, newCursorPositionX)) / Math.PI;
      gsap.set(e.cursor, {
        x: e.cursorPositionX,
        y: e.cursorPositionY,
        scaleX: 1 + scaleValue,
        rotation: rotationValue,
      });
      e.oldCursorPositionX = e.cursorPositionX;
      e.oldCursorPositionY = e.cursorPositionY;
      requestAnimationFrame(updateCursorPosition);
    }
    updateCursorPosition();
    
    function updateSecCursorPosition(){
      e.secOldCursorPositionX = e.secCursorPositionX;
      e.secOldCursorPositionY = e.secCursorPositionY;
      gsap.set(e.secCursor, {
        x: e.secOldCursorPositionX,
        y: e.secOldCursorPositionY,
      });
      requestAnimationFrame(updateSecCursorPosition);
    }
    updateSecCursorPosition()
  
    return {
      updateElements: updateElements
    };
  }
  const cursor = customCursor()