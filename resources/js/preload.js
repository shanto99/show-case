(function() {
  const imageGallery = document.getElementById("imageGallery");
  const videoGallery = document.getElementById("videoGallery");
  const turtule = document.getElementById("preloaderIconImage");
  const preloaderContainer = document.getElementById("preloaderContainer");
  const preloaderBar = document.getElementById("preloaderBar");
  const explorePanel = document.getElementById("explorePanel");
  const imagePart = document.getElementById("imagePart");
  const videoPart = document.getElementById("videoPart");
  const imageBtn = document.getElementById("btnImageExplore");
  const videoBtn = document.getElementById("btnVideoExplore");

  // const queue = new createjs.LoadQueue(false);
  // const manifest = {
  //   "path": "https://s3.amazonaws.com/coursetro/stuff/",
  //   "manifest": [
  //     {"src":"mountains-clouds.jpg", "loadTimeout": "60000"},
  //     {"src":"adventure-alpine-alps-714258.jpg", "loadTimeout": "60000"},
  //     {"src":"170407220921-07-iconic-mountains-pitons-restricted.jpg", "loadTimeout": "60000"},
  //     {"src":"170407220916-04-iconic-mountains-matterhorn-restricted.jpg", "loadTimeout": "60000"},
  //   ]
  // };

  // function handleFileComplete(event) {
  //     const item = event.result;
  //     item.classList.add('thumbnail');
  //     imageGallery.append(item);
  // }
  // queue.on('progress', event => {
  //       let progress = Math.floor(event.progress * 100);
  //       turtule.style.bottom = `${progress}%`;
  //       if (progress == 100) {
  //           setTimeout(function() {
  //             explorePanel.classList.add('explore-buttons-panel--show');
  //             imageBtn.addEventListener("click", exploreImage);
  //             videoBtn.addEventListener("click", exploreVideo);
  //           }, 3050);

  //       }
  // });
  // queue.on("fileload", handleFileComplete);
  // queue.addEventListener("error", function(error) {
  //   console.log(error.message);
  // });

  // queue.loadManifest(manifest, false);
  // queue.load();

  imageBtn.addEventListener("click", exploreImage);
  videoBtn.addEventListener("click", exploreVideo);

  function exploreImage() {
    videoPart.remove();
    videoGallery.remove();
    imageGallery.classList.remove('d-none');
    preloaderBar.classList.add('loader-bar-move-right');

    imagePart.classList.add('image-part--expanded');
    setTimeout(function() {
      preloaderContainer.classList.add('fade-out');
    }, 1000);
    setTimeout(function() {    
      preloaderContainer.remove();
    }, 3000);
  }

  function exploreVideo() {
    imagePart.remove();
    imageGallery.remove();
    videoGallery.classList.remove('d-none');
    preloaderBar.classList.add('loader-bar-move-left');
    videoPart.classList.add('video-part--expanded');
    
    setTimeout(function() {
      preloaderContainer.classList.add('fade-out');
    }, 1000);
    setTimeout(function() {    
      preloaderContainer.remove();
    }, 3000);
  }

})();