import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { useState , useEffect} from "react";
import { BrowserRouter as Router, useNavigate} from "react-router-dom";
const NavBar =()=>{
    const [activeLink, setActiveLink] =useState('home');
    const [scrolled,setScrolled]=useState(false);
    const navigate=useNavigate();
    useEffect(() => {
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink=(value) =>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="md" className={scrolled?"scrolled":""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>    
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" 
                className={activeLink ==='home'
                ?'active navbar-link':'navbar-link '}
                onClick={()=>onUpdateActiveLink('home')}>Home
                </Nav.Link>

                <Nav.Link href="#skills" 
                className={activeLink ==='skills'?'active navbar-link':'navbar-link '} 
                onClick={()=>onUpdateActiveLink('skills')}>Feedback
                </Nav.Link>

                <Nav.Link href="#projects" 
                className={activeLink ==='projects'?'active navbar-link':'navbar-link'} 
                onClick={()=>onUpdateActiveLink('projects')}>About Us
                </Nav.Link> 
                </Nav>
            <span className="navbar-text">
                <button className="vvd" onClick={()=>navigate("/lobby")}><span>Lets Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default NavBar;