import { Button } from '@front-end-mentor/ui';
import { HTMLAttributes } from 'react';
import * as React from 'react';
import { styled } from 'styled-components';
import { IStepObj } from '@/container/MultiStepFormContainer';

interface IProps extends HTMLAttributes<HTMLHeadElement> {
  stepObjs: IStepObj[];
  step: number;
}

const Header: React.FC<IProps> = ({ stepObjs, step, ...restProps }) => {
  return (
    <StyledHeader {...restProps}>
      <IndexButtonUl>
        {stepObjs.map((obj, index) => (
          <IndexButtonLi key={obj.description}>
            <IndexButton active={step === index ? 1 : 0} step={step} index={index}>
              {obj.step}
            </IndexButton>
            <Step>{`step ${obj.step}`}</Step>
            <Info>{obj.description}</Info>
          </IndexButtonLi>
        ))}
      </IndexButtonUl>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
`;

const IndexButton = styled(Button)<{ active: number }>`
  border: 0;
  cursor: pointer;
  background: ${props => (props.active === 1 ? 'var(--theme-pastel-blue)' : 'transparent')};
  outline: 1px solid var(--theme-white);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: ${props => (props.active === 1 ? 'var(--theme-marine-blue)' : 'var(--theme-white)')};
  cursor: pointer;
  font: normal 700 14px / 1px Ubuntu;
  text-transform: uppercase;
  @media (min-width: 992px) {
  }
`;

const Step = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    left: 49px;
    top: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-transform: uppercase;
    color: var(--theme-pastel-blue);
  }
`;
const Info = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: block;
    position: absolute;
    left: 49px;
    top: 20px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--theme-white);
  }
`;

const IndexButtonLi = styled.li`
  list-style: none;
  @media (min-width: 992px) {
    width: 153px;
    height: 33px;
    background: ;
    position: relative;
  }
`;

const IndexButtonUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 180px;
  height: 99px;
  @media (min-width: 992px) {
    flex-flow: column nowrap;
    width: 153px;
    height: 228px;
    margin: 40px 32px;
  }
`;

export { Header };
