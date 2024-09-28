 const Age18 = () => {
    const person = {
        age : 14,
        class : "S1B",
        name : "John Doe",
        grade : "A"
    };

    const person_name = <span className=" font-semibold text-black">{person.name} </span>

    if (person.name === "Manzi") {
        return (
            <div>
              {person_name}:  You can not be promoted 😡😡
            </div>
        )
    }

    if (person.grade === "A" && person.age >= 14) {
        if (person.class === "S1A" && person.name === "John Doe") {
            return (
                <div>
                  {person_name}:  You can not be promoted 😡
                </div>
            )
        } 

        
        return (
            <div className=" text-success">
              {person_name} : You can promoted ✅ 
            </div>
        )
    } else if( person.grade === "B"){
        return(
            <div> 
                {person_name} your able to do reassessment
            </div>
        )
    } else {
        return(
            <div>
                {person_name} repeated
            </div>
        )
    }
  
 }
 export default Age18