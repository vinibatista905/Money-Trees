import React from "react";
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduza Despesas</ServicesH2>
          <ServicesP>
            Ajudamos a reduzir suas taxas e aumentar sua receita.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Escritórios Virtuais</ServicesH2>
          <ServicesP>
            Você pode acessar nossa plataforma online de qualquer lugar do
            mundo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Benefícios Premium</ServicesH2>
          <ServicesP>
            Desbloqueie nosso cartão de membro especial que retorna 5% em
            dinheiro de volta.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
