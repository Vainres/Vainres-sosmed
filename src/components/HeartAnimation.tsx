import { useEffect } from "react";

const HeartAnimation = () => {
  useEffect(() => {
    const colours = ["#f00", "#f06", "#f0f", "#f6f", "#f39", "#f9c"];
    const minisize = 10;
    const maxisize = 20;
    const hearts = 100;
    const over_or_under = "over";

    let x = 400,
      y = 300;
    let swide = 800,
      shigh = 600;
    let sleft = 0,
      sdown = 0;
    const herz: any = [];
    const herzx: any = [];
    const herzy: any = [];
    const herzs: any = [];

    const set_scroll = () => {
      sdown = window.scrollY;
      sleft = window.scrollX;
    };

    const set_width = () => {
      swide = window.innerWidth;
      shigh = window.innerHeight;
    };

    const createDiv = (height: string, width: string) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = height;
      div.style.width = width;
      div.style.overflow = "hidden";
      div.style.backgroundColor = "transparent";
      return div;
    };

    const mwah = () => {
      for (let i = 0; i < hearts; i++) {
        const heart = createDiv("auto", "auto");
        heart.style.visibility = "hidden";
        heart.style.zIndex = over_or_under === "over" ? "1001" : "0";
        heart.style.color = colours[i % colours.length];
        heart.style.pointerEvents = "none";
        heart.style.opacity = "0.45";
        heart.innerHTML = "&#9829;"; // Heart symbol
        document.body.appendChild(heart);
        herz[i] = heart;
        herzy[i] = false;

        // Add mouseover event to trigger disappearance
        heart.addEventListener("mouseover", () => {
          heart.style.transition = "opacity 1s";
          heart.style.opacity = "0"; // Fade out
          setTimeout(() => {
            heart.style.visibility = "hidden"; // Hide after fading out
          }, 1000); // Match with the transition duration
        });
      }
      set_scroll();
      set_width();
      herzle();
    };

    const herzle = () => {
      if (Math.abs(x - 400) > 1 || Math.abs(y - 300) > 1) {
        for (let c = 0; c < hearts; c++) {
          if (herzy[c] === false) {
            herz[c].style.left = (herzx[c] = x - minisize / 2) + "px";
            herz[c].style.top = (herzy[c] = y - minisize) + "px";
            herz[c].style.fontSize = minisize + "px";
            herz[c].style.visibility = "visible";
            break;
          }
        }
      }
      for (let c = 0; c < hearts; c++) {
        if (herzy[c] !== false) blow_me_a_kiss(c);
      }
      setTimeout(herzle, 30);
    };

    const blow_me_a_kiss = (i: any) => {
      herzy[i] -= herzs[i] / minisize + (i % 2);
      herzx[i] += ((i % 5) - 2) / 5;
      if (
        herzy[i] < sdown - herzs[i] ||
        herzx[i] < sleft - herzs[i] ||
        herzx[i] > sleft + swide - herzs[i]
      ) {
        herz[i].style.visibility = "hidden";
        herzy[i] = false;
      } else {
        if (Math.random() < maxisize / herzy[i] && herzs[i] < maxisize) {
          herz[i].style.fontSize = ++herzs[i] + "px";
        }
        herz[i].style.top = herzy[i] + "px";
        herz[i].style.left = herzx[i] + "px";
      }
    };

    const mouse = (e: any) => {
      x = e.pageX;
      y = e.pageY;
    };

    document.onmousemove = mouse;

    window.onresize = () => {
      set_width();
    };

    window.onscroll = () => {
      set_scroll();
    };

    mwah(); // Initialize hearts

    return () => {
      herz.forEach((heart: { remove: () => any }) => heart.remove());
    };
  }, []);

  return null; // No JSX needed; the animation is handled in the DOM
};

export default HeartAnimation;
