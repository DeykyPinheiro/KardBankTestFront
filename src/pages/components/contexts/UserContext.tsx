import { ConfigProvider } from "antd";
import { createContext, useEffect, useState } from "react";

import api from "api";



type UserContextType = {

    listUser: any;
    saveUser: (data: any) => void;
    updateUser: (data: any) => void;
    listALL: () => any;
    deleteUser: (id: any) => void;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({ children }: any) {


    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        listALL()
    }, [])

    async function saveUser(data: any) {

        var user = {
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            birthDate: data.birthDate
        }

        const response = await api.post(`/user`, user).then(
            (response: any) => {
                alert("Usuario Cadastrado!")
            },
            (error: any) => {
                alert("Usuario Ja existe!")
            }
        )
        listALL()
        return response
    }

    const listALL = () => {
        console.log("listei");

        api.get("/user").then((response) => {
            const options: any = [];

            response.data.content.forEach((item: any) => {
                options.push({
                    id: item.id,
                    name: item.name,
                    lastName: item.lastName,
                    email: item.email,
                    birthDate: item.birthDate
                })
            })
            setListUser(options)
        })
    }

    async function updateUser() {

        //corpo ilustrativo para o exemplo
        var user = {
            id: 16,
            name: "eu sou o numero 15",
            lastName: "2",
            email: "2105110@gmail.com",
            birthDate: "2000-07-03T00:00:00",
            "active": true
        }
        // fim do exemplo


        const response = await api.put(`/user`, user).then(
            (response: any) => {
                alert("Usuario Atualizado!")

            },
            (error: any) => {
                alert("Falha ao Atualizar!")
            }
        )
        return response
    }

    async function deleteUser(id: any) {

        // // var id = 16
        // alert("id para deletar: " + id)

        const response = api.delete(`/user/${id}`).then(

            (response: any) => {
                alert("Usuario Deletado!")
                listALL()
            },
            (error: any) => {
                alert("Falha ao Deletar!")
            }
        )

    }

    return (
        <ConfigProvider>
            <UserContext.Provider
                value={{ saveUser, listALL, updateUser, deleteUser, listUser }}>
                {children}
            </UserContext.Provider>
        </ConfigProvider>
    )
}