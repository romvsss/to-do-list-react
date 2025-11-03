//import { NavLink } from "react-router-dom";
import { Nav, List, Item, StyledNavLink } from "./styled";

const Navigation = () => (
    <Nav>
        <List>
            <Item>
                <StyledNavLink to="/tasks">
                    Lista zadań
                </StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/author">
                    O autorze
                </StyledNavLink>
            </Item>
        </List>
    </Nav>
);

export default Navigation;