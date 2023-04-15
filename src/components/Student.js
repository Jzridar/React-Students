import Score from "./Score"
export default function Student(props) {
    const data = props.studentData
    console.log(`student ${data}`)

    return data.students.map((student, index) => {
        return (
            <>
            <h1>{student.name}</h1>
            <h1>{student.bio}</h1>
             <Score data={student.scores}/>
            </>
        )
      })


}