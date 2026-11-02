const $ = (id) => document.getElementById(id);

const make = $('make');
const storyBox = $('story');
const promptBox = $('prompt');
const result = $('result');

make.addEventListener('click', () => {
  const story = storyBox.value.trim();

  if (!story) {
    alert('पहले अपनी कहानी लिखिए।');
    return;
  }

  promptBox.textContent =
    'Create a beautiful 3D cartoon poster based on: ' + story;

  result.hidden = false;

  let button = document.getElementById('posterButton');

  if (!button) {
    button = document.createElement('button');
    button.id = 'posterButton';
    button.textContent = 'पोस्टर बनाएं और डाउनलोड करें';
    result.appendChild(button);
  }

  button.onclick = () => createPoster(story);

  result.scrollIntoView({ behavior: 'smooth' });
});

function createPoster(story) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;

  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
  gradient.addColorStop(0, '#171044');
  gradient.addColorStop(0.5, '#542b91');
  gradient.addColorStop(1, '#ed805c');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1350);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 68px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('TOONSTORY AI', 540, 180);

  ctx.font = '48px sans-serif';

  const words = story.split(' ');
  let line = '';
  let y = 550;

  words.forEach(word => {
    const test = line + word + ' ';

    if (ctx.measureText(test).width > 850) {
      ctx.fillText(line, 540, y);
      line = word + ' ';
      y += 75;
    } else {
      line = test;
    }
  });

  if (line) ctx.fillText(line, 540, y);

  ctx.font = '36px sans-serif';
  ctx.fillText('A STORY MADE WITH IMAGINATION', 540, 1200);

  const link = document.createElement('a');
  link.download = 'toonstory-poster.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

$('copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(promptBox.textContent);
    alert('प्रॉम्प्ट कॉपी हो गया!');
  } catch {
    alert('कॉपी नहीं हो पाया।');
  }
});
