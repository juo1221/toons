import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { BiRun } from '@react-icons/all-files/bi/BiRun';
import { TData } from '../api/WebToonData';
import { TCard } from './BaseCardView';

type CardHoverView = Omit<TCard, 'platForm'>;
const CardHoverView: React.FC<CardHoverView> = ({ info, onToggleList, onToggleMyList, cardStore, setIsHover }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const setOnLeave = () => {
    setIsHover(false);
  };

  const setOnClick = () => {
    onToggleList();
    onToggleMyList(cardStore);
  };

  useEffect(() => {
    setTimeout(() => {
      if (targetRef && targetRef.current) {
        targetRef.current.style.cssText = 'transform: scale(1.1);  opacity:1;';
      }
    }, 0);
  }, []);

  return (
    <Container ref={targetRef} onMouseLeave={setOnLeave}>
      <CardImg>
        <img src={info.img} alt="이미지" />
      </CardImg>
      <Content>
        <Infos>
          <Info>
            <Title>제목 : {info.title}</Title>
            <Author>작가 : {info.author}</Author>
          </Info>
          <Sub isLiked={info.isLiked}>
            <FaHeart onClick={setOnClick} />
          </Sub>
        </Infos>
        <Buttons>
          <StateBtns>
            <StateBtnUp additional={info.additional}>Up</StateBtnUp>
            <StateBtnAdult additional={info.additional}>19</StateBtnAdult>
            <StateBtnNew additional={info.additional}>New</StateBtnNew>
            <StateBtnRest additional={info.additional}>Rest</StateBtnRest>
          </StateBtns>
          <ViewBtn href={info.url}>
            <BiRun />
          </ViewBtn>
        </Buttons>
      </Content>
    </Container>
  );
};

type TSub = {
  isLiked: boolean;
};
type TState = Pick<TData, 'additional'>;

const Container = styled.div`
  position: absolute;
  width: 25rem;
  height: 35rem;
  left: -4.5rem;
  top: 1.8rem;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  transform: scale(0.9);
  opacity: 0.5;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.hideScroll()};
  ${({ theme }) => theme.CusFlex('none', 'none', 'column')};
  @media screen and (max-width: 1360px) {
    width: 25rem;
  }
`;
const CardImg = styled.div`
  width: 25rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 10.179rem;
  padding: 1.5rem 1.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  ${({ theme }) => theme.CusFlex('space-between', 'none', 'column')};
  color: ${({ theme }) => theme.CusColor.white};
`;
const Infos = styled.div`
  ${({ theme }) => theme.CusFlex('space-between', 'flex-start')};
  svg {
    font-size: 1.5rem;
  }
`;
const Info = styled.div`
  font-size: 1.4rem;
  height: 3.2rem;
  gap: 0.5rem;
  ${({ theme }) => theme.CusFlex('space-between', 'flex-start', 'column')};
`;
const Title = styled.p`
  width: 20rem;
  ${({ theme }) => theme.hideText()};
`;
const Author = styled.p`
  width: 20rem;
  ${({ theme }) => theme.hideText()}
`;
const Sub = styled.div<TSub>`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.CusColor.black};
  text-align: right;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${({ isLiked, theme }) => (isLiked ? theme.CusColor.red : theme.CusColor.white)};
  }
`;
const Buttons = styled.div`
  width: 100%;
  ${({ theme }) => theme.CusFlex('space-between')};
  background-color: ${({ theme }) => theme.CusColor.black};
`;
const StateBtns = styled.div`
  width: 14.272rem;
  height: 1.674rem;
  ${({ theme }) => theme.CusFlex('space-between')};
`;
const StateBtn = styled.button`
  width: 3.4rem;
  height: 1.8rem;
  font-size: 1.1rem;
  padding-top: 0.3rem;
  border-radius: 5px;
  cursor: auto;
  ${({ theme }) => theme.CusFlex()};
`;
const StateBtnUp = styled(StateBtn)<TState>`
  ${({ theme, additional }) =>
    additional.up &&
    css`
      color: ${theme.CusColor.white};
      background-color: ${theme.CusColor.red};
    `}
`;
const StateBtnAdult = styled(StateBtn)<TState>`
  ${({ theme, additional }) => {
    return (
      additional.adult &&
      css`
        color: ${theme.CusColor.white};
        background-color: ${theme.CusColor.red};
      `
    );
  }}
`;
const StateBtnNew = styled(StateBtn)<TState>`
  ${({ theme, additional }) =>
    additional.new &&
    css`
      color: ${theme.CusColor.white};
      background-color: ${theme.CusColor.red};
    `}
`;
const StateBtnRest = styled(StateBtn)<TState>`
  ${({ theme, additional }) =>
    additional.rest &&
    css`
      color: ${theme.CusColor.white};
      background-color: ${theme.CusColor.red};
    `}
`;

const ViewBtn = styled.a`
  width: 7rem;
  height: 3rem;
  border: 3px solid #febf0c;
  border-radius: 6rem;
  font-size: 2rem;
  ${({ theme }) => theme.CusFlex()};
  background-color: ${({ theme }) => theme.CusColor.white};
  color: ${({ theme }) => theme.CusColor.gray};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.CusColor.black};
  }
`;

export default CardHoverView;
