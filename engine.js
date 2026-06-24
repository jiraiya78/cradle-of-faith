// --- AUDIO CONFIG ---
const bgm = new Audio("lofi-bgm.mp3");
bgm.loop = true;
bgm.volume = 0.35;
let audioInitialized = false;

function initializeAudio() {
  if (audioInitialized) return;
  bgm
    .play()
    .then(() => {
      audioInitialized = true;
      document.getElementById("audioStatus").textContent = "🔊 Audio: On";
    })
    .catch(() => console.log("Awaiting interaction for audio context."));
}

window.toggleAudio = function () {
  if (!audioInitialized) {
    initializeAudio();
    return;
  }
  if (bgm.paused) {
    bgm.play();
    document.getElementById("audioStatus").textContent = "🔊 Audio: On";
  } else {
    bgm.pause();
    document.getElementById("audioStatus").textContent = "🔇 Audio: Muted";
  }
};

// --- CORE STORY ENGINE ---
const textDisplay = document.getElementById("textDisplay");
const choicesContainer = document.getElementById("choicesContainer");
let currentTypingTimeout = null;

function renderScene(sceneKey) {
  // Pull data directly from window.storyData (loaded from story.js)
  const scene = window.storyData[sceneKey];
  if (!scene) return;

  window.currentAmbientMode = scene.ambient || "quiet";
  choicesContainer.innerHTML = "";
  if (currentTypingTimeout) clearTimeout(currentTypingTimeout);

  let index = 0;
  textDisplay.textContent = "";

  function typeWriter() {
    if (index < scene.text.length) {
      textDisplay.textContent += scene.text.charAt(index);
      index++;
      let delay = scene.text.charAt(index - 1) === "." ? 400 : 25;
      currentTypingTimeout = setTimeout(typeWriter, delay);
    } else {
      scene.choices.forEach((choice, idx) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.style.animationDelay = `${idx * 0.1}s`;
        button.onclick = () => {
          initializeAudio();
          renderScene(choice.nextScene);
        };
        choicesContainer.appendChild(button);
      });
    }
  }
  typeWriter();
}

// --- CANVAS BACKGROUND RENDERING SYSTEM ---
const canvas = document.getElementById("graphicsCanvas");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
let mouse = { x: width / 2, y: height / 2 };
window.currentAmbientMode = "chaos";

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class AsciiParticle {
  constructor() {
    this.reset();
    this.y = Math.random() * height;
  }
  reset() {
    this.x = Math.random() * width;
    this.y = height + 20;
    const chars =
      window.currentAmbientMode === "chaos"
        ? ["#", "@", "*", "?", "!"]
        : [".", ":", "+"];
    this.char = chars[Math.floor(Math.random() * chars.length)];
    this.scale = Math.random() * 6 + 10;
    this.speedY =
      window.currentAmbientMode === "chaos"
        ? Math.random() * -3 - 1
        : Math.random() * -0.6 - 0.2;
    this.speedX =
      (Math.random() - 0.5) * (window.currentAmbientMode === "chaos" ? 4 : 0.4);
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y < -20 || this.x < -20 || this.x > width + 20) this.reset();
  }
  draw() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    let lightingBoost =
      distance < 250 ? (1.0 - distance / 250) * 2.5 + 1.0 : 1.0;

    let color = `rgba(156, 163, 175, ${this.alpha * (lightingBoost > 1 ? lightingBoost * 0.5 : 1)})`;

    // Act I & Distraction states (Frantic Purple/Magenta neon party vibe)
    if (window.currentAmbientMode === "chaos") {
      color = `rgba(168, 85, 247, ${this.alpha * 0.5 * lightingBoost})`;
    }
    // Act II & III Contemplation states (Deep, focused amber/candlelight feel)
    else if (window.currentAmbientMode === "quiet") {
      color = `rgba(245, 158, 11, ${this.alpha * 0.6 * lightingBoost})`;
    }
    // Act IV & V Spiritual realization states (Calming, radiant emerald/divine light)
    else if (window.currentAmbientMode === "peace") {
      color = `rgba(16, 185, 129, ${this.alpha * 0.8 * lightingBoost})`;
    }

    ctx.fillStyle = color;
    ctx.font = `${this.scale}px monospace`;
    ctx.fillText(this.char, this.x, this.y);
  }
}

const particles = Array.from({ length: 75 }, () => new AsciiParticle());
let pulseTime = 0;

function animate() {
  ctx.fillStyle = "#08080a";
  ctx.fillRect(0, 0, width, height);
  pulseTime += 0.02;
  const pulse = Math.sin(pulseTime) * 35;
  let gradRad =
    window.currentAmbientMode === "peace" ? 500 + pulse : 300 + pulse;
  let lightingGradient = ctx.createRadialGradient(
    mouse.x,
    mouse.y,
    10,
    mouse.x,
    mouse.y,
    gradRad,
  );

  if (window.currentAmbientMode === "chaos")
    lightingGradient.addColorStop(0, "rgba(59, 12, 112, 0.15)");
  else if (window.currentAmbientMode === "peace")
    lightingGradient.addColorStop(0, "rgba(29, 78, 216, 0.12)");
  else lightingGradient.addColorStop(0, "rgba(255, 255, 255, 0.04)");
  lightingGradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = lightingGradient;
  ctx.fillRect(0, 0, width, height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

// --- INIT ---
animate();
// Wait for DOM to ensure story script is loaded
window.addEventListener("DOMContentLoaded", () => {
  renderScene("start");
});
