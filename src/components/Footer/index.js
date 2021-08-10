import React from "react";
import { animateScroll as scroll} from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>

      <FooterWrap>

        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to="/signin">Como Funciona</FooterLink>
              <FooterLink to="/signin">Depoimentos</FooterLink>
              <FooterLink to="/signin">Carreiras</FooterLink>
              <FooterLink to="/signin">Investidores</FooterLink>
              <FooterLink to="/signin">Termos de Serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Nos Contate</FooterLinkTitle>
              <FooterLink to="/signin">Contato</FooterLink>
              <FooterLink to="/signin">Suporte</FooterLink>
              <FooterLink to="/signin">Carreiras</FooterLink>
              <FooterLink to="/signin">Destinos</FooterLink>
              <FooterLink to="/signin">Patrocínio</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin">Enviar Video</FooterLink>
              <FooterLink to="/signin">Embaixadores</FooterLink>
              <FooterLink to="/signin">Agência</FooterLink>
              <FooterLink to="/signin">Influenciadores</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Money Trees</SocialLogo>
            <WebsiteRights>
              Money Trees © { new Date().getFullYear() }
              Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            
            
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>

    </FooterContainer>
  );
}

export default Footer;
