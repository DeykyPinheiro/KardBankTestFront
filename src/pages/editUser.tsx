import { Card, Form, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "./components/contexts/UserContext";
import { Col, Row, Container } from 'react-bootstrap';


export default function EditUser() {
    const router = useRouter();
    const { id, name, lastName, birthDate } = router.query;

    const { updateUser } = useContext(UserContext)

    const [idNew, setId] = useState("");
    const [nameNew, setName] = useState("");
    const [lastNameNew, setLastname] = useState("");
    const [birthDateNew, setBirthDate] = useState("");


    useEffect(() => {
        setId(id)
        setName(name)
        setLastname(lastName)
        setBirthDate(birthDate)
    }, [])










    const handleSubmit = (event: any) => {
        event.preventDefault();
        // console.log({idNew,  nameNew, lastNameNew, birthDateNew })
        updateUser(({ id: idNew, name: nameNew, lastName: lastNameNew, birthDate: birthDateNew }))
        // console.log(userUpdate)
    };

    return (

        <Container>
            <Row>
                <Col>

                    <Card>
                        <Card.Body>
                            <Card.Title>Atulizacao de Usuário</Card.Title>
                            < Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o nome"
                                        value={nameNew}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formSobrenome">
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o sobrenome"
                                        value={lastNameNew}
                                        onChange={(event) => setLastname(event.target.value)}
                                    />
                                </Form.Group>


                                <Form.Group controlId="formDataNascimento">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Digite a data de nascimento"
                                        value={birthDateNew}
                                        onChange={(event) => setBirthDate(event.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Atualizar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>

                    <Card>
                        <Card.Body>
                            <Card.Title>Atulizacao de Usuário</Card.Title>
                            < Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o nome"
                                        value={nameNew}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formSobrenome">
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o sobrenome"
                                        value={lastNameNew}
                                        onChange={(event) => setLastname(event.target.value)}
                                    />
                                </Form.Group>


                                <Form.Group controlId="formDataNascimento">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Digite a data de nascimento"
                                        value={birthDateNew}
                                        onChange={(event) => setBirthDate(event.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Atualizar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>

                    <Card>
                        <Card.Body>
                            <Card.Title>Atulizacao de Usuário</Card.Title>
                            < Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o nome"
                                        value={nameNew}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formSobrenome">
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o sobrenome"
                                        value={lastNameNew}
                                        onChange={(event) => setLastname(event.target.value)}
                                    />
                                </Form.Group>


                                <Form.Group controlId="formDataNascimento">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Digite a data de nascimento"
                                        value={birthDateNew}
                                        onChange={(event) => setBirthDate(event.target.value)}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Atualizar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>










        </Container>
    )

}