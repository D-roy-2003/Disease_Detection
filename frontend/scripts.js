// scripts.js

// Elements
const imageInput = document.getElementById("imageInput");
const showImageBtn = document.getElementById("showImageBtn");
const predictBtn = document.getElementById("predictBtn");
const uploadedImage = document.getElementById("uploadedImage");
const diseaseName = document.getElementById("diseaseName");
const accuracyScore = document.getElementById("accuracyScore");
const suggestedTreatment = document.getElementById("suggestedTreatment");
const uploadAnotherBtn = document.getElementById("uploadAnotherBtn");

// Event Listeners
showImageBtn.addEventListener("click", () => {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            uploadedImage.src = reader.result;
            uploadedImage.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image first.");
    }
});

predictBtn.addEventListener("click", () => {
    if (uploadedImage.src) {
        // Simulate prediction
        setTimeout(() => {
            diseaseName.textContent = "Tomato Blight";
            accuracyScore.textContent = "92%";
            suggestedTreatment.textContent = "Apply fungicide and ensure proper drainage.";
        }, 1000);
    } else {
        alert("Please upload and display an image first.");
    }
});

uploadAnotherBtn.addEventListener("click", () => {
    imageInput.value = "";
    uploadedImage.src = "";
    uploadedImage.style.display = "none";
    diseaseName.textContent = "Healthy";
    accuracyScore.textContent = "95%";
    suggestedTreatment.textContent = "None";
});
