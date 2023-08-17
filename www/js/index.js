document.addEventListener("DOMContentLoaded", () => {
  const videoElement = document.getElementById("cameraFeed");
  const idCardElement = document.getElementById("idCardFeed");
  const nextButton = document.getElementById("nextButton");
  const verificationContainer = document.getElementById(
    "verificationContainer"
  );

  // Get user media for video feed
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((stream) => {
        videoElement.srcObject = stream;
        videoElement.play();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  }

  nextButton.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    verificationContainer.style.display = "block";

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          idCardElement.srcObject = stream;
          idCardElement.play();
        })
        .catch((error) => {
          console.error("Error accessing ID card camera:", error);
        });
    }
  });

  closeButton.addEventListener("click", () => {
    if (navigator.app) {
      navigator.app.exitApp();
    } else if (navigator.device) {
      navigator.device.exitApp();
    } else {
      window.close();
    }
  });
});
