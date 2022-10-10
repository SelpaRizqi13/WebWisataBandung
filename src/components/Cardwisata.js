import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardwisata(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='text-justify'>
          {props.deskripsi}
        </Card.Text>
        <Button variant="primary">Read More ...</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardwisata;