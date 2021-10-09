const fs = require('fs')

const addStudent = (id,name,subject,degree,comments) => {

   const students = loadStudents()
   const duplicateId= students.filter((obj)=>{
   return obj.id === id
})
   if (duplicateId .length === 0){
   students.push({id,
    name,
    subject,
    degree,
    comments

   })
   saveStudents(students)
   console.log('saved successfully');
}
else{
  console.log('duplicate id error');
}
}
//////create array empty then push elements
const loadStudents = () =>{

    //const dataBuffer = fs.readFileSync('students.json').toString()//return array of json
    //return JSON.parse(dataBuffer)//convert to object
    try{
        const dataBuffer = fs.readFileSync('students.json').toString()//return array of json
         return JSON.parse(dataBuffer)//convert to object
    }
    catch(e){
        return []
    }
}

const saveStudents = (students) =>{
    const saveStudents= JSON.stringify(students)//convert to json
     fs.writeFileSync('students.json',saveStudents)//create file and add data

}
////////remove student
const removeStudent = (id) =>{
    const students=loadStudents()
    const studentsToKeep = students.filter((student) =>{
        return student.id !== id
    })
    saveStudents(studentsToKeep)
    console.log('student removed')
}
 
/////// read //////////
const readStudents=(id) =>{
    const students=loadStudents()

    const student=students.find((student) => {
    return student.id === id
    
})
if(student){
    console.log(student)
    console.log(student.id)
}
else{
    console.log('this id isnot found')
}

}
//////////list students
const listStudents=() =>{
    const students=loadStudents()
    students.forEach((student) => {
        console.log(student.id)
        console.log(student.name)
        console.log(student.subject)
        console.log(student.degree)
        console.log(student.comments)
    })
}
////////////
module.exports= {
    addStudent,
    removeStudent,
   readStudents,
   listStudents
}