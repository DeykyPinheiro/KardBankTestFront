import React, { useContext, useEffect, useState } from 'react';
import { Table } from "react-bootstrap";


import api from "../../api";
import { UserEntity } from './components/entities/user.entity';
import CardUser from './components/cards/CardUser';
import { UserContext } from './components/contexts/UserContext';


export default function Home() {

  const { saveUser, updateUser, deleteUser, listUser } = useContext(UserContext);



  return (
    <>
      <h1>pq isso nao funcionando?</h1>

      <h1>CRUD funcionando krai</h1>
      <button onClick={saveUser}>Cria Usuario</button>
      <button onClick={updateUser}>Atualizar Usuario</button>
      <button onClick={deleteUser}>deletar Usuario</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        {listUser.map((user: any) => (
          <CardUser key={user.id} id={user.id} name={user.name} lastName={user.lastName} email={user.email} birthDate={user.birthDate}></CardUser>
        ))}
      </Table>

    </>
  )
}

