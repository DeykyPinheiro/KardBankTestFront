import React, { useEffect, useState } from 'react';
import api from "../../api";
import { UserEntity } from './components/entities/user.entity';


export default function Home() {

  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    listALL()
  }, [])


  async function saveUser() {
    //corpo ilustrativo para o exemplo
    var user = {
      name: "test",
      lastName: "2",
      email: "2105110@gmail.com",
      birthDate: "1996-07-03T00:00:00"
    }
    // fim do exemplo





    const response = await api.post(`/user`, user).then(
      (response: any) => {
        alert("Usuario Cadastrado!")

      },
      (error: any) => {
        alert("Usuario Ja existe!")
      }
    )
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




  async function deleteUser() {

    var id = 16

    const response = api.delete(`/user/${id}`).then(

      (response: any) =>{
        alert("Usuario Deletado!")
      },
      (error: any) =>{
        alert("Falha ao Deletar!")
      }
    )

  }









  return (
    <>
      <h1>pq isso nao funcionando?</h1>

      <button onClick={saveUser}>Cria Usuario</button>
      <button onClick={updateUser}>Atualizar Usuario</button>
      <button onClick={deleteUser}>deletar Usuario</button>
    </>
  )
}

