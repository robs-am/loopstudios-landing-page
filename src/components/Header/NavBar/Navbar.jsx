import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Ul>
          <Li>
            <Link href="#"> About</Link>
          </Li>
          <Li>
            <Link href="#">Careers</Link>
          </Li>
          <Li>
            <Link href="#">Events</Link>
          </Li>
          <Li>
            <Link href="#">Products</Link>
          </Li>
          <Li>
            <Link href="#">Support</Link>
          </Li>
        </Ul>
      </nav>
    </div>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  list-style: none;
  padding: 1rem;
`;

const Link = styled.a`
  color: #ffffff;
`;

export default Navbar;
