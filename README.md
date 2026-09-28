# Principles of Management — Study Guide (Exam 2)

A single-file study page: notes, flashcards, matching, quizzes and a practice exam for
Principles of Management, Exam 2. Live at https://daniel-projectt.github.io/mgmt/

There is no professor handout for this exam, so the outline is what **ten Quizlet sets**
for it (638 cards) agree on, grouped into 24 concept sections under five topics —
planning & goals, decision making, strategic management, organizing, people & change —
and ranked by how many of the ten sets test each concept (five or more / four / three /
fewer). Every question is tagged with its section and its tier; the practice exam can
drill by either, and "The 50" draws fifty questions covering every section.

Where the sets disagree or are wrong (satisficing vs groupthink, monochronic vs
polychronic, licensing vs "transnational", mission vs goals, delegation vs
"authoritarian", intuition vs "programmed", three versions of SMART, step 4 of the
planning process), the page says so.

## Build

    sh build.sh                      # assembles index.html from src/ and runs the unit tests
    node src/test-dom.js <dir with node_modules/jsdom>   # clicks through the page in jsdom

Works offline once opened (service worker + manifest).
