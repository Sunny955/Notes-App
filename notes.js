const fs=require("fs");
const chalk=require("chalk");
const getNotes=() => "Your notes are...";
const addNotes=function(title,body){
   const notes =loadnotes();
   const duplicateNote=notes.find((note) => note.title===title);
   if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    }); 
     savenote(notes);
     console.log("New Note Added");
   }
   else{
       console.log("Given title pre exsist....give some other title");
   }
 
}
const savenote =(notes) => {
 const JSONnotes=JSON.stringify(notes);
 fs.writeFileSync("notes.json",JSONnotes);
}
const loadnotes=() => {
    try{
        const dataBuffer=fs.readFileSync("notes.json");
        const JSONdata=dataBuffer.toString();
        const data=JSON.parse(JSONdata);
        return data;
    }catch(e){
      return [];
    }
}

const removeNotes=(title) => {
    const notes=loadnotes();
    const newNotes=notes.filter((note) => note.title !== title);
  
    if(newNotes.length!==notes.length){
        console.log(chalk.bgGreen("Note removed!!"));
        savenote(newNotes);
    }else{
        console.log(chalk.bgRed("No note found!!"));
    }
   
}

const listNotes=() =>{
    console.log(chalk.greenBright("Your Notes...."));
    const notes=loadnotes();
    notes.forEach((note,index) => {
       console.log(chalk.yellowBright(index+1+". "+note.title));
    });
}

const readNotes=(title) =>{
    console.log(chalk.blueBright("Reading Notes....."));
    const notes=loadnotes();
    const Newnote=notes.find((note) => note.title===title);
    if(Newnote){
        console.log(chalk.yellowBright(Newnote.title));
        console.log(Newnote.body);
    }
    else{
        console.log(chalk.bgRed("Note not found!!"));
    }
    
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
};