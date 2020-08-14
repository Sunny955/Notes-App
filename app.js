// const sum=require("./utils");
//  console.log(sum(10,-9));
// const GetNotes=require("./notes");
// const validator=require("validator");
// const chalk=require("chalk");
// console.log(chalk.green("Success!"));
// console.log(
// `
//  CPU:${chalk.red("90%")}
//  RAM:${chalk.green("40%")}
//  DISK:${chalk.yellow("70%")}
// `
// );
// console.log(chalk.green.bgBlue.inverse.bold("Bolt"));
// const warning=chalk.keyword('yellow');
// console.log(warning("Hello! Don't Go Ahed Warning"));
// // const a=validator.isEmail("jakas@.com");
// // const b=validator.isURL("https://abc.com");
// console.log(GetNotes());
// // console.log(a+" "+b);
// console.log(process.argv[2]);

const chalk=require("chalk");
const yargs=require("yargs");
const notes=require("./notes");

//Create add command
 yargs.command({
     command:"add",
     describe:"Add a new note",
     builder:{
         title:{
             decribe:"Note's title",
             demandOption:true,
             type:"string"
         },
         body:{
             describe:"Note's body",
             demandOption:true,
             type:"string"
         }
     },
     handler(argv){notes.addNotes(argv.title,argv.body);}  
 });
 
 //Create remove command
 yargs.command({
     command:"remove",
     describe:"Remove a note",
     builder:{
         title:{
             describe:"Note's title",
             demandOption:true,
             type:"string"
         }
     },
     handler(argv) {notes.removeNotes(argv.title);}
 }); 

 //Create List command
 yargs.command({
     command:"list",
     describe:"List of notes",
     handler() {notes.listNotes();}
 });

 //Create read command
 yargs.command({
     command:"read",
     describe:"Read notes",
     builder:{
         title:{
             describe:"Note's title",
             demandOption:true,
             type:"string"
         }
     },
     handler(argv){notes.readNotes(argv.title);}
 });
//  const {title} = yargs.argv;
// console.log(title);
 yargs.parse();
