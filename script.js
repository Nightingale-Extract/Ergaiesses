let currentChapter = 1;

const chapters = [
    "Ch 1: Tradegy",
    "Ch 2: A forbidden mixture",
    "Ch 3: It's...walking?",
    "Ch 4: Our child's back!",
    // Add more chapter titles here
];

const content = [
    "Chapter 1: PEASANTS - A new world awaits the hero.",
    "Chapter 2: The code works!!! The first challenge is complete.",
    "Chapter 3: I'm tired... The hero reflects on the journey so far.",
    "Chapter 4: Back to the mines I go (coding more than writing the story). The hero struggles.",
    // Add more chapter content here
];

// Change chapter content based on the dropdown selection
function changeChapterFromDropdown() {
    const chapterNumber = document.getElementById("chapter-select").value;
    changeChapter(chapterNumber);
}

// Change chapter when previous/next buttons are clicked
function changeChapter(chapterNumber) {
    if (chapterNumber < 1 || chapterNumber > chapters.length) return;

    currentChapter = chapterNumber;

    // Update content section
    document.getElementById("content").innerHTML = `<p>${content[currentChapter - 1]}</p>`;

    // Update dropdown value
    document.getElementById("chapter-select").value = currentChapter;

    //
