import React, { useRef } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

type TLodingView = {
  text: string | JSX.Element;
};
const LodingView: React.FC<TLodingView> = ({ text }) => {
  return (
    <Card>
      <ImageBox className="loding-image">{text}</ImageBox>
      <Title>...</Title>
      <Sub>
        <FaHeart />
      </Sub>
    </Card>
  );
};

const Card = styled.div`
  width: 16rem;
  height: 18.5rem;
  position: relative;
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')}
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.75);
`;

const ImageBox = styled.div`
  height: 16rem;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  font-size: 5rem;
  background-color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  color: #51f9b8;
  ${({ theme }) => theme.CusFlex()};
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgb(165, 165, 165, 0.2);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;
const Title = styled.span`
  position: absolute;
  width: 100%;
  top: 16rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.CusColor.titleBack};
  transform: translateY(-100%);
  font-size: 1.7rem;
  color: ${({ theme }) => theme.CusColor.white};
  text-align: center;
  padding: 0.75rem 2rem;
  ${({ theme }) => theme.hideText()}
`;
const Sub = styled.div`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  padding: 0.5rem 1rem;
  text-align: right;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.CusColor.white};
  }
`;

export default LodingView;
