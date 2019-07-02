

const container=document.getElementById("container");
// container.classList.add("container-shift1");

function myCustomTimeoutFunction() {

  setTimeout(function() {
     container.classList.add("container-shift1");
  },1000);
  setTimeout(function() {
     container.classList.add("container-shift2");
  },2000);

  setTimeout(function() {
     container.classList.add("container-shift3");
  },3000);
  setTimeout(function() {
     container.classList.remove("container-shift1", "container-shift2", "container-shift3");

     // Restarts the loop
    myCustomTimeoutFunction();
  },4000);

}

// Initial function call, starts slideshow
myCustomTimeoutFunction();
