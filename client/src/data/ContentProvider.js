import React from "react";

class ContentProvider {

    heading = {
        "home": "newscores.com is the Web Portal of Paul Marquardt, a composer, artist, and software developer living in Central New Mexico.",
        "about": `Paul Marquardt is a composer, artist and software developer living in Albuquerque, New Mexico.`,
        "events": "Upcoming events and appearances.",
        "artwork": `Some words about my artwork and creative process`,
        "fractals": `Here are fractal images I've created. I hope you enjoy them.`,
        "music": `Some words about my musical compositions.`,
        "music_scores": "A somewhat incomplete of music compositions along with some downloadable scores. Some exist only in digital form or as a computer-assisted perfermance and others are not being shared right now.",
        "random_melody": "Here is a random melody rendered right in your browser. As my site evolves, you'll be able to select various profiles for melodic shape and stochastic variety to produce more interesting melodies.",
        "music_recordings": "Some recordings of my music compositions.",
        "codez": "Feel free to use/steal (with proper attribution) some of my codez.",
        "blogz": "Read my Blog on various subjects ON WHICH I AM AN AN INCONTROVERTIBLE EXPERT.",
        "signin": "Sign into this site for mo better stuff."
    }

    content = {
        "home": "",

        "about": `I was born in Baltimore and was raised in a diverse musical family. My mentors include Theldon Myers, Samuel Adler,
        Joseph Schwantner, Robert Morris, Salvatore Martirano and Morgan Powell. I also studied piano with Elier Suarez, James Avery, and William Heiles.
        My music has received awards from ASCAP (1991) and BMI (1988) and has been performed in the U.S., Asia and in Europe.
        Along with pianist/composer Drew Krause, I performed as the piano duo THUMP, premiering several works written for us as well as standard works 
        from the two-piano and four-hand repertoire. My diverse life experience led me to forge a unique path as a composer, exploring modalities of mathematics, 
        computer science, Western Music, jazz, and Eastern spiritualities. Through my work as a software developer, I've incorporated algorithmic elements into
        my music as well as designed and written software libraries for exploring algorithmic composition and Musical Set Theory.`,

        "music": `My output as a composer spans a wide range of stylistic, technical, and aesthetic approaches. Please feel free to download my music at the Scores link above.`,

        "events": "Here you can find a list of upcoming events.",

        "artwork": `My artwork is created by a computer program I designed and wrote. It uses simple mathematical functions which
        create chaotic and unpredictable patterns. Sometimes called 'fractals', I prefer the term 'chaotic functions', which can produce 
        visually recognizable patterns over time. These patterns are rendered on a canvas as individual dots. Over millions of iterations of the function,
        these dots form patterns which can range from simple curves to wildly chaotic shapes. Through my artwork, I attempt to cross back and forth between 
        the realms of logic and fantasy. The actual prints show an intense level of detail, revealing shapes and swirls not visible in the reduced images 
        printed here. This site is still under construction and I have many more available.`,
        "fractals": `This site is still under construction, so check back soon for some of my fractal artwork.`,
        "music_scores": `Here are some scores of my musical compositions.`,
        "music_recordings": `This section is under construction. Please check back later.`,
        "codez": "List of codez repositories here.",
        "blog": "You'll find some of my ramblings here."
    }

    eventz = [
        {
            "name": "Movable Do plays Haydn and Marquardt",
            "date": "6:30 PM, September 24, 2022",
            "location": "5821 Rio Lama Rd, NE, Rio Rancho New Mexico",
            "description": "Movable Do will perform a concert featuring Haydn's Piano Trio in C Major and Paul Marquardt's 'Young Frankenstein' Variations and music by Handel (arr. Halvorsen)."
        }
    ]

    blogz = [
        {
            "file": "/blogposts/ramblings_001.html",
            "date": "September 9, 2022",
            "title": "Some thoughts"
        },
        {
            "file": "/blogposts/ramblings_002.html",
            "date": "September 10, 2022",
            "title": "Some more thoughts on Javascript"
        },
        {
            "file": "/blogposts/ramblings_003.html",
            "date": "September 11, 2022",
            "title": "Some thoughts on music"
        }
    ]

    scorez = [
        {
            title: "HEADSPIN",
            year: "1987",
            duration: "5'",
            url: "/scores/HEADSPIN_for_8_saxophones_and_two_amplified_pianos.pdf",
            description: "for eight saxophones and two amplified pianos"
        },
        {
            title: "Quatrain",
            year: "1987",
            duration: "9'",
            url: "scores/Quatrain_for_alto_saxophone_and_piano.pdf",
            description: "for alto saxophone and piano"
        },
        {
            title: "DEVILS",
            year: "1986",
            duration: "9'",
            url: "scores/Devils_for_two_amplified_pianos.pdf",
            description: "for two amplified violins"
        },
        {
            title: "Angels",
            year: "2015",
            duration: "9'",
            url: "scores/Angels_for_two_violins.pdf",
            description: "for two violins"
        },
        {
            title: "Piano Etudes Book I",
            year: "1992",
            duration: "10'",
            url: "scores/Piano_Etudes_Book_I.pdf",
            description: "for solo piano"
        },
        {
            title: "TEST PATTERN",
            year: "1991",
            duration: "10'",
            url: "scores/TEST_PATTERN_for_two_pianos.pdf",
            description: "for two pianos"
        },
        {
            title: "Sonata",
            year: "2015",
            duration: "13'",
            url: "scores/Sonata_for_solo_B-flat_clarinet.pdf",
            description: "for solo b-flat clarinet"
        },
        {
            title: "Mvt. VI from Visions from the Karmadhatu: Deva Realm",
            year: "2015",
            duration: "9'",
            url: "scores/Deva_for_piano.pdf",
            description: "for solo piano"
        },
        {
            title: "Variations on the theme from 'Young Frankenstein'",
            year: "2016",
            duration: "10'",
            url: "scores/Young_Frankenstein_Variations_for_solo_violin.pdf",
            description: "for solo violin"
        },
         {
            title: "Etude: Gently Flowing",
            year: "2017",
            duration: "4'",
            url: "scores/Etude II--Gently_Flowing--for_piano.pdf",
            description: "for solo piano"
        },
        {
            title: "Etude: Counterpoint",
            year: "2018",
            duration: "4'",
            url: "scores/Etude IV--Counterpoint--for_piano.pdf",
            description: "for solo piano"
        },
        {
            title: "Prelude After JSB",
            year: "2018",
            duration: "4'",
            url: "scores/Prelude_after_JSB_for_piano.pdf",
            description: "for solo piano"
        },
        {
            title: "Elegy",
            year: "2021",
            duration: "12'",
            url: "scores/Elegy_for_Viola_and_Piano.pdf",
            description: "for viola and piano"
        },
        {
            title: "Etude: After BB",
            year: "2022",
            duration: "4'",
            description: "for solo piano"
        },
        {
            title: "Kalpa",
            year: "2017",
            duration: "16.4 million years",
            description: "live computer-generated electronics"
        },
       {
            title: "Monkeymind",
            year: "2022",
            duration: "8'",
            description: "a computer-controlled improvisation for 8 players"
        }
    ]

    artworks = {
        "2016-7600": {
            path: "/images/artwork/2016-7600.png"
        },
        "2265-8718": {
            path: "/images/artwork/2265-8718.png"
        },
        "4455-37372": {
            path: "/images/artwork/4455-37372.png"
        },
        "8079-18400": {
            path: "/images/artwork/8079-18400.png"
        },
        "9210-13649": {
            path: "/images/artwork/9210-13649.png"
        },
        "9670-10800": {
            path: "/images/artwork/9670-10800.png"
        },

    }

    codez = [
        {
            title: "Set Theory",
            url: "https://bitbucket.org/paul_marquardt/set-theory/src/master/",
            description: "A Java library for manipulating and analyzing Pitch-Class Set-like structures"
        },
        {
            title: "BBC Download",
            url: "https://bitbucket.org/paul_marquardt/bbc-download/src/master/",
            description: "A python application for downloading sound files from the (gargantuan) BBC online audio library"
        },        
        {
            title: "Ultimatum",
            url: "https://bitbucket.org/paul_marquardt/ultimatum/src/master/",
            description: "An interactive improvisation game for two performers and computer"
        }        
    ]

    constructor(props) {
        this.props = props;
        //console.log( "props passed to this:" + this.props.name)
    }

    getScoreList = (props) => {
        //if ( props.name in this.data ) {
            return this.scorez;
        //}
    }

    getBlogList = (props) => {
        //if ( props.name in this.data ) {
            return this.blogz;
        //}
    }

    getEventList = (props) => {
        //if ( props.name in this.data ) {
            return this.eventz;
        //}
    }

    getRepoList = (props) => {
        //if ( props.name in this.data ) {
            return this.codez;
        //}
    }

    getContent = (props) => {
        //if ( props.name in this.data ) {
            return this.content[props.name];
        //}
    }

    getHeading = (props) => {
        //if ( props.name in this.data ) {
            return this.heading[props.name];
        //}
    }
    getArtworkList = (filter) => {
        return this.artworks
    }

    getMeiTemplate = (staffData) => `
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
        <?xml-model href="http://music-encoding.org/schema/3.0.0/mei-all.rng" type="application/xml" schematypens="http://purl.oclc.org/dsdl/schematron"?>
        <mei xmlns="http://www.music-encoding.org/ns/mei" meiversion="3.0.0">
            <meiHead>
                <fileDesc>
                    <titleStmt>
                        <respStmt>
                            <persName role="Composer">Paul Marquardt</persName>
                        </respStmt>
                    </titleStmt>
                    <pubStmt>
                        <date>2016-09-27 13:32:47</date>
                    </pubStmt>
                </fileDesc>
                <encodingDesc>
                    <projectDesc>
                        <p>Transcoded from SetTheoryWeb with Verovio version 0.9.13-dev-2db4a57</p>
                        <p>Encoded by: Set Theory Web Project</p>
                    </projectDesc>
                </encodingDesc>
            </meiHead>
            <music>
                <body>
                    <mdiv>
                        <score>
                            <scoreDef xml:id="scoredef-000000083381832" midi.bpm="90">
                                <staffGrp xml:id="m-000000047097018" symbol="brace" barthru="true">
                                 </staffGrp>
                            </scoreDef>
                            <section xml:id="section-000000205758969">
                                ${ staffData }
                            </section>
                        </score>
                    </mdiv>
                </body>
            </music>
        </mei>
        `

    getStaffData = () =>{
        let notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        return `<measure xml:id="measure-000000129995775" right="dbl">
            <staff xml:id="staff-000000051890327" n="1">
                <layer xml:id="layer-000000045369537" n="1">
                    <chord xml:id="chord-L379F2" dur="4" stem.dir="down">
                        <note xml:id="note-L379F2S1" oct.ges="4" oct="4" pname="${ notes[Math.floor(Math.random() * notes.length)] }" accid.ges="n" />
                        <note xml:id="note-L379F2S2" oct.ges="4" oct="5" pname="${ notes[Math.floor(Math.random() * notes.length)] }" accid.ges="n" />
                    </chord>
                </layer>
            </staff>
            <staff xml:id="staff-000000049075641" n="2">
                <layer xml:id="layer-000000196724784" n="1">
                    <chord xml:id="chord-L379F3" dur="4" stem.dir="up">
                        <note xml:id="note-L381F1" oct="2" pname="${ notes[Math.floor(Math.random() * notes.length)] }" accid.ges="n" stem.dir="up" />
                        <note xml:id="note-L383F2" oct="3" pname="${ notes[Math.floor(Math.random() * notes.length)] }" accid.ges="n" stem.dir="up" />
                    </chord>
                </layer>
            </staff>
        </measure>`;
    }
}

export default ContentProvider;