"use client"
import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import styled from 'styled-components';

// Styled Components for Animations
const FadeIn = styled.div`
  animation: fadeIn 2s ease-in;
`;

const SlideInLeft = styled.div`
  animation: slideInLeft 1s ease-in-out;
`;

const SlideInRight = styled.div`
  animation: slideInRight 1s ease-in-out;
`;

const keyframes = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const GlobalStyle = styled.div`
  ${keyframes}
`;

// Styled Components for Colors and Layout
const Header = styled(Typography)`
  color: #007BFF;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubHeader = styled(Typography)`
  color: #007BFF;
  margin-top: 1.5rem;
`;

const Paragraph = styled(Typography)`
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const Section = styled(Box)`
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: #007BFF;
  font-weight: bold;
`;

const InternationalDonations: React.FC = () => {
  return (
    <GlobalStyle>
      <Container>
        <FadeIn>
            <br />
            <br />
          <Header variant="h2" gutterBottom>
            🌟 Donations Internationales 🌍
          </Header>
        </FadeIn>

        <SlideInLeft>
          <SubHeader variant="h5" gutterBottom>
           
          </SubHeader>
          <Section>
            <br />
            <br />
            <Paragraph variant="body1" paragraph>
              Bienvenue sur Aid, votre plateforme de donation dédiée à faire une différence dans le monde. Nous comprenons que chaque don compte, surtout en ces temps de conflits et de besoins accrus. Merci de soutenir les causes qui vous tiennent à cœur. <Highlight>🙏❤️</Highlight>
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Nos équipes travaillent sans relâche pour identifier les causes les plus urgentes et les plus impactantes. Nous croyons fermement que, grâce à votre générosité, nous pouvons apporter un changement réel et durable.
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Nous collaborons avec des organisations locales et internationales pour garantir que vos dons atteignent ceux qui en ont le plus besoin. Ensemble, nous pouvons surmonter les défis mondiaux et bâtir un avenir meilleur.
            </Paragraph>
          </Section>
        </SlideInLeft>

        <SlideInRight>
          <SubHeader variant="h5" gutterBottom>
            Restrictions Spécifiques à la Tunisie
          </SubHeader>
          <Section>
            <Paragraph variant="body1" paragraph>
              En raison des réglementations financières et des restrictions de transfert de fonds en Tunisie, il y a des limitations significatives concernant les donations internationales. 📉
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              1. <strong>Transferts Internationaux</strong>: Les donations provenant de l'étranger peuvent être soumises à des frais supplémentaires et des délais de traitement plus longs. 💸
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              2. <strong>Restrictions Réglementaires</strong>: La Tunisie impose des restrictions strictes sur les transferts de fonds, ce qui limite la capacité de recevoir des donations internationales. Les ONG doivent obtenir une autorisation préalable du gouvernement pour chaque financement étranger reçu, sous peine de suspension ou de dissolution immédiate. ⚠️
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Ces restrictions incluent des exigences de reporting et d'audit rigoureuses pour garantir la transparence des financements étrangers, ainsi que des pouvoirs discrétionnaires accordés aux autorités pour approuver ou refuser les financements. 📊
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              En raison de ces restrictions, nous regrettons de ne pas pouvoir accepter toutes les donations internationales. Nous travaillons constamment avec les autorités locales pour assurer la conformité et la transparence de chaque transaction. Votre confiance est notre priorité. 🔒
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Malgré ces défis, nous nous efforçons de rendre le processus de donation aussi simple et transparent que possible. Votre soutien est crucial pour nous aider à surmonter ces obstacles. 💪
            </Paragraph>
          </Section>
        </SlideInRight>

        <SlideInLeft>
          <SubHeader variant="h5" gutterBottom>
            Comment Vous Pouvez Aider
          </SubHeader>
          <Section>
            <Paragraph variant="body1" paragraph>
              Bien que les restrictions rendent les donations internationales difficiles, il existe encore plusieurs façons dont vous pouvez nous aider :
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              - <strong>Partagez notre cause</strong> : Faites connaître notre mission et nos défis sur les réseaux sociaux. 📢
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              - <strong>Participer à des campagnes locales</strong> : Soutenez nos initiatives locales qui ne sont pas soumises aux mêmes restrictions. 🌍
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              - <strong>Soutenez-nous par des moyens indirects</strong> : Envisagez d'autres formes de soutien comme le bénévolat ou l'assistance technique. 👐
            </Paragraph>
          </Section>
        </SlideInLeft>

        <FadeIn>
          <SubHeader variant="h5" gutterBottom>
            Contactez-Nous
          </SubHeader>
          <Section>
            <Paragraph variant="body1" paragraph>
              Pour toute question ou clarification, n'hésitez pas à nous contacter à <Link href="mailto:support@aid.com">support@aid.com</Link>. Nous sommes là pour vous aider et garantir que votre expérience avec Aid soit positive et enrichissante. <Highlight>🤝✨</Highlight>
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Nous vous remercions encore une fois pour votre générosité et votre soutien continu. Ensemble, nous pouvons construire un avenir meilleur pour tous. Chaque don compte, et avec vous, nous pouvons faire la différence.
            </Paragraph>
            <Paragraph variant="body1" paragraph>
              Votre engagement et votre bienveillance sont essentiels pour mener à bien notre mission. Merci de croire en nous et en nos efforts pour créer un monde plus juste et équitable. 🌍❤️
            </Paragraph>
          </Section>
        </FadeIn>
      </Container>
    </GlobalStyle>
  );
};

export default InternationalDonations;
