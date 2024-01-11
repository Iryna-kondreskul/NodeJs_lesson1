const fs = require("fs/promises");

// ============== читає файл ===========================
// const readFile = async() => {
    // const text = await fs.readFile("./files/file.txt", "utf-8");
    // console.log(text);

//      const buffer = await fs.readFile("./files/file.txt");
//       console.log(buffer);
//      const text = buffer.toString();
//    console.log(text)
//   }

//  readFile();


// ========== Добавить текст в конец =================
// const addText = async()=> {
//     const result = await fs.appendFile("./files/file.txt", "\nadd text");
//     console.log(result)
// }

// addText();
// =========================================================


// ============= writeFile - Видаляє старе і записує нове =================
// const replaceText = async()=> {
//     const result = await fs.writeFile("./files/file2.txt", "writeFile - Видаляє старе і записує нове");
//     console.log(result);
// }

// replaceText();

// =========================================================

// fs.readFile("./files/file.txt")
// .then(data => console.log(data))
// .catch(error => console.log(error.message))

// false.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })