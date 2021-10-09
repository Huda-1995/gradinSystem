/////////////////////
const yargs =require('yargs');
const students =  require('./student')
//add
yargs.command({
    command: 'add',
    describe:'Add student',
    builder:{
        id:{
            describe:'this is student unique number',
            demandOption: true,
            type:'number' 
        },
        name:{
            describe:'this is student name',
            demandOption: true,
            type:'string'
        },
        subject:{
            describe:'this is subject name',
            demandOption: true,
            type:'string'
        },
        degree:{
            describe:'this is subject degree',
            demandOption: true,
            type:'number'
        },
        comments:{
            describe:'this is student notes',
            //demandOption: true,
            type:'string'
        }
    },
    handler:(argv) =>{
       students.addStudent(argv.id,argv.name,argv.subject,argv.degree,argv.comments)
    }
})
//read
yargs.command({
    command: 'read',
    describe: 'Read Note',
    builder:{
        id:{
            describe:'this is student unique number',
            demandOption: true,
            type:'number' 
        }

    },
    handler:(argv)=>{
       //console.log('Read Student Information',argv.id)
       students.readStudents(argv.id)
      
    }
})
//list
yargs.command({
    command: 'list',
    describe: 'List students',
    handler:(argv)=>{
       students.listStudents()
    }
})
//delete
yargs.command({
    command: 'delete',
    describe: 'Delete students',
     builder:{
        id:{
            describe:'this is student unique number',
            demandOption: true,
            type:'number' 
        }

    },
    handler:(argv)=>{
        students.removeStudent(argv.id)
    }
})



yargs.parse();