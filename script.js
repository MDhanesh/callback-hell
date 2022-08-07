var ele = document.createElement("div");
var span = document.createElement("span");
ele.setAttribute("class", "container");
span.setAttribute("id", "span");
span.innerHTML = "10";
ele.append(span);
document.body.append(ele);

let n = 10;
setTimeout(() => {
  n--;
  span.innerHTML = n;
  setTimeout(() => {
    n--;
    span.innerHTML = n;
    setTimeout(() => {
      n--;
      span.innerHTML = n;

      setTimeout(() => {
        n--;
        span.innerHTML = n;

        setTimeout(() => {
          n--;
          span.innerHTML = n;

          setTimeout(() => {
            n--;
            span.innerHTML = n;

            setTimeout(() => {
              n--;
              span.innerHTML = n;

              setTimeout(() => {
                n--;
                span.innerHTML = n;

                setTimeout(() => {
                  n--;
                  span.innerHTML = n;

                  setTimeout(() => {
                    n--;
                    span.innerHTML = "HAPPY  INDEPENDENCE  DAY";
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
