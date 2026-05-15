// ======================
// NAVBAR ACTIVE LINK
// ======================

let links = document.querySelectorAll(".nav-link");

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

// ======================
// OPEN FILE PICKER
// ======================

function openUpload() {
  input.click();
}

// ======================
// DRAG OVER
// ======================

uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();

  uploadBox.classList.add("drag-active");
});

// ======================
// DRAG LEAVE
// ======================

uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("drag-active");
});

// ======================
// DROP IMAGE
// ======================

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
  // check if file exists
  if (!file) return;

  // check image type
  if (!file.type.startsWith("image/")) {
    alert("Please upload image file");

    return;
  }

  // ======================
  // SHOW IMAGE PREVIEW
  // ======================

  const imageURL = URL.createObjectURL(file);

  previewImage.src = imageURL;

  // ======================
  // LOADING UI
  // ======================

  resultBox.innerText = "Analyzing image...";

  moodBox.innerText = "Detecting mood...";

  hashtagBox.innerHTML = "<span>Loading...</span>";

  // ======================
  // CONVERT IMAGE TO BASE64
  // ======================

  const reader = new FileReader();

  reader.onload = async () => {
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
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_NEW_API_KEY",

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

    console.log(data);

    // ======================
    // ERROR HANDLING
    // ======================

    if (data.error) {
      console.log(data.error);

      resultBox.innerText = data.error.message;

      return;
    }

    // ======================
    // GET AI TEXT
    // ======================

    const aiText = data.candidates[0].content.parts[0].text;

    console.log(aiText);

    // ======================
    // DISPLAY RESULT
    // ======================

    resultBox.innerText = aiText;

    // ======================
    // OPTIONAL:
    // SPLIT HASHTAGS & MOOD
    // ======================

    const hashtags = aiText.match(/#\w+/g);

    if (hashtags) {
      hashtagBox.innerHTML = "";

      hashtags.forEach((tag) => {
        hashtagBox.innerHTML += `<span>${tag}</span>`;
      });
    }

    // mood extraction
    const moodMatch = aiText.match(/Mood:\s*(.*)/i);

    if (moodMatch) {
      moodBox.innerText = moodMatch[1];
    }
  } catch (error) {
    console.log(error);

    resultBox.innerText = "Something went wrong.";
  }
}
