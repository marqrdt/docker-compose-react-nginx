import MusicFunctions from "../MusicFunctions";

class PitchClassSequence  {
    modulus = 12;
    constructor(inPCArray) {
        this.pcArray = [];
        inPCArray.forEach( pc => {
            if( typeof pc == "number") {
                this.pcArray.push( pc % this.modulus);
            }
            else if (typeof pc == "string" && pc.toLowerCase() == "a") {
                this.pcArray.push(10);
            }
            else if (typeof pc == "string" && pc.toLowerCase() == "b") {
                this.pcArray.push(11);
            }
            else {
                return false;
            }
        });
    }

    getMembers() {
        return this.pcArray;
    }

    T(transposition) {
        return new PitchClassSequence( this.pcArray.map(x => (x + transposition) % this.modulus) );
    }

    TnI(transposition) {
        return new PitchClassSequence.M(11).T(transposition);
    }

    TnM(mult) {
        return new PitchClassSequence.M(mult).T(transposition);
    }

    I() {
        return new PitchClassSequence( this.pcArray.map(x => (12 - x % this.modulus) ) );
    }

    R(transposition) {
        return new PitchClassSequence( this.pcArray.reverse() );
    }

    M(mult) {
        return new PitchClassSequence( this.pcArray.map(x => (x * mult) % this.modulus));
    }

    addPC(pitch) {
        const numRe = RegExp('\d+');
        if( typeof pitch == "number") {
            this.pcArray.push( pitch % this.modulus);
            return this;
        }
        else if (typeof pitch == "string" && pitch.match(numRe)) {
            this.pcArray.push(Number.parseInt(pitch));
            return this;
        }
        else if (typeof pitch == "string" && pitch.toLowerCase() == "a") {
            this.pcArray.push(10);
            return this;
        }
        else if (typeof pitch == "string" && pitch.toLowerCase() == "b") {
            this.pcArray.push(11);
            return this;
        }
        else {
            return undefined;
        }
    }

    extend(pcArray) {
        this.forEach(pc => this.addPC(pc));
    }

    subSequence(start, length) {
        if ( start < 0 || length < 0) {
            return undefined;
        }
        if ( start + length > this.length ) {
            return undefined;
        }
        return new PitchClassSequence(this.pcArray.slice(start, start+length));
    }

    equals(anotherPitchClassSequence) {
        if ( this.pcArray.length != anotherPitchClassSequence.length ) {
            return false;
        }
        return this.getMembers() == anotherPitchClassSequence.getMembers();

    }
}

export default PitchClassSequence;