import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./components/Layout.js";
import { BWALogo } from "./components/BWALogo.js";
import './App.css'; 

export default function App() {
  const { theme } = useTheme();

  return (
    <Layout>
      <Navbar isCompact isBordered variant="sticky" css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent"
      }}>
        <Navbar.Brand>
          <BWALogo />
          <Text b style={{
            color: theme.colors.white.value,
            fontSize: theme.fontSizes.sm.value,
            padding: `${theme.space[2].value} ${theme.space[4].value}`
          }}>
            BULLYZ WITH ATTITUDE
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline" style={{color: theme.colors.white.value}}>
          <Navbar.Link isActive href="#">Accueil</Navbar.Link>
          <Navbar.Link href="#">Nos chiens</Navbar.Link>
          <Navbar.Link href="#">Nos portées</Navbar.Link>
          <Navbar.Link href="#">A propos de</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button as={Link} href="#" color="primary" auto style={{border: '2px solid'}}>
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
