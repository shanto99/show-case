<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/preloader.css') }}">
    <link rel="stylesheet" href="{{ asset('css/gallery.css') }}">
    {{-- <script src="https://code.createjs.com/1.0.0/preloadjs.min.js"></script> --}}
    <script src="{{ asset('js/preload.js') }}"></script>
</head>

<body>
    <div class="gallery" id="gallery">
        <div class="image-gallery d-none" id="imageGallery">
            <img style="width: 100%; height: 100%;" src="{{ asset('images/preloader-bg.jpg') }}" alt="">
        </div>
        <div class="video-gallery d-none" id="videoGallery">
            <video id="demoVideo" style="width: 100%; height: 100%; object-fit: cover" autoplay loop controls>
                <source src="{{ asset('videos/demo.mp4') }}" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="preloader-container" id="preloaderContainer">
        <div class="explore-buttons-panel explore-buttons-panel--show" id="explorePanel">
            <div class="image-part" id="imagePart">
                <h4 id="btnImageExplore">Photography</h4>
            </div>
            <div class="video-part" id="videoPart">
                <h4 id="btnVideoExplore">Videography</h4>
            </div>
        </div>
        <div class="preloader-bar" id="preloaderBar">
            {{-- <div class="preloader-icon" id="preloaderIcon">
                <img class="preloader-icon-img" id="preloaderIconImage" src="{{ asset('images/turtule.png') }}"
                    alt="turtule">
            </div> --}}
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
