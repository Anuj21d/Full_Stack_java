// ======================
// NAVBAR ACTIVE LINK
// ======================

const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

// ======================
// ELEMENTS
// ======================

const uploadBox = document.querySelector(".uploadBox");

const input = document.getElementById("Upload-Image");

const resultBox = document.querySelector(".caption p:last-child");

const moodBox = document.querySelector(".image-mood-info h4");

const hashtagBox = document.querySelector(".hastag-list");

const previewImage = document.querySelector(".user-image img");

const analyzeBtn = document.querySelector(".analyze-btn");

// ======================
// GLOBAL FILE STORAGE
// ======================

let currentFile = null;

// ======================
// OPEN FILE PICKER
// ======================

function openUpload() {
  input.click();
}

// ======================
// DRAG & DROP EVENTS
// ======================

uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();

  uploadBox.classList.add("drag-active");
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("drag-active");
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();

  uploadBox.classList.remove("drag-active");

  const file = e.dataTransfer.files[0];

  handleFile(file);
});

// ======================
// NORMAL FILE UPLOAD
// ======================

input.addEventListener("change", () => {
  const file = input.files[0];

  handleFile(file);
});

// ======================
// HANDLE FILE
// ======================

function handleFile(file) {
  // stop if no file
  if (!file) return;

  // validate image
  if (!file.type.startsWith("image/")) {
    alert("Please upload image file");

    return;
  }

  // store globally
  currentFile = file;

  // ======================
  // IMAGE PREVIEW
  // ======================

  const imageURL = URL.createObjectURL(file);

  previewImage.src = imageURL;

  // ======================
  // RESET UI
  // ======================

  resultBox.innerText = "Image uploaded successfully.";

  moodBox.innerText = "Waiting for analysis...";

  hashtagBox.innerHTML = "<span>Ready</span>";
}

// ======================
// ANALYZE BUTTON
// ======================

analyzeBtn.addEventListener("click", () => {
  if (!currentFile) {
    alert("Please upload image first");

    return;
  }

  // loading UI
  resultBox.innerText = "Analyzing image...";

  moodBox.innerText = "Detecting mood...";

  hashtagBox.innerHTML = "<span>Loading...</span>";

  // disable button
  analyzeBtn.disabled = true;

  convertToBase64(currentFile);
});

// ======================
// CONVERT IMAGE TO BASE64
// ======================

function convertToBase64(file) {
  const reader = new FileReader();

  reader.onload = () => {
    const base64Image = reader.result.split(",")[1];

    analyzeImage(base64Image, file.type);
  };

  reader.readAsDataURL(file);
}

// ======================
// GEMINI AI ANALYSIS
// ======================

async function analyzeImage(base64Image, mimeType) {
  try {
    const response = await fetch(
      "https://capmesketch-worker.capmesketch-ai.workers.dev",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Analyze this image and provide:

1. Creative Instagram caption
2. 5 relevant hashtags
3. Image mood

Return response in this format:

Caption:
...

Hashtags:
...

Mood:
...
`,
                },

                {
                  inline_data: {
                    mime_type: mimeType,
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    console.log(JSON.stringify(data, null, 2));

    // ======================
    // API ERROR
    // ======================

    if (data.error) {
      resultBox.innerText = data.error.message;

      analyzeBtn.disabled = false;

      return;
    }

    // ======================
    // AI RESPONSE
    // ======================

    const aiText = data.candidates[0].content.parts[0].text;

    // ======================
    // SHOW RESULT
    // ======================

    resultBox.innerText = aiText;

    // ======================
    // HASHTAGS
    // ======================

    const hashtags = aiText.match(/#\w+/g);

    hashtagBox.innerHTML = "";

    if (hashtags) {
      hashtags.forEach((tag) => {
        hashtagBox.innerHTML += `<span>${tag}</span>`;
      });
    }

    // ======================
    // MOOD
    // ======================

    const moodMatch = aiText.match(/Mood:\s*(.*)/i);

    if (moodMatch) {
      moodBox.innerText = moodMatch[1];
    }

    // enable button
    analyzeBtn.disabled = false;
  } catch (error) {
    console.log(error);

    resultBox.innerText = "Something went wrong.";

    analyzeBtn.disabled = false;
  }
}
analyzeBtn.addEventListener("click", () => {

  if (analyzeBtn.disabled) return;

  if (!currentFile) {

    alert("Please upload image first");

    return;

  }

  resultBox.innerText =
    "Analyzing image...";

  analyzeBtn.disabled = true;

  convertToBase64(currentFile);

});
