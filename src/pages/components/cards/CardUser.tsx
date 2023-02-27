import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import { UserEntity } from "../entities/user.entity";
export default function CardUser({ id, name, lastName, email, birthDate }: any) {
    // console.log("dento da lista " + user.email);

    const { deleteUser } = useContext(UserContext);




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
        // <p>{name} {lastName} {formatBirthDate} {email} </p>
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{formatBirthDate}</td>
            <td>
                <button>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => deleteUser(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>

    )

}
