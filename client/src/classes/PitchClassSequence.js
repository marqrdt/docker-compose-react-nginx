class PitchClassSequence {

    constructor(inSequence) {
        this.pcSequence = [];
        if ( typeof(inSequence === "object")) {
            inSequence.forEach(addItemFromObject);
        }

        if ( typeof(inSequence === "string")) {
            const splitRe = /\s+/;
            inSequence.trim().split(splitRe).forEach(addItemFromObject);
        }        

        function addItemFromObject(value, index, array) {
            if (Number.isInteger(value)) {
                this.pcSequence.addItem(value % 12);
            } else if ( !isNaN(Number.parseInt(value)) ) {
                this.pcSequence.addItem(value % 12);
            }
        }
    }

    T(trans) {
        let outSeq = [];
        this.pcSequence.forEach(transposition);
        function transposition(value, index, array) {
            outSeq.addItem((value + trans) % 12);
        }
        return outSeq;
    }

    M(mult) {
        let outSeq = [];
        this.pcSequence.forEach(multiplication);
        function multiplication(value, index, array) {
            outSeq.addItem((value * mult) % 12);
        }
        return outSeq;
    }

    I() {
        return this.M(11);
    }

    R() {
        let outSeq = this.pcSequence;
        return outSeq.reverse();
    }
    
}