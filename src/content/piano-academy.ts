export interface AcademyStage {
  id: string;
  title: string;
  promise: string;
  prerequisites: string[];
  strands: { title: string; topics: string[] }[];
  milestone: string;
}

export interface AcademyProgram {
  id: string;
  title: string;
  description: string;
  stages: AcademyStage[];
}

export const SHARED_MUSICIANSHIP_STAGES: AcademyStage[] = [
  { id: "core-1", title: "Developing Pianist I", promise: "Turn Foundations into dependable one-octave fluency.", prerequisites: ["piano.performance.first-piece"], strands: [
    { title: "Technique", topics: ["Major scales: C, G, D, F—hands separately", "Natural, harmonic, and melodic minor in A, E, D", "Five-finger patterns in all keys", "Tonic triads and inversions", "Introductory tonic arpeggios over one octave"] },
    { title: "Reading & rhythm", topics: ["Grand-staff landmark reading", "Eighth notes and rests", "Simple meters 2/4, 3/4, 4/4", "Daily unseen four-bar reading"] },
    { title: "Ear & creativity", topics: ["Sing then find scale degrees 1–3–5", "Copy short rhythms and melodies", "Improvise question-and-answer phrases"] },
  ], milestone: "Perform three contrasting early pieces and create a short original piece." },
  { id: "core-2", title: "Developing Pianist II", promise: "Coordinate both hands and move through common keys.", prerequisites: ["core-1"], strands: [
    { title: "Technique", topics: ["Major/minor scales through three sharps/flats", "Hands together: one then two octaves", "Contrary-motion C and similar-motion fingering", "Root-position and inverted triads", "Major/minor tonic arpeggios—hands separately"] },
    { title: "Reading & rhythm", topics: ["Intervals rather than note-by-note decoding", "Dotted rhythms, ties, pickup beats", "6/8 compound meter", "Two-part reading"] },
    { title: "Musicianship", topics: ["Phrase and cadence recognition", "Transpose simple melodies", "I–IV–V–I in studied keys", "Pedal changes by harmony"] },
  ], milestone: "Perform a two-hand piece with controlled balance, pulse, and pedal." },
  { id: "core-3", title: "Intermediate Pianist I", promise: "Build multi-octave technique and independent musical decisions.", prerequisites: ["core-2"], strands: [
    { title: "Technique", topics: ["All major scales; relative harmonic/melodic minors", "Two octaves hands together", "Chromatic scale", "Major/minor arpeggios two octaves", "Dominant seventh arpeggio introduction", "Broken-chord patterns and wrist rotation"] },
    { title: "Reading & rhythm", topics: ["Ledger lines and octave signs", "Syncopation and triplets", "Three-voice textures", "Sight-reading without stopping"] },
    { title: "Ear & theory at keyboard", topics: ["Intervals through octave", "Triad qualities and inversions", "Diatonic harmony", "Melody and bass transcription"] },
  ], milestone: "Prepare a polished multi-page work and recover musically from mistakes." },
  { id: "core-4", title: "Intermediate Pianist II", promise: "Gain fluency across keys, textures, and longer forms.", prerequisites: ["core-3"], strands: [
    { title: "Technique", topics: ["All major/minor scales four octaves", "Parallel and contrary motion", "Arpeggios in root position and inversions", "Dominant and diminished seventh arpeggios", "Octave preparation, repeated notes, ornaments"] },
    { title: "Musicianship", topics: ["Secondary dominants and modulation", "Four-part voice leading", "Form: binary, ternary, rondo, sonata principles", "Memorization by harmony and structure"] },
    { title: "Performance", topics: ["Voicing inner and outer lines", "Pedal varieties", "Tempo planning", "Recording-led self-diagnosis"] },
  ], milestone: "Present a 15-minute program spanning contrasting styles." },
  { id: "core-5", title: "Advanced Pianist I", promise: "Integrate virtuoso foundations with analytical and aural command.", prerequisites: ["core-4"], strands: [
    { title: "Technique", topics: ["Scales in thirds, sixths, and tenths", "Double-note preparation", "Four-octave seventh arpeggios", "Wide-spaced and compound arpeggios", "Octaves, tremolo, rapid chord repetition"] },
    { title: "Musicianship", topics: ["Chromatic harmony and modal mixture", "Counterpoint and independent voices", "Score reduction", "Advanced rhythmic subdivision and polyrhythm"] },
    { title: "Creative transfer", topics: ["Play by ear in multiple keys", "Arrange melody and harmony", "Improvise from harmonic form", "Analyze and emulate stylistic language"] },
  ], milestone: "Build and defend an interpretation of a substantial work." },
  { id: "core-6", title: "Independent Pianist", promise: "Plan, diagnose, and sustain lifelong artistic development.", prerequisites: ["core-5"], strands: [
    { title: "Technique", topics: ["Personalized maintenance across all technical families", "Tempo, endurance, evenness, voicing, and recovery diagnostics", "Technique derived from current repertoire"] },
    { title: "Artistry", topics: ["Historical/style-informed choices", "Long-form architecture", "Collaborative listening", "Stage and recording preparation"] },
    { title: "Independence", topics: ["Select repertoire and set evidence-based goals", "Design practice cycles", "Seek specialist feedback where physical or stylistic judgment exceeds MIDI evidence"] },
  ], milestone: "Design and deliver a recital or equivalent recorded portfolio." },
];

export const ARPEGGIO_DEVELOPMENT = [
  "Hear a chord as one sonority, then roll its notes slowly",
  "Root-position major and minor triads over one octave",
  "Learn thumb crossings and fingering as guided physical technique",
  "Ascending and descending hands separately",
  "Two octaves and hands together",
  "First and second inversions; begin from any chord member",
  "All-key major/minor tonic arpeggios with tempo and evenness goals",
  "Dominant seventh and diminished seventh arpeggios",
  "Four octaves, contrary/compound patterns, and varied articulation",
  "Apply arpeggiation to accompaniment, repertoire, improvisation, and voicing",
] as const;

export const CLASSICAL_PATH: AcademyProgram = {
  id: "classical", title: "Classical Pianist", description: "Technique, reading, repertoire, interpretation, and performance from early literature through advanced independent study.", stages: [
    { id: "classical-1", title: "Classical Language I", promise: "Hear and shape the grammar of early keyboard music.", prerequisites: ["core-1"], strands: [
      { title: "Repertoire", topics: ["Baroque dances and inventions preparation", "Classical-period miniatures", "Romantic character pieces", "Contemporary tonal works"] },
      { title: "Interpretation", topics: ["Motif, phrase, cadence", "Articulation without over-pedaling", "Melody/accompaniment balance"] },
    ], milestone: "Perform three contrasting works with intentional phrasing." },
    { id: "classical-2", title: "Polyphony and Classical Form", promise: "Control independent lines and understand formal direction.", prerequisites: ["core-2", "classical-1"], strands: [
      { title: "Polyphony", topics: ["Two-voice inventions", "Imitation and subject entries", "Voice-specific fingering and articulation"] },
      { title: "Classical style", topics: ["Sonatina movements", "Alberti and broken-chord accompaniment", "Ornaments, cadences, and proportion"] },
    ], milestone: "Perform an invention and complete sonatina with clear structure." },
    { id: "classical-3", title: "Color, Pedal, and Romantic Texture", promise: "Shape layered sonority without losing line or harmony.", prerequisites: ["core-3", "classical-2"], strands: [
      { title: "Sound", topics: ["Half/change/flutter pedal", "Voicing melody within chords", "Rubato anchored to pulse", "Large dynamic arcs"] },
      { title: "Repertoire", topics: ["Romantic lyric work", "Etude addressing a defined technique", "Impressionist color introduction"] },
    ], milestone: "Record, critique, and revise a color-focused performance." },
    { id: "classical-4", title: "Sonata, Counterpoint, and Virtuosity", promise: "Sustain architecture while technical demands intensify.", prerequisites: ["core-4", "classical-3"], strands: [
      { title: "Form", topics: ["Sonata-allegro argument", "Fugue subject/episode planning", "Variation and rondo form"] },
      { title: "Technique in repertoire", topics: ["Rapid scales/arpeggios", "Octaves and repeated notes", "Double notes", "Leaps and redistribution"] },
    ], milestone: "Perform a substantial sonata movement and contrapuntal work." },
    { id: "classical-5", title: "Advanced Repertoire and Interpretation", promise: "Develop defensible interpretations of major works.", prerequisites: ["core-5", "classical-4"], strands: [
      { title: "Study", topics: ["Editions and source awareness", "Historical performance questions", "Large-form harmonic map", "Comparative listening without imitation"] },
      { title: "Preparation", topics: ["Sectional memory systems", "Slow/fast practice rotation", "Performance simulation", "Failure recovery"] },
    ], milestone: "Present a 30-minute balanced classical program." },
    { id: "classical-6", title: "Independent Classical Artist", promise: "Maintain repertoire, collaborate, and direct continued study.", prerequisites: ["core-6", "classical-5"], strands: [
      { title: "Professional musicianship", topics: ["Accompanying and chamber listening", "Concerto/ensemble preparation", "Audition and recital programming", "Teaching one’s own practice process"] },
    ], milestone: "Produce a recital portfolio with program notes and reflective evidence." },
  ]
};

export const JAZZ_PATH: AcademyProgram = {
  id: "jazz", title: "Jazz Pianist", description: "Ear-led harmony, groove, vocabulary, repertoire, comping, improvisation, arranging, and ensemble musicianship.", stages: [
    { id: "jazz-1", title: "Blues, Swing, and the Ear", promise: "Make jazz time and call-and-response physical before theory becomes dense.", prerequisites: ["core-1"], strands: [
      { title: "Language", topics: ["12-bar blues form", "Swing eighth-note feel", "Blues scale and chord tones", "Call-and-response improvisation"] },
      { title: "Keyboard", topics: ["Shell voicings: root–3rd/7th", "Basic walking bass shapes", "Simple blues comping rhythms"] },
    ], milestone: "Play and improvise through a blues without losing form." },
    { id: "jazz-2", title: "Standards and Functional Harmony", promise: "Navigate tunes through guide tones rather than memorized chord blocks.", prerequisites: ["core-2", "jazz-1"], strands: [
      { title: "Harmony", topics: ["Diatonic seventh chords", "ii–V–I in major and minor", "Guide-tone voice leading", "Turnarounds and secondary dominants"] },
      { title: "Repertoire", topics: ["Lead-sheet reading", "Melody plus shells", "Intros/endings", "Transposition to practical keys"] },
    ], milestone: "Perform a standard melody, comping chorus, and improvised chorus." },
    { id: "jazz-3", title: "Voicings, Vocabulary, and Transcription", promise: "Connect what great players played to choices available under your hands.", prerequisites: ["core-3", "jazz-2"], strands: [
      { title: "Voicings", topics: ["Rootless A/B voicings", "9ths, 11ths, and 13ths", "Drop-2/open structures", "Voice-led comping"] },
      { title: "Improvisation", topics: ["Chord-tone targeting", "Approach/enclosure notes", "Motivic development", "Transcribe, sing, analyze, transpose, apply"] },
    ], milestone: "Transcribe and creatively transform a chorus fragment in several keys." },
    { id: "jazz-4", title: "Rhythmic and Ensemble Fluency", promise: "Make the groove support conversation with other musicians.", prerequisites: ["core-4", "jazz-3"], strands: [
      { title: "Time", topics: ["Comping interaction and space", "Bebop, ballad, bossa, samba, funk, gospel influences", "Metric displacement and rhythmic independence"] },
      { title: "Ensemble roles", topics: ["Accompanying a soloist or singer", "Bass-player awareness", "Trading and cueing", "Texture and register choices"] },
    ], milestone: "Record contrasting trio-style and solo-piano arrangements." },
    { id: "jazz-5", title: "Advanced Harmony and Reharmonization", promise: "Expand harmonic possibility while preserving melody, voice leading, and form.", prerequisites: ["core-5", "jazz-4"], strands: [
      { title: "Harmony", topics: ["Altered dominants and upper structures", "Tritone substitution and backdoor motion", "Modal interchange", "Diminished/whole-tone/melodic-minor applications", "Reharmonization constraints"] },
      { title: "Solo piano", topics: ["Bass, inner voices, melody, and fills", "Stride and walking textures", "Introductions, interludes, endings", "Spontaneous arranging"] },
    ], milestone: "Create and perform an original reharmonized standard arrangement." },
    { id: "jazz-6", title: "Independent Jazz Artist", promise: "Build a personal language that remains connected to history, ear, and ensemble truth.", prerequisites: ["core-6", "jazz-5"], strands: [
      { title: "Artistry", topics: ["Deep artist/style studies", "Original composition", "Advanced transcription by ear", "Personal voicing and rhythmic vocabulary", "Set construction and bandleading"] },
    ], milestone: "Produce a live or studio set of standards and original music." },
  ]
};

export const PIANO_ACADEMY_PROGRAMS: AcademyProgram[] = [
  { id: "shared", title: "Shared Pianist Core", description: "Technique, reading, ear, harmony, creativity, and performance required by both pathways.", stages: SHARED_MUSICIANSHIP_STAGES },
  CLASSICAL_PATH,
  JAZZ_PATH,
];
