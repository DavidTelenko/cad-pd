export type OnCompleteCallback = (param: string) => void;

export const encodeImageURL = (
    imageURL: string,
    onComplete: OnCompleteCallback) => {
    //
    let image = new Image();
    image.onload = () => {
        let patternFileString = encodeImage(image);
        onComplete(patternFileString);
    }
    image.src = imageURL;
};

export const encodeImage = (image: HTMLImageElement): string => {
    // copy image on canvas
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let patternFileString = "";

    if (!context) return patternFileString;

    canvas.width = 16;
    canvas.height = 16;

    // document.body.appendChild(canvas)
    // canvas.style.width = '200px'

    for (let orientation = 0; orientation > -2 * Math.PI; orientation -= Math.PI / 2) {
        // draw on canvas - honor orientation
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(orientation);
        context.drawImage(image,
            -canvas.width / 2, -canvas.height / 2,
            canvas.width, canvas.height);
        context.restore();

        // get imageData
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        // generate the patternFileString for this orientation
        if (orientation !== 0) patternFileString += '\n';

        // NOTE bgr order and not rgb!!! so from 2 to 0
        for (let channelOffset = 2; channelOffset >= 0; channelOffset--) {
            // console.log('channelOffset', channelOffset)
            for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < imageData.width; x++) {

                    if (x !== 0) patternFileString += ' ';

                    const offset = (y * imageData.width * 4) + (x * 4) + channelOffset;
                    const value = imageData.data[offset];

                    patternFileString += String(value).padStart(3);
                }

                patternFileString += '\n';
            }
        }
    }

    return patternFileString;
};

export const triggerDownload = (
    patternFileString: string,
    fileName = 'pattern-marker.patt') => {
    // tech from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server

    let domElement = window.document.createElement('a');

    domElement.href = window.URL.createObjectURL(
        new Blob([patternFileString], {
            type: 'text/plain'
        }));

    domElement.download = fileName;
    document.body.appendChild(domElement);
    domElement.click();
    document.body.removeChild(domElement);
}

export const buildFullMarker = (
    innerImageURL: string,
    pattRatio: number,
    size: number,
    color: string | CanvasGradient | CanvasPattern,
    onComplete: OnCompleteCallback) => {
    // 
    const whiteMargin = 0.1;
    const blackMargin = (1 - 2 * whiteMargin) * ((1 - pattRatio) / 2)
    // const blackMargin = 0.2

    const innerMargin = whiteMargin + blackMargin

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = canvas.height = size

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height)

    const prepareContext = (c: typeof color, margin: number) => {
        if (!context) return;
        context.fillStyle = c;
        context.fillRect(
            margin * canvas.width,
            margin * canvas.height,
            canvas.width * (1 - 2 * margin),
            canvas.height * (1 - 2 * margin)
        );
    };

    // copy image on canvas
    prepareContext(color, whiteMargin);

    // clear the area for innerImage (in case of transparent image)
    prepareContext("white", innerMargin);

    // display innerImage in the middle
    let innerImage = document.createElement("img");

    innerImage.addEventListener("load", () => {
        // draw innerImage
        if (!context) return;

        context.drawImage(innerImage,
            innerMargin * canvas.width,
            innerMargin * canvas.height,
            canvas.width * (1 - 2 * innerMargin),
            canvas.height * (1 - 2 * innerMargin)
        );

        onComplete(canvas.toDataURL());
    });

    innerImage.src = innerImageURL;
};