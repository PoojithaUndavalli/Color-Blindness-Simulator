const upload = document.getElementById("upload");
const mode = document.getElementById("mode");

const originalCanvas = document.getElementById("originalCanvas");
const simCanvas = document.getElementById("simCanvas");

const octx = originalCanvas.getContext("2d");
const sctx = simCanvas.getContext("2d");

let img = new Image();

upload.addEventListener("change", function(e){

    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        img.onload = function(){

            originalCanvas.width = img.width;
            originalCanvas.height = img.height;

            simCanvas.width = img.width;
            simCanvas.height = img.height;

            octx.drawImage(img,0,0);
            simulate();

        }

        img.src = event.target.result;

    }

    reader.readAsDataURL(file);

});

mode.addEventListener("change", simulate);

function simulate(){

    if(!img.src) return;

    sctx.drawImage(img,0,0);

    const imageData = sctx.getImageData(
        0,
        0,
        simCanvas.width,
        simCanvas.height
    );

    const data = imageData.data;

    for(let i=0;i<data.length;i+=4){

        let r=data[i];
        let g=data[i+1];
        let b=data[i+2];

        let nr=r;
        let ng=g;
        let nb=b;

        switch(mode.value){

            case "protanopia":

                nr = 0.567*r + 0.433*g;
                ng = 0.558*r + 0.442*g;
                nb = 0.242*g + 0.758*b;

                break;

            case "deuteranopia":

                nr = 0.625*r + 0.375*g;
                ng = 0.700*r + 0.300*g;
                nb = 0.300*g + 0.700*b;

                break;

            case "tritanopia":

                nr = 0.950*r + 0.050*g;
                ng = 0.433*g + 0.567*b;
                nb = 0.475*g + 0.525*b;

                break;

            case "achromatopsia":

                const gray = 0.299*r + 0.587*g + 0.114*b;

                nr = gray;
                ng = gray;
                nb = gray;

                break;

            default:

                nr=r;
                ng=g;
                nb=b;
        }

        data[i]=nr;
        data[i+1]=ng;
        data[i+2]=nb;

    }

    sctx.putImageData(imageData,0,0);

}
