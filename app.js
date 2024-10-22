document.getElementById('startButton').addEventListener('click', function() {
      const path = document.querySelector('path');
      const pathLength = path.getTotalLength();
      
      // Initially hide the path by setting strokeDasharray and strokeDashoffset to 0
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
  
      // Use requestAnimationFrame for smooth animation
      let progress = 0;
      const duration = 2000; // Animation duration in milliseconds
      const startTime = performance.now();
  
      function animate(time) {
          progress = (time - startTime) / duration;
  
          // Stop animation when progress reaches 1
          if (progress >= 1) {
              progress = 1;
          }
  
          // Update the strokeDashoffset to give the animation effect
          path.style.strokeDashoffset = pathLength * (1 - progress);
  
          // Continue the animation until complete
          if (progress < 1) {
              requestAnimationFrame(animate);
          }
      }
  
      requestAnimationFrame(animate);
  });
  