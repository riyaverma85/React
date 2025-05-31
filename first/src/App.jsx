// // import Cybrom from"./bhopal";
// import Header from './header';
// import Midel from './midel';
// import Footer from './footer'
// const App=()=>{
//   return(
//     <>
//     <h1 >hello i am riya</h1>
//     {/* <Cybrom/> */}
// //     <Header/>
// //     <Midel/>
// //     <Footer/>
// //     </>
// //   )
// // }
// // export default App;



// // import Student from "./tudent";
// // const StuInfo={
// // "name":"riya",
// // "subject":"react",
// // }
// // const rr={
// //   color:"red"
// // }
// // const r={
// //   color:"green"
// // }

// // const App=()=>{
      
// //  return(
// //     <>
// //     <h1 style={rr} >welcome</h1>
// //       <h1 style={r} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora sapiente, placeat, numquam quisquam repudiandae consequuntur, sint blanditiis libero fuga saepe. Quos ducimus nobis quasi tenetur minus vero, culpa saepe.</h1>

// //     {/* <Student nm={StuInfo.name} sub={StuInfo.subject} /> */}
// //     </>
// //   )
// // }
// // export default App;


// // import React from 'react';

// // const CybromBox = () => {
// //   return (
// //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f7fafc" }}>
// //       <div style={{ backgroundColor: "cyan", padding: "16px", borderRadius: "12px", border: "4px solid blue" }}>
// //         <div style={{ backgroundColor: "lime", padding: "16px", borderRadius: "12px" }}>
// //           <div style={{ backgroundColor: "orange", padding: "6px 12px", borderRadius: "200px", border: "1px solid red", textAlign: "center" }}>
// //             <h1 style={{ color: "black", fontWeight: "bold", fontSize: "1.125rem" }}>CYBROM</h1>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CybromBox;import Container from 'react-bootstrap/Container';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import img1 from './bootspace'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function App() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <br />
//       <Navbar bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={img1}></img>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     </>
//   );
// }

// export default App;
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpg';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import s1 from './images/s1.jpg';


// const App=()=> {
//   return(
//     <>

// <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Carousel>
//       <Carousel.Item>
//         <img src={img2} heigth= '50% ' width='50%' />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//          <img src={img2} height= '50% ' width='50%'/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={img1} height= '100% '/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//    <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={s1} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </>
//   )
// }
// export default App;
// import EmpDesign from "./EmpDesign"
// import productData from "./productData"
// const App =()=>{
//   const ans=productData.map((key)=> <EmpDesign
//     sn no={key.snno}
//     nam={key.resepice}
//     price={key.price}
//     />)
//     return(
//       <>
//       <h1 style={{color:"red"} }>Suprabhat</h1>
//       <table border="1" width="500px" hight="300vh">
//       <tr>
//       <th> sn no </th>
//       <th> resepice </th>
//       <th> price </th>
//       </tr>{ans}</table>
//       </>
    
//     )
// }
// export default App;