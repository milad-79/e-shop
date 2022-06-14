import styled from "styled-components";
import {
  Facebook,
  WhatsApp,
  Instagram,
  LocationOn,
  Phone,
  Mail,
} from "@mui/icons-material";
import React from "react";


const Container = styled.footer`
  padding: 30px !important;
  display: flex !important;
  justify-content: space-between;
  flex-wrap: wrap !important;
  gap: 50px;
`;

const Part = styled.div`
  flex: 1;
  display: flex !important;
  flex-direction: column !important;
  color: var(--color);
`;

// part1

const FooterLogo = styled.h3`
  font-size: 30px;
  font-weight: 600;
`;

const InfoSite = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px !important;
`;

const IconsBody = styled.div`
  display: flex !important;
  gap: 10px;
  margin-top: 20px !important;
`;

const Icon = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex !important;
  justify-content: center !important;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.bg};
  color: #fff;
  font-size: 25px;
`;

// part2

const LinkTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const LinksWrapper = styled.div`
  display: flex !important;
  justify-content: space-between;
`;

const LinksBody = styled.div`
  display: flex !important;
  flex-direction: column !important;
  gap: 15px;
  margin-top: 15px !important;
`;

const Link = styled.span`
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// part3

const SiteTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px !important;
`;

const SiteInfBody = styled.div`
  padding: 5px 0px !important;
  display: flex !important;
  align-items: center;
  gap: 5px;
`;

const SiteIcon = styled.span`
  font-size: 15px;
`;

const SiteInf = styled.span`
  font-size: 15px;
  font-weight: 500px;
`;

const SiteBankCart = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      {/* -------part1-------- */}
      <Part>
        <FooterLogo>Milad</FooterLogo>
        <InfoSite>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nesciunt est mollitia minus, doloribus numquam sunt provident dolores.
          Nihil temporibus cum neque accusantium officia minima aperiam ab
          laudantium nesciunt qui!
        </InfoSite>
        <IconsBody>
          <Icon bg={"red"}>
            <Instagram />
          </Icon>

          <Icon bg={"darkblue"}>
            <Facebook />
          </Icon>

          <Icon bg={"green"}>
            <WhatsApp />
          </Icon>
        </IconsBody>
      </Part>
      {/* -------part2-------- */}
      <Part>
        <LinkTitle>Usefull Links</LinkTitle>
        <LinksWrapper>
          <LinksBody>
            <Link>Home</Link>
            <Link>Man Fashion</Link>
            <Link>Accessories</Link>
            <Link>Order Tracking</Link>
            <Link>Wishlist</Link>
          </LinksBody>
          <LinksBody>
            <Link>Cart</Link>
            <Link>Woman Fashion</Link>
            <Link>My Account</Link>
            <Link>Wishlist</Link>
            <Link>Terms</Link>
          </LinksBody>
        </LinksWrapper>
      </Part>
      {/* -------part3-------- */}
      <Part>
        <SiteTitle>Content</SiteTitle>
        <SiteInfBody>
          <SiteIcon>
            <LocationOn />
          </SiteIcon>
          <SiteInf>662 Dixie Path, South Tobinchester 98336</SiteInf>
        </SiteInfBody>

        <SiteInfBody>
          <SiteIcon>
            <Phone />
          </SiteIcon>
          <SiteInf>+1 234 56 78</SiteInf>
        </SiteInfBody>

        <SiteInfBody>
          <SiteIcon>
            <Mail />
          </SiteIcon>
          <SiteInf>exampel@gmail.com</SiteInf>
        </SiteInfBody>

        <SiteBankCart
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="bank-cart"
        />
      </Part>
      {/* --------------- */}
    </Container>
  );
}

export default React.memo(Footer);
