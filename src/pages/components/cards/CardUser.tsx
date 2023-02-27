import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
// import { Link } from 'react-router-dom';
// import Link from "next/link";





import { UserEntity } from "../entities/user.entity";

export default function CardUser({ id, name, lastName, email, birthDate }: any) {
    // console.log("dento da lista " + user.email);

    const { deleteUser, setUserUpdate } = useContext(UserContext);


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
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{formatBirthDate}</td>
            <td>
                <Link
                    href={{
                        pathname: '/editUser',
                        query: { id, name, lastName, birthDate }
                    }}
                >

                    <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button onClick={() => deleteUser(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>

    )

}


// { id, name, lastName, formatBirthDate }