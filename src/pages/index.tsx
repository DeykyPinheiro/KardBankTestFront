import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './components/contexts/UserContext';
import { Table } from "react-bootstrap";


import api from "../../api";
import { UserEntity } from './components/entities/user.entity';
import CardUser from './components/cards/CardUser';
import { Card, Form, Button } from "react-bootstrap";
import { Row, Col, Container } from 'react-bootstrap';
import { on } from 'events';


export default function Home() {



  const { saveUser, updateUser, deleteUser, listUser, listAllPhoneNumber, listPhoneNumber } = useContext(UserContext);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cpf, setCpf] = useState("");

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();


    console.log({ name, lastName, email, birthDate, street, number, cpf, phoneNumber })
    // saveUser({ name, lastName, email, birthDate })
  };

  // listAllPhoneNumber(18)
  const test = () => (
    // listAllPhoneNumber(18)
    // console.log("lista de telefones"),
    console.log(listUser)
  )





  return (
    <Container>

      <button onClick={test}>botao</button>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Usuário</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSobrenome">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o sobrenome"
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSobrenome">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o sobrenome"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite o email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formDataNascimento">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Digite a data de nascimento"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formNome">
                  <Form.Label>Rua</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite sua Rua"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formNome">
                  <Form.Label>Numero</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Numero da Rua"
                    value={number}
                    onChange={(event) => setNumber(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formNome">
                  <Form.Label>Numero de telefone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Numero de telefone"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Cadastrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col>
          <Card>
            <Card.Body>
              <Card.Title>Endereco</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome">
                  <Form.Label>Rua</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSobrenome">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o sobrenome"
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </Form.Group>

                
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Telefone</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formSobrenome">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o sobrenome"
                    value={lastName}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite o email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formDataNascimento">
                  <Form.Label>Data de Nascimento</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Digite a data de nascimento"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                  />
                </Form.Group>


              </Form>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>







      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>Endereco</th>
            <th>numero</th>
            <th>Ações</th>
          </tr>
        </thead>
        {listUser.map((user: any) => (
          <CardUser key={user.id} id={user.id} name={user.name} lastName={user.lastName}
            email={user.email} birthDate={user.birthDate} phoneNumber={user.phoneNumber}></CardUser>
        ))}
      </Table>

    </Container>
  )
}

