// Update chapter title when slider moves
function updateChapter() {
    let chapterNumber = document.getElementById("chapter-slider").value;
    let chapterTitle = "Chapter " + chapterNumber + ": ";
    let titles = [
        "The Beginning", "A Dark Reunion", "The Secret Unfolds", 
        "Shadows in the Night", "A New Hope", "The Betrayal", 
        "Revenge", "The Fall", "The Redemption", "The Final Hour"
    ];
    document.getElementById("chapter-title").textContent = chapterTitle + titles[chapterNumber - 1];
}

// Change chapter based on button click
function changeChapter(direction) {
    let slider = document.getElementById("chapter-slider");
    let newValue = parseInt(slider.value) + direction;
    
    // Ensure we don't go out of bounds
    if (newValue >= 1 && newValue <= 10) {
        slider.value = newValue;
        updateChapter();
    }
}
