# ToonStory AI — शुरुआती प्रोटोटाइप

यह मोबाइल-फ्रेंडली वेबसाइट प्रोटोटाइप है। यह कहानी के आधार पर AI वीडियो सेवा में इस्तेमाल करने योग्य विस्तृत prompt तैयार करता है।

## चलाने का तरीका
- `index.html`, `style.css`, और `app.js` एक ही फ़ोल्डर में रखें।
- `index.html` ब्राउज़र में खोलें या इन फ़ाइलों को Vercel के static project के रूप में deploy करें।

## जरूरी बात
इस शुरुआती संस्करण में असली वीडियो फ़ाइल जनरेट नहीं होती। वास्तविक text-to-video generation के लिए किसी वीडियो प्रदाता की API, API key, backend/serverless function, और उस प्रदाता की pricing/usage limits जोड़नी होंगी। API key को कभी भी `app.js` या किसी सार्वजनिक frontend फ़ाइल में न रखें।
