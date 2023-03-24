//Object Destructor

const band = {
    bandName: 'The Local train',
    famousTracks : "Choo Lo"
}

// const bandName = band.bandName;

// let {bandName, famousTracks} = band;
let {bandName: myBandName, famousTracks: myTrack} = band;
myBandName ="The Yellow Diary";
myTrack = "kive mukhde";

console.log(myBandName+" " + myTrack);