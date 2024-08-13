document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/305660262_745875976504068_147389921780940005_n.jpg",
    "./images/2023-06-29.jpg",
    "./images/Triumph.png",
    "./images/image60.png",
    "./images/image61.png",
    "./images/brk.png",
  ];

  let index = 0;

  const updateGallery = () => {
    const [main, left, right] = [
      ".large-image", 
      ".left-overlay .small-image", 
      ".right-overlay .small-image"
    ].map(sel => document.querySelector(sel));

    main.src = images[index];
    left.src = images[(index - 1 + images.length) % images.length];
    right.src = images[(index + 1) % images.length];

    [main, left, right].forEach(img => {
      img.style.opacity = 0;
      setTimeout(() => img.style.opacity = 1, 200);
    });
  };

  document.querySelector(".arrow-left").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateGallery();
  };

  document.querySelector(".arrow-right").onclick = () => {
    index = (index + 1) % images.length;
    updateGallery();
  };

  updateGallery();
});
