const $ = (id) => document.getElementById(id);
$('make').addEventListener('click', () => {
  const story = $('story').value.trim();
  if (!story) { alert('पहले अपनी कहानी लिखिए।'); $('story').focus(); return; }
  const prompt = `Create a polished animated video based on this story.\n\nSTORY:\n${story}\n\nSTYLE: ${$('style').value}\nLANGUAGE: ${$('language').value}. Use natural spoken dialogue and voice-over in this language.\nASPECT RATIO: ${$('ratio').value}\nTARGET DURATION: ${$('duration').value}\n\nDIRECTION: Keep character appearances consistent across every scene. Use expressive characters, cinematic camera movement, clear storytelling, suitable background music and sound effects. Do not add subtitles or on-screen text unless requested.`;
  $('prompt').textContent = prompt;
  $('result').hidden = false;
  $('result').scrollIntoView({behavior:'smooth',block:'start'});
});
$('copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('prompt').textContent); $('copy').textContent='कॉपी हो गया ✓'; }
  catch { alert('कॉपी नहीं हो पाया। प्रॉम्प्ट को दबाकर चुनें और कॉपी करें।'); }
});
