
    var box1 = document.getElementById("activebox");
    var box2 = document.getElementById("stablebox");

    box1.onmousedown = function(ev) {
        var oEvent = ev || window.event;
        oX = oEvent.clientX - box1.offsetLeft;
        oY = oEvent.clientY - box1.offsetTop;

        document.onmousemove = function(ev) {
            var oEvent = ev || window.event;
            box1.style.left = oEvent.clientX - oX + 'px';
            box1.style.top = oEvent.clientY - oY + 'px';

            if(box1.style.left <= 0) {
                box1.style.left = 0 + 'px';
            } 
            if(box1.style.left >= 800) {
                box1.style.left = 720 + 'px';
            }

            if(box1.style.top <= 0) {
                box1.style.top = 0 + 'px';
            }
            if(box1.style.top >= 1000) {
                box1.style.top = 720 + 'px';
            }
        
            xLimit = box1.offsetLeft + box1.offsetWidth >= box2.offsetLeft && box1.offsetLeft <= box2.offsetLeft + box2.offsetWidth;
            yLimit = box1.offsetTop + box1.offsetWidth >= box2.offsetTop && box1.offsetTop <= box2.offsetTop + box2.offsetHeight;
            if(xLimit && yLimit) {
                box2.style.backgroundColor = "blue";
            }
        }
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        }
    }  

