import { UserEntity } from "../entities/user.entity";

export default function CardUser({ id, name, lastName, email, birthDate }: any) {
    // console.log("dento da lista " + user.email);




    const convertDate = (date: any) => {
        var birthDateString = date.toString()
        birthDateString = birthDateString.slice(0, 10)
        birthDateString = birthDateString.split("-")
        var year = birthDateString[0]
        var month = birthDateString[1]
        var day = birthDateString[2]
        birthDateString = `${day}/${month}/${year}`
        return birthDateString
    }

    var formatBirthDate = convertDate(birthDate);





    return (
        <div>
             <p>{name} {lastName} {formatBirthDate} {email} </p>
            
        </div>
    )

}