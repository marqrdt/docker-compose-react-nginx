const twelveNoteAggregate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const pcColors = new Map([
        [0, ["rgb(8,0,0)","maroon"]],
        [1, ["rgb(245,130,49)","orange"] ],
        [2, ["rgb(128,128,0)","olive"] ],
        [3, ["rgb(67,99,216)","blue"] ],
        [4, ["rgb(230,25,75)","red"] ],
        [5, ["rgb(240,50,230)","magenta"] ],
        [6, ["rgb(0,0,0)","black"] ],
        [7, ["rgb(191,239,69)","lime"] ],
        [8, ["rgb(70,153,144)","teal"] ],
        [9, ["rgb(255,255,25)","yellow"] ],
        [10,["rgb(145,30,180)","purple"] ],
        [11,["rgb(0,0,117)","navy"] ]
    ]
);

/*
    pcColors is a list of 12 colors used by multiple drawing functions.
*/

export function normalizeInputStringToPCArray( inString ) {
    // Replace commas with spaces
    var outArray = [];
    var regex = /\s*[,|\[,\]{}]\s*/gm;
    var normalizedString = inString.replace(regex, ' ');
    console.log( "Normalized String:" + normalizedString);
    //var splitArray = outString.split(/\s+/);
    normalizedString.split(/\s+/).forEach( function(e) {
        //console.log( "element: " + e.toString() + " is of type: " + typeof e);
        if ( typeof e === "number") {
            outArray.push( String(e % 12) );
        } else if ( typeof e === "string" && e.match(/[aAbBtTeE]/) ) {
            if (e.toLocaleLowerCase() === 't') {
                e = 'a';
            } else if (e.toLocaleLowerCase() === 'e') {
                e = 'b';
            }
            outArray.push( e.toLocaleLowerCase());
        } else if ( typeof e === "string" && e.match(/\d+/)) {
            var num = (parseInt(e)) % 12;
            outArray.push( num.toString(12));
        }
    });
    //console.log( "To Array:" + JSON.stringify(outArray));
    return outArray;
}

export function noteNameToPitchNumber( note ) {
    var outVal = 60;
    var regex =/([a-g])([ei][s])*('{0,5})(,{0,5})/g;
    // group[1] -> base note name
    // group[2] -> accidental ("is" or "es")
    //
    var match = note.matchAll(regex);
    // match basic note names 'a' through 'g'
    //alert(match);
    var matches = Array.from( match );
    //alert(matches[0]);
    if ( typeof matches[0][1] === "string") {
        var noteName = matches[0][1];
        if (noteName === 'a') {
            outVal = 57;
        }
        if (noteName === 'b') {
            outVal = 59;
        }
        if (noteName === 'c') {
            outVal = 48;
        }
        if (noteName === 'd') {
            outVal = 50;
        }
        if (noteName === 'e') {
            outVal = 52;
        }
        if (noteName === 'f') {
            outVal = 53;
        }
        if (noteName === 'g') {
            outVal = 55;
        }
    } else {
        // return default note if note name not in the range [a-g]
        return outVal;
    }
    // match accidental pattern, incrementing or decrementing by 2 for 'is' or 'es' respectively.
    if ( typeof matches[0][2] === "string") {
        //alert(matches[0][2]);
        if (matches[0][2] === "is") {
            outVal += 1;
        }
        if (matches[0][2] === "es") {
            outVal -= 1;
        }
    }
    if ( typeof matches[0][3] === "string") {
        //alert(matches[0][3]);
        outVal += 12 * matches[0][3].length;
    }
    else if ( typeof matches[0][4] === "string") {
        outVal -= 12 * matches[0][4].length;
    }
    // character codes: 'a' = 65
    return outVal;
}

/*
This function accepts and Array of pitches which could be number strings ('1', '10, '11', '3') or
characters in the set [aAbB]. Any numbers above 12 are reduced to mod 12.
    */
export function normalizePCsToNumberArray( inArray ) {
    var outArray = [];
    inArray.forEach( function(e) {
        //console.log( "element: " + e.toString() + " is of type: " + typeof e);
        if ( typeof e === "number") {
            outArray.push(e % 12);
        } else if ( typeof e === "string" && e.match(/aAbB/) ) {
            outArray.push( parseInt(e, 16));
            //console.log( "normalizePCsToNumberArray matched " + e );
        } else if ( typeof e === "string" && e.match(/\d+/) ) {
            outArray.push( parseInt(e) % 12);
        }
    });
}

export function getPCSequenceString( memberArray ) {
    var outString = "";
    memberArray.forEach( function(e){
        if ( typeof e === "number") {
            if ((e % 12) < 10) {
                outString += (e % 12).toString() + " ";
            }
            if (e % 12 === 10) {
                outString += "a ";
            }
            if (e % 12 === 11) {
                outString += "b ";
            }
        }
        if ( typeof e === "string") {
            if (e.toLocaleLowerCase() === 't') {
                e = 'a';
            } else if (e.toLocaleLowerCase() === 'e') {
                e = 'b';
            }
            var n = parseInt(e, 12) % 12;
            if (n < 10) {
                outString += n.toString() + " ";
            }
            if (n === 10) {
                outString += "a ";
            }
            if (n === 11) {
                outString += "b ";
            }
        }

    });
    //alert("outstring: " + outString);
    return outString;
}

export function getPCIntValue( inVal ) {
    var retVal;
    if ( typeof inVal === "string") {
        // could be 't' or 'e' here, need to convert to 'a' and 'b'.
        if (inVal.toLocaleLowerCase() === 't') {
            inVal = 'a';
        } else if (inVal.toLocaleLowerCase() === 'e') {
            inVal = 'b';
        }
        retVal = parseInt(inVal, 12) % 12;
    } else if ( typeof inVal === "number") {
        retVal = inVal % 12;
    }
    //console.log( "inVal: " + inVal + ", return value " + retVal.toString() + " is of type: " + typeof retVal);
    return retVal;
}

export function intersection( setA, setB ) {
    var tempIntersection = [];
    var outArray = [];
    setA.forEach( function(e) {
        setB.forEach( function(f) {
            //console.log( "e: " + getPCIntValue(e) + ", f: " + getPCIntValue(f));
            if ( this.getPCIntValue(e) === this.getPCIntValue(f) ) {
                tempIntersection.push(e);
            }
        });
    });
    // This will preserve the order of setA while ensuring only members in both setA and setB are included.
    var intersectionSet = new Set(tempIntersection);
    setA.forEach( function(e) {
        if ( intersectionSet.has(e) ) {
            outArray.push(e);
        }
    })
    return intersectionSet;
}

export function complement( inSet, aggregate ) {
    var complementArray = [];
    var aggregate = typeof aggregate !== 'undefined' ? aggregate : this.twelveNoteAggregate;
    aggregate.forEach(itemA => {
        inSet.forEach(itemB => {
            if ( itemA != itemB ) {
                complementArray.push(itemA);
            }
        })
    })
    return complementArray;
}

export function getLilypondPitchString( pitches, accidentalPref ) {
    let valueString = "";
    let pitchBuf = Buffer.from(['']);
    /*
    if ( pitches.length > 1 ) {
        pitchBuf += " <";
    }
    */
    //System.out.println( pitches.toString() );
    let index = pitchBuf.length;
    pitches.forEach(pitchNum => {
        console.log( pitchNum );
        if (accidentalPref.toLowerCase() === "s") {
            switch (pitchNum % 12) {
                case 0:
                    valueString = "c";
                    break;
                case 1:
                    valueString = "cis";
                    break;
                case 2:
                    valueString = "d";
                    break;
                case 3:
                    valueString = "dis";
                    break;
                case 4:
                    valueString = "e";
                    break;
                case 5:
                    valueString = "f";
                    break;
                case 6:
                    valueString = "fis";
                    break;
                case 7:
                    valueString = "g";
                    break;
                case 8:
                    valueString = "gis";
                    break;
                case 9:
                    valueString = "a";
                    break;
                case 10:
                    valueString = "ais";
                    break;
                case 11:
                    valueString = "b";
            }
        } else {
            switch (pitchNum % 12) {
                case 0:
                    valueString = "c";
                    break;
                case 1:
                    valueString = "des";
                    break;
                case 2:
                    valueString = "d";
                    break;
                case 3:
                    valueString = "ees";
                    break;
                case 4:
                    valueString = "e";
                    break;
                case 5:
                    valueString = "f";
                    break;
                case 6:
                    valueString = "ges";
                    break;
                case 7:
                    valueString = "g";
                    break;
                case 8:
                    valueString = "aes";
                    break;
                case 9:
                    valueString = "a";
                    break;
                case 10:
                    valueString = "bes";
                    break;
                case 11:
                    valueString = "b";
            }
        }
        index = pitchBuf.write(valueString, index, "utf-8");
        if (pitchNum >= 60) {
            for ( let i = 0; i < (pitchNum - 48) / 12; i++) {
                index = pitchBuf.write("'", index, "utf-8");
            }
        } else if (pitchNum < 48) {
            for ( let i = 0; i < (60 - pitchNum) / 12; i++) {
                index = pitchBuf.write(",", index, "utf-8");
            }
        }
        // append a space if there are more pitches
        if ( index < pitches.length ) {
            index = pitchBuf.write(" ", index, "utf-8");
        }
    })
    // Enclose Lilypond chord notation with ">>"
    /*
    if ( pitches.length > 1 ) {
        pitchBuf += "> ";
    }
    */
    return pitchBuf.toString();
}

export default function getFlavor( noteNums, index, preferredFlavor = "s" ) {
    var outFlavor = preferredFlavor;
    var lastNatural = index;
    var nextNatural = index;
    var naturalPCs = [0, 2, 4, 5, 7, 9, 11];
    while ( lastNatural >= 0 && ! naturalPCs.includes( noteNums[lastNatural]) ) {
        lastNatural--;
    }
    while ( nextNatural < noteNums.length && ! naturalPCs.includes( noteNums[nextNatural]) ) {
        nextNatural++;
    }
    return outFlavor;
}

export function getMeiPitchClass( pitchNum, noteId, flavor = "s", color = "#000" ) {
    // <note xml:id="note-L376F1" dur="4" oct="4" pname="e" accid="n" stem.len="0" />
    var pitch = '';
    var accidental = '';
    var noteColor = color;
    if ( typeof color === "undefined") {
        noteColor = "#000"
    }
    switch (pitchNum % 12) {
        case 0:
            pitch = "c";
            accidental = "n";
            break;
        case 1:
            if (flavor == "s") {
                pitch = "c";
                accidental = "s";
            } else {
                pitch = "d";
                accidental = 'f';
            }
            break;
        case 2:
            pitch = "d";
            accidental = 'n';
            break;
        case 3:
            if (flavor == "s") {
                pitch = "d";
                accidental = "s";
            } else {
                pitch = "e";
                accidental = 'f';
            }
            break;
        case 4:
            pitch = "e";
            accidental = 'n';
            break;
        case 5:
            pitch = "f";
            accidental = 'n';
            break;
        case 6:
            if (flavor == "s") {
                pitch = "f";
                accidental = "s";
            } else {
                pitch = "g";
                accidental = 'f';
            }
            break;
        case 7:
            pitch = "g";
            accidental = 'n';
            break;
        case 8:
            if (flavor == "s") {
                pitch = "g";
                accidental = "s";
            } else {
                pitch = "a";
                accidental = 'f';
            }
            break;
        case 9:
            pitch = "a";
            accidental = 'n';
            break;
        case 10:
            if (flavor == "s") {
                pitch = "a";
                accidental = "s";
            } else {
                pitch = "b";
                accidental = 'f';
            }
            break;
        case 11:
            pitch = "b";
            accidental = 'n';
    }
    return { "xml:id" : "note-L" + noteId, "dur": 4, "oct": 4, "pname": pitch, "accid": accidental, "accid.ges": accidental, "stem.len": 0, "color": noteColor };
}

export function getMeiPitch( pitchNum, noteId, flavor = "s", color = "#000" ) {
    // <note xml:id="note-L376F1" dur="4" oct="4" pname="e" accid="n" stem.len="0" />
    var pitch = '';
    var accidental = '';
    var noteColor = color;
    if ( typeof color === "undefined") {
        noteColor = "#000"
    }
    switch (pitchNum % 12) {
        case 0:
            pitch = "c";
            accidental = "n";
            break;
        case 1:
            if (flavor == "s") {
                pitch = "c";
                accidental = "s";
            } else {
                pitch = "d";
                accidental = 'f';
            }
            break;
        case 2:
            pitch = "d";
            accidental = 'n';
            break;
        case 3:
            if (flavor == "s") {
                pitch = "d";
                accidental = "s";
            } else {
                pitch = "e";
                accidental = 'f';
            }
            break;
        case 4:
            pitch = "e";
            accidental = 'n';
            break;
        case 5:
            pitch = "f";
            accidental = 'n';
            break;
        case 6:
            if (flavor == "s") {
                pitch = "f";
                accidental = "s";
            } else {
                pitch = "g";
                accidental = 'f';
            }
            break;
        case 7:
            pitch = "g";
            accidental = 'n';
            break;
        case 8:
            if (flavor == "s") {
                pitch = "g";
                accidental = "s";
            } else {
                pitch = "a";
                accidental = 'f';
            }
            break;
        case 9:
            pitch = "a";
            accidental = 'n';
            break;
        case 10:
            if (flavor == "s") {
                pitch = "a";
                accidental = "s";
            } else {
                pitch = "b";
                accidental = 'f';
            }
            break;
        case 11:
            pitch = "b";
            accidental = 'n';
    }
    console.log("Inside getMeiPitch: pitch num is " + pitchNum.toString());
    return { "xml:id" : "note-L" + noteId, "dur": 4, "oct": Math.floor( pitchNum / 12) - 1, "pname": pitch, "accid": accidental, "accid.ges": accidental, "stem.len": 0, "color": noteColor };
}