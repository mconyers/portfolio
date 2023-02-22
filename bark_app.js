pianoBtn = document.querySelector("#piano")
dogBtn = document.querySelector("#dog")
cscaleBtn = document.querySelector("#CScale")
recordBtn = document.querySelector("#record")
stopBtn = document.querySelector("#stop")
playBtn = document.querySelector("#play")
clearBtn = document.querySelector("#clear")
chordBtn = document.querySelector("#chord")
hideBtn = document.querySelector("#hide")
majorBtn = document.querySelector("#major")
minorBtn = document.querySelector("#minor")
pianoforte = false
doggie = false
scaleNote = false
sequenceNote = false
record = false
chordOn = false
major = false
minor = false
playChordNote = false
audios = false

const CScale = [1, 3, 5, 6, 8, 10, 12, 13]
const chordList = {
    101: [1, 5, 8],
    1010: [1, 4, 8],
    102: [2, 6, 9],
    1020: [2, 5, 9],
    103: [3, 7, 10],
    1030: [3, 6, 10],
    104: [4, 8, 11],
    1040: [4, 7, 11],
    105: [5, 9, 12],
    1050: [5, 8, 12],
    106: [6, 10, 13],
    1060: [6, 9, 13],
    107: [7, 11, 14],
    1070: [7, 10, 14],
    108: [8, 12, 15],
    1080: [8, 11, 15],
    109: [9, 13, 16],
    1090: [9, 12, 16],
    110: [10, 14, 17],
    1100: [10, 13, 17],
    111: [11, 15, 18],
    1110: [11, 14, 18],
    112: [12, 16, 19],
    1120: [12, 15, 19]

}
const keys = document.getElementsByClassName("key")
const chords = document.getElementsByClassName("chord")
let sequence = []
const keyPressed = (e) => {
    if (pianoforte || doggie) {
        note = (e.target.id)
        console.log(note)
        if (audios[note]) { audios[note].currentTime = 0 }
        audios[note].play()
        if (record) {
            sequence.push(note)
            console.log(sequence)
        }
    }
}
for (let key of keys) {
    key.addEventListener("click", keyPressed)
}
const chordChoice = (e) => {
    if (chordOn) {
        for (i = 1; i <= 24; i++) {
            document.getElementById(i).classList.remove("playing")
        }
        chordChosen = (e.target.id)
        if (minor) { chordChosen = chordChosen + 0 }
        console.log(chordChosen)
        i = 0
        const showChord = () => {
            if (i === 3) {
                return
            }
            chordNote = chordList[chordChosen][i]
            console.log(chordNote)
            if (audios) {
                audios[chordNote].play()
            }
            document.getElementById(chordNote).classList.add("playing")
            i++
            showChord()

        }
        showChord()
    }
}
for (let chord of chords) {
    chord.addEventListener("click", chordChoice)
}

const piano = () => {
    audios = Array.from(
        { length: 25 },
        (_, i) => new Audio(`audio/Piano/${i + 1}.wav`)
    )
}

const dog = () => {
    audios = Array.from(
        { length: 25 },
        (_, i) => new Audio(`audio/Dog/${i + 1}.wav`)
    )
}

pianoBtn.addEventListener("click", () => {
    if (!pianoforte) {
        console.log("You chose piano")
        doggie = false
        pianoforte = true
        piano()
    }
})
dogBtn.addEventListener("click", () => {
    if (!doggie) {
        console.log("You chose dog")
        pianoforte = false
        doggie = true
        dog()
    }
})
recordBtn.addEventListener("click", () => {
    if (!record) {
        console.log("You are now recording")
        record = true
        recordBtn.classList.add('recording')
    }

})
stopBtn.addEventListener("click", () => {
    record = false
    console.log("Recording stopped")
    recordBtn.classList.remove('recording')
})
clearBtn.addEventListener("click", () => {
    sequence = []
    console.log("Sequence cleared")
})
playBtn.addEventListener("click", () => {
    playBtn.classList.add('playing')
    console.log(sequence)
    i = -1

    const playSequence = () => {
        if (sequenceNote) {
            audios[sequenceNote].removeEventListener('ended', playSequence)
            document.getElementById(id).classList.remove('playing')
        }
        i++
        if (i == sequence.length) {
            playBtn.classList.remove('playing')
            return
        }
        sequenceNote = sequence[i]
        id = sequenceNote.toString()
        document.getElementById(id).classList.add('playing')


        audios[sequenceNote].play()
        audios[sequenceNote].addEventListener('ended', playSequence)


    }
    playSequence()


})
cscaleBtn.addEventListener("click", () => {
    console.log(CScale)
    i = -1

    const playScale = () => {
        if (scaleNote) {
            audios[scaleNote].removeEventListener('ended', playScale)
            document.getElementById(id).classList.remove('playing')
        }
        i++
        if (i == CScale.length) {
            return
        }
        scaleNote = CScale[i]
        id = scaleNote.toString()
        document.getElementById(id).classList.add('playing')

        audios[scaleNote].play()
        audios[scaleNote].addEventListener('ended', playScale)

    }
    playScale()
})
chordBtn.addEventListener("click", () => {
    console.log("Chords")
    chordOn = true
    major = true
    minor = false
    document.getElementById("chords").classList.remove('chords')
    document.getElementById("chords").classList.add('chordsShow')
    document.getElementById("major").classList.add('chordOn')
})
hideBtn.addEventListener("click", () => {
    console.log("Chords Off")
    chordOn = false
    document.getElementById("chords").classList.remove('chordsShow')
    document.getElementById("chords").classList.add('chords')
    document.getElementById("minor").classList.remove('chordOn')
    for (i = 1; i <= 24; i++) {
        document.getElementById(i).classList.remove("playing")
    }

})
majorBtn.addEventListener("click", () => {
    for (i = 1; i <= 24; i++) {
        document.getElementById(i).classList.remove("playing")
    }
    document.getElementById("major").classList.add('chordOn')
    document.getElementById("minor").classList.remove('chordOn')
    major = true
    minor = false
})
minorBtn.addEventListener("click", () => {
    for (i = 1; i <= 24; i++) {
        document.getElementById(i).classList.remove("playing")
    }
    document.getElementById("minor").classList.add('chordOn')
    document.getElementById("major").classList.remove('chordOn')
    minor = true
    major = false
})
