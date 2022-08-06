var ele = document.createElement("div");
var span = document.createElement("span");
ele.setAttribute("class", "container");
span.setAttribute("id", "span");
ele.append(span);
document.body.append(ele);
let spa = document.getElementById("span");
spa.innerHTML = "10";
let n = 10;
setTimeout(() => {
  n--;
  spa.innerHTML = n;
  setTimeout(() => {
    n--;
    spa.innerHTML = n;
    setTimeout(() => {
      n--;
      spa.innerHTML = n;

      setTimeout(() => {
        n--;
        spa.innerHTML = n;

        setTimeout(() => {
          n--;
          spa.innerHTML = n;

          setTimeout(() => {
            n--;
            spa.innerHTML = n;

            setTimeout(() => {
              n--;
              spa.innerHTML = n;

              setTimeout(() => {
                n--;
                spa.innerHTML = n;

                setTimeout(() => {
                  n--;
                  spa.innerHTML = n;

                  setTimeout(() => {
                    n--;
                    spa.innerHTML = "HAPPY  INDEPENDENCE  DAY";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
