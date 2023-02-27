import { ConfigProvider } from "antd";
import { createContext, useEffect, useState } from "react";

import api from "api";
import { useRouter } from "next/router";



type UserContextType = {

    listUser: any;
    userUpdate: any,
    setUserUpdate: (data: any) => void
    saveUser: (data: any) => void;
    updateUser: (data: any) => void;
    listALL: () => any;
    deleteUser: (id: any) => void;
};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({ children }: any) {

    const [userUpdate, setUserUpdate] = useState({});
    const [listUser, setListUser] = useState([]);
    const router = useRouter();


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

    async function updateUser(data: any) {



        // //corpo ilustrativo para o exemplo
        // var user = {
        //     id: 16,
        //     name: "eu sou o numero 15",
        //     lastName: "2",
        //     email: "2105110@gmail.com",
        //     birthDate: "2000-07-03T00:00:00",
        //     "active": true
        // }
        // // fim do exemplo

        var user = {
            id: data.id,
            name: data.name,
            lastName: data.lastName,
            birthDate: data.birthDate
        }

        const response = await api.put(`/user`, user).then(
            (response: any) => {
                alert("Usuario Atualizado!")
                router
                    .push('/')
                    .then(() => window.scrollTo(0, 0))
                    listALL()

            },
            (error: any) => {
                alert("Falha ao Atualizar!")
            }
        )
        return response
    }

    async function deleteUser(id: any) {

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
                value={{ saveUser, listALL, updateUser, deleteUser, listUser, userUpdate, setUserUpdate }}>
                {children}
            </UserContext.Provider>
        </ConfigProvider>
    )
}