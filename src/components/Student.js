import Score from "./Score"
export default function Student({name,bio,scores}) {
    

   
        return (
            <>
            
            <h1>{name}</h1>
            <h1>{bio}</h1>
             {scores.map(element =>  <Score date={element.date} score={element.score}/>)}
            </>
        )
      


}

// name: 'Wes Mungia',
//         bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
//         scores: [
//           {
//             date: '2018-10-11',
//             score: 62
//           },
//           {
//             date: '2018-11-24',
//             score: 74
//           },
//           {
//             date: '2018-12-19',
//             score: 85
//           }
//         ]