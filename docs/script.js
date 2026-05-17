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

const previewImage = document.querySelector(".user-image img");

const analyzeBtn = document.querySelector(".analyze-btn");

const resultBox = document.querySelector(".caption p:last-child");

const moodBox = document.querySelector(".image-mood-info h4");

const hashtagBox = document.querySelector(".hastag-list");

// ======================
// GLOBAL FILE
// ======================

let currentFile = null;

// ======================
// OPEN FILE PICKER
// ======================

function openUpload() {
  input.click();
}

// ======================
// DRAG EVENTS
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
// NORMAL UPLOAD
// ======================

input.addEventListener("change", () => {
  const file = input.files[0];

  handleFile(file);
});

// ======================
// HANDLE FILE
// ======================

function handleFile(file) {
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please upload image");

    return;
  }

  currentFile = file;

  // preview image
  const imageURL = URL.createObjectURL(file);

  previewImage.src = imageURL;

  // reset UI
  resultBox.innerText = "Image uploaded successfully.";

  moodBox.innerText = "Waiting for analysis...";

  hashtagBox.innerHTML = "<span>Ready</span>";
}

// ======================
// ANALYZE BUTTON
// ======================

analyzeBtn.addEventListener("click", async () => {
  if (analyzeBtn.disabled) return;

  if (!currentFile) {
    alert("Please upload image first");

    return;
  }

  resultBox.innerText = "Analyzing image...";

  moodBox.innerText = "Detecting mood...";

  hashtagBox.innerHTML = "<span>Loading...</span>";

  analyzeBtn.disabled = true;

  try {
    // ======================
    // CONVERT IMAGE TO BASE64
    // ======================

    const reader = new FileReader();

    reader.onload = async () => {
      const base64Image = reader.result.split(",")[1];

      // ======================
      // SEND TO WORKER
      // ======================

      const response = await fetch(
        "http://localhost:8787",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            image: base64Image,

            mimeType: currentFile.type,
          }),
        },
      );

      const data = await response.json();

      console.log(data);

      // ======================
      // ERROR
      // ======================

      if (!data.success) {
        resultBox.innerText = data.error;

        analyzeBtn.disabled = false;

        return;
      }

      // ======================
      // SHOW RESULT
      // ======================

      resultBox.innerText = data.result;

      // ======================
      // HASHTAGS
      // ======================

      const hashtags = data.result.match(/#\w+/g);

      hashtagBox.innerHTML = "";

      if (hashtags) {
        hashtags.forEach((tag) => {
          hashtagBox.innerHTML += `<span>${tag}</span>`;
        });
      }

      // ======================
      // MOOD
      // ======================

      const moodMatch = data.result.match(/Mood:\s*(.*)/i);

      if (moodMatch) {
        moodBox.innerText = moodMatch[1];
      }

      analyzeBtn.disabled = false;
    };

    reader.readAsDataURL(currentFile);
  } catch (error) {
    console.log(error);

    resultBox.innerText = "Something went wrong.";

    analyzeBtn.disabled = false;
  }
});
