let pirateVideo = document.querySelector("#pirate-video")
addEventListener("visibilitychange", () => (document.visibilityState === "visible") ? pirateVideo.play() : pirateVideo.pause());