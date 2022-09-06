//  object destructuring

const band ={
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year : 1968,
    anotherFamousSong: "Kashmir",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName ="queen";
// console.log(bandName, famousSong);

// shortcut

const{bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(restProps);