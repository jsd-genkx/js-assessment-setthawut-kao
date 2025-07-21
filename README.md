# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

1.สร้าง field โดยการลบ console.log(this.field); ที่ line 29 เเละเพิ่ม
for (const row of this.field) {
console.log(row.join(""));
}
เเละลอง newGame.print(); เพื่อดูว่าเเผนที่ขึ้นมาเเล้ว

2.สร้าง fn การเดินด้วย switch case โดยการเรียก this.positionRow, this.positionCol มาจาก Class field
โดย จุดยืนของ Char คือ index 0, 0
เมื่อกด u จะ -1 จากจุดแนวนอน(Row)จากปัจจุบัน ก็คือขึ้นข้างบน
เมื่อกด d จะ +1 จากจุดแนวนอน(Row)จากปัจจุบัน ก็คือลงข้างล่าง
เมื่อกด l จะ -1 จากจุดแนวตั้ง(Col)จากปัจจุบัน ก็คือมาทางซ้าย
เมื่อกด r จะ +1 จากจุดแนวตั้ง(Col)จากปัจจุบัน ก็คือมาทางขวา
เเละเมื่อ ใส่ค่าอื่นๆ นอกจาก U, D, L ,R จะเเสดงข้อความ "Invalid direction. Please use u, d, l, or r." เเละให้ return continue เพื่อเดินใหม่

3.สร้าง loop เช็คสถานะ Char ให้มีเงื่อนไขให้มีการออกนอก field = เเพ้,เดินไปเจอหลุม = เเพ้ ,หากเดินไปเจอหมวก = ชนะ

4.สร้าง fn playGame โดยประกาศ gameStatus = continue เเละใช้ loop while โดยเมื่อ gameStatus === continue อยู่ จะให้เเสดงข้อความ
"Which way? (u=up, d=down, l=left, r=right)"

5.เปลี่ยนคำสั่งจาก newGame.print -> newGame.playGame เพื่อทดสอบเกมส์ว่าได้ตรงกับที่ต้องการตาม Requiment หรือไม่

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
