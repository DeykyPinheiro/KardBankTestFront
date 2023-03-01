import { ConfigProvider } from "antd";
import { createContext, useEffect, useState } from "react";

import api from "api";
import { useRouter } from "next/router";



type UserContextType = {

    listUser: any;
    listPhoneNumber: any
    userUpdate: any,
    setUserUpdate: (data: any) => void

    saveUser: (data: any) => void;
    updateUser: (data: any) => void;
    listALL: () => any;
    deleteUser: (id: any) => void;

    saveAddressser: (data: any) => void;
    listAllAddress: (id: any) => any;
    updateAddress: (data: any) => void;
    deleteAddress: (id: any) => any;

    savePhoneNumber: (data: any) => void;
    listAllPhoneNumber: (id: any) => any;
    updatePhoneNumber: (data: any) => void;
    deletePhoneNumber: (id: any) => any;

    listAddress: any


};

export const UserContext = createContext({} as UserContextType);

export default function UserProvider({ children }: any) {

    const [userUpdate, setUserUpdate] = useState({});
    const [listUser, setListUser] = useState([]);
    const [listAddress, setListAdress] = useState([]);
    const [listPhoneNumber, setPhoneNumber] = useState([]);
    const router = useRouter();


    useEffect(() => {
        listALL(),
        console.log(listUser);
        
    }, [])


    async function saveUser(data: any) {
        var user = {
            name: data.name,
            lastName: data.lastName,
            birthDate: data.birthDate,
            cpf: data.cpf,
            email: data.email
        }
        const response = await api.post(`/person`, user).then(
            (response: any) => {
                alert("Usuario Cadastrado!")
            },
            (error: any) => {
                alert(error)
            }
        )
        listALL()
        return response
    }

    const listALL = () => {
        api.get("/person").then((response) => {
            const options: any = [];
            response.data.forEach((item: any) => {
                options.push({
                    id: item.id,
                    name: item.name,
                    lastName: item.lastName,
                    email: item.email,
                    birthDate: item.birthDate,
                    addressList: item.addressList[0],
                    phoneNumber: item.phoneNumber[0]
                })
            })
            setListUser(options)
        })

        // listUser.forEach(item => {
        //     listAllPhoneNumber(item.id);
        //     // item.phoneNumber = listAllPhoneNumber[0];  
        // })


        // listUser.forEach(item => {
        //     console.log(item);

        // })
    }

    async function updateUser(data: any) {
        var user = {
            id: data.id,
            name: data.name,
            lastName: data.lastName,
            birthDate: data.birthDate
        }
        const response = await api.put(`/person`, user).then(
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
        const response = api.delete(`/person/${id}`).then(

            (response: any) => {
                alert("Usuario Deletado!")
                listALL()
            },
            (error: any) => {
                alert("Falha ao Deletar!")
            }
        )

    }

    async function saveAddressser(data: any) {
        var address = {
            idPerson: data.idPerson,
            street: data.street,
            number: data.number
        }
        const response = await api.post(`/address`, address)
        // .then(
        //     (response: any) => {
        //         alert("rua Duplicada")
        //     },
        //     (error: any) => {
        //         alert(error)
        //     }
        // )
        listALL()
        return response
    }

    const listAllAddress = (id: any) => {
        api.get(`/address/${id}`).then((response) => {
            const options: any = [];
            response.data.forEach((item: any) => {
                options.push({
                    id: item.id,
                    street: item.street,
                    number: item.number
                })
            })
            setListAdress(options)
        })
    }

    async function updateAddress(data: any) {
        var address = {
            idPerson: data.idPerson,
            street: data.street,
            number: data.number
        }
        const response = await api.put(`/address`, address)
        // .then(
        //     (response: any) => {
        //         alert("Usuario Atualizado!")
        //         router
        //             .push('/')
        //             .then(() => window.scrollTo(0, 0))
        //         listALL()
        //     },
        //     (error: any) => {
        //         alert("Falha ao Atualizar!")
        //     }
        // )
        return response
    }

    async function deleteAddress(id: any) {
        const response = api.delete(`/address/${id}`).then(

            // (response: any) => {
            //     alert("Usuario Deletado!")
            //     listALL()
            // },
            // (error: any) => {
            //     alert("Falha ao Deletar!")
            // }
        )

    }

    async function savePhoneNumber(data: any) {
        var phoneNumber = {
            idPerson: data.idPerson,
            phoneNumber: data.phoneNumber
        }
        const response = await api.post(`/phoneNumber`, phoneNumber)
        return response
    }

    const listAllPhoneNumber = (id: any) => {
        api.get(`/phoneNumber/${id}`).then((response) => {
            const options: any = [];
            response.data.forEach((item: any) => {
                options.push({
                    id: item.id,
                    phoneNumber: item.phoneNumber
                })
            })
            setPhoneNumber(options)

        })
    }

    async function updatePhoneNumber(data: any) {
        var PhoneNumber = {
            id: data.id,
            phoneNumber: data.phoneNumber
        }
        const response = await api.put(`/phoneNumber`, PhoneNumber)
        // .then(
        //     (response: any) => {
        //         alert("Usuario Atualizado!")
        //         router
        //             .push('/')
        //             .then(() => window.scrollTo(0, 0))
        //         listALL()
        //     },
        //     (error: any) => {
        //         alert("Falha ao Atualizar!")
        //     }
        // )
        return response
    }

    async function deletePhoneNumber(id: any) {
        const response = api.delete(`/phoneNumber/${id}`).then(

            // (response: any) => {
            //     alert("Usuario Deletado!")
            //     listALL()
            // },
            // (error: any) => {
            //     alert("Falha ao Deletar!")
            // }
        )

    }






    return (
        <ConfigProvider>
            <UserContext.Provider
                value={{
                    saveUser, listALL, updateUser, deleteUser, listUser, userUpdate, setUserUpdate,
                    saveAddressser, listAllAddress, updateAddress, deleteAddress, savePhoneNumber, listAllPhoneNumber, updatePhoneNumber,
                    deletePhoneNumber, listPhoneNumber, listAddress
                }}>
                {children}
            </UserContext.Provider>
        </ConfigProvider>
    )
}