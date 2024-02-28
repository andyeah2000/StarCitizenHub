import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import './WikiSection.css';

function WikiSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    const categories = [
      { title: 'Schiffe', imageUrl: 'Source (3).jpg', description: 'Entdecken Sie die Vielfalt der Schiffe in Star Citizen.' },
      { title: 'Planeten', imageUrl: 'Source (4).jpg', description: 'Erforschen Sie die faszinierenden Planeten.' },
      { title: 'Monde', imageUrl: 'Source (5).jpg', description: 'Entdecken Sie die Vielfalt der Monde in Star Citizen.' },
      { title: 'Waffen', imageUrl: 'Source (6).jpg', description: 'Entdecken Sie die Vielfalt der Waffen in Star Citizen.' },
    ];

    const featuredArticlesLeft = [
        { title: 'Geschichte der Schiffe', imageUrl: 'Source (7).jpg', description: 'Die Entstehung und Evolution der Raumschiffe in Star Citizen.' },
        { title: 'Raumschiff-Designs', imageUrl: 'Source (8).jpg', description: 'Einblick in die Designphilosophie hinter den ikonischen Schiffen.' },
        // Weitere Featured Articles können hier hinzugefügt werden
    ];

    const featuredArticlesRight = [
        { title: 'Waffentechnologie', imageUrl: 'Source (9).jpg', description: 'Entdecken Sie die fortschrittlichen Waffen und ihre Mechaniken.' },
        { title: 'Handelsrouten', imageUrl: 'Source.jpg', description: 'Die lukrativsten Handelsrouten im Star Citizen Universum.' },
        // Weitere Featured Articles können hier hinzugefügt werden
    ];

  useEffect(() => {
      // Dynamisch filtern basierend auf dem Suchbegriff
      const results = searchTerm
          ? categories.filter(category =>
              category.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : categories;
      setFilteredCategories(results);
  }, [searchTerm]); // Nur searchTerm ist eine tatsächliche Abhängigkeit


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const executeSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="wiki-container">
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="wiki-heading">Entdecken Sie unser Star Citizen Wiki</h2>
                        <p className="wiki-intro">Tauchen Sie ein in die Welt von Star Citizen.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        {featuredArticlesLeft.map((article, index) => (
                            <Card key={index} className="mb-4">
                                <Card.Img variant="top" src={article.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.description}</Card.Text>
                                    <Button variant="primary">Lesen</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                    <Col lg={6}>
                        <InputGroup className="mb-3 wiki-search">
                            <FormControl 
                                placeholder="Suche im Wiki..." 
                                aria-label="Suche im Wiki" 
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <Button variant="outline-secondary" onClick={executeSearch}>Suche</Button>
                        </InputGroup>
                        <Row>
                            {filteredCategories.map((category, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={category.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{category.title}</Card.Title>
                                            <Card.Text>{category.description}</Card.Text>
                                            <Button variant="primary">Erkunden</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={3}>
                        {featuredArticlesRight.map((article, index) => (
                            <Card key={index} className="mb-4">
                                <Card.Img variant="top" src={article.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.description}</Card.Text>
                                    <Button variant="primary">Lesen</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WikiSection;




