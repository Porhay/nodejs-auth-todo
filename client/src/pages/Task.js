import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import { fetchTasks, deleteTask, createTask } from "../http/taskAPI";



function Task() {

  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true)

  const loadData = () => {
    setLoading(false)
    fetchTasks()
      .then(res => setData(res))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    
    <div style={{textAlign: 'center'}} className="App" >
      
      <h1 style={{ marginTop: 40 }}>
        <label className="w-100 text-center text-secondary">
          What else?
          <span className="h3" data-tootik="Hurmmm...">&#x1f914;</span>
          
        </label>
      </h1>
      

      <Container>
        <Row className="justify-content-md-center">

          <Col md='auto' >
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Write smth ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={value}
                onInput={e => setValue(e.target.value)}
              />
              <Button variant="outline-secondary" id="button-addon2" onClick={
                () => createTask(value).then(loadData).then(setValue(''))
              }>
                New Daily
              </Button>
            </InputGroup>
          </Col>

        </Row>

        <Row className="justify-content-md-center">
          <Card style={{ width: 'auto', marginTop: 20 }}>
            <ListGroup variant="flush">
              {
                loading === false ?
                  data.map((element, index) => {
                    return (
                      <ListGroup.Item style={{ fontSize: 22, display: 'flex' }} >
                        <div style={{ marginRight: 12 }}>
                          {element.task}
                        </div>

                        <Button style={{ marginLeft: "auto" }} variant="outline" id="button-addon2"
                          onClick={() => deleteTask(element.id).then(loadData)}>
                          {'\u{2718}'}
                        </Button>
                      </ListGroup.Item>

                    )
                  })
                  :
                  <h2>
                    Wait...
                  </h2>
              }
            </ListGroup>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Task;
