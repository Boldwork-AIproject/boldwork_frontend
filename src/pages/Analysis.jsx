import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ChatMessagePurple from "../components/ChatMessagePurple";
import ChatMessageWhite from "../components/ChatMessageWhite";
import Player from "../components/Player";
import { PrevNextContainer, ButtonLargePrimary, ButtonLargeOutline } from "../styledComponents";

const getMessageType = (type) => {
  return type === "consultant" ? "purple" : "white";
};

const ChatMessage = ({ content, name, dateTime, avatar, type }) => {
  const messageType = getMessageType(type);

  return messageType === "purple" ? (
      <ChatMessagePurple content={content} name={name} dateTime={dateTime} avatar={avatar} />
  ) : (
      <ChatMessageWhite content={content} name={name} dateTime={dateTime} avatar={avatar} />
  );
};


export default function Analysis() {
  const navigate = useNavigate();

  const [ selectedNavItem, setSelectedNavItem ] = useState('link-1');
  const [ selectedNavItem2, setSelectedNavItem2 ] = useState('keyword');

  const handleNavItemClick = (eventKey) => {
    setSelectedNavItem(eventKey);
  }

  const handleNavItemClick2 = (eventKey) => {
    setSelectedNavItem2(eventKey);
  }


  const { id } = useParams();
  const data = [
    {
      "content": "네, 고객님. 볼드워크 상담사 캐서린입니다. 문의 도와드리겠습니다.",
      "name": "캐서린",
      "dateTime": "2023. 10. 12  오후 12:34",
      "avatar": "avatar1.png",
      "type": "consultant"
    },
    {
      "content": "배송 문의해서 긴급히 연락드리려고 전화 걸었습니다.",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:35",
      "avatar": "avatar2.png",
      "type": "customer"
    },
    {
      "content": "제가 저번주에 주문한 상품의 주소를 잘못 입력해서 주소 변경이 필요합니다.혹시 빠른 변경 괜찮을까요?",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:35",
      "avatar": "avatar2.png",
      "type": "customer"
    },
    {
      "content": "이번 주소말고 전 주소로 잘못 입력했습니다! 혹시 이미 배송되었을까요? 그렇다면 반품 신청을 진행해도 괜찮을지도 궁금합니다.",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:36",
      "avatar": "avatar2.png",
      "type": "customer"
    },
    {
      "content": "많이 놀라셨죠? 금방 상담사가 해결하도록 최선을 다하겠습니다.주소와 주문번호를 다시 한번 알려주실 수 있으신가요?",
      "name": "캐서린",
      "dateTime": "2023. 10. 12  오후 12:36",
      "avatar": "avatar1.png",
      "type": "consultant"
    },
    {
      "content": "배송 문의해서 긴급히 연락드리려고 전화 걸었습니다.",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:37",
      "avatar": "avatar2.png",
      "type": "customer"
    },
    {
      "content": "제가 저번주에 주문한 상품의 주소를 잘못 입력해서 주소 변경이 필요합니다.혹시 빠른 변경 괜찮을까요?",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:37",
      "avatar": "avatar2.png",
      "type": "customer"
    },
    {
      "content": "이번 주소말고 전 주소로 잘못 입력했습니다! 혹시 이미 배송되었을까요? 그렇다면 반품 신청을 진행해도 괜찮을지도 궁금합니다.",
      "name": "권준수",
      "dateTime": "2023. 10. 12  오후 12:37",
      "avatar": "avatar2.png",
      "type": "customer"
    },
  ];
  
  return (
    <>
    <Container>
      <div>{"CheckCallDetail, id: " + id}</div>
      <Title>AI Calling</Title>
      <Desc>상담 분석</Desc>
      <Nav variant="underline" activeKey={selectedNavItem} onSelect={handleNavItemClick} style={{marginTop: "24px"}}>
          <Nav.Item>
              <Nav.Link eventKey="link-1">상담 내용</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-2">상담 분석</Nav.Link>
          </Nav.Item>
      </Nav>
      { selectedNavItem === 'link-1' && (
      <div style={{marginBottom: 60}}>
            {data.map((message, index) => (
                <ChatMessage
                    key={index}
                    content={message.content}
                    name={message.name}
                    dateTime={message.dateTime}
                    avatar={message.avatar}
                    type={message.type}
                />
            ))}
      </div>)}
      { selectedNavItem === 'link-1' && <Player />}
      { selectedNavItem === 'link-2' && (
        
          <div class="customer-consultation-info" style={{display: "flex", flexDirection: "column", maxWidth: 1040, marginBottom: 61}}>
            <div class="customer-info" style={{marginTop: 40, marginBottom: 61}}>
              <div style={{fontSize: "var(--body-4)", color: "#666666"}}>2023. 09. 02 16:01</div>
              <h2 style={{marginTop: 8, fontWeight: "bold"}}>
                <span style={{color: "var(--primary-100)"}}>권준수</span>
                <span style={{marginLeft: 8}}>고객님과의 콜상담</span>
              </h2>
              <div>
                <span style={{marginTop: 24, fontWeight: "bold"}}>AI 요약</span>
                <span style={{marginLeft: 14}}>요약내용은 더 정확하게 편집이 가능합니다.</span>
              </div>
            </div>
            <div style={{marginBottom: "-40px"}}><Player /></div>
            <h3 style={{fontWeight: "bold", marginBottom: 15}}>한줄 요약</h3>
            <div style={Summary}>주문한지 10일이 지났으나 배송지연으로 취소됨. 알림톡으로 인증번호 발송 실패 후 SMS 대체발송. 클레임 정도 상 --&gt; 하로 하향시킴. 현재 해결 완료. 조심해야 할 필요성이 보임.</div>
          </div>
      )}
      
      { selectedNavItem === 'link-2' && (
          <Nav variant="underline" activeKey={selectedNavItem2} onSelect={handleNavItemClick2} style={{marginTop: "24px"}}>
              <Nav.Item>
                  <Nav.Link eventKey="keyword">키워드</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="index">상담 지수</Nav.Link>
              </Nav.Item>
          </Nav>
      )}
          { selectedNavItem === 'link-2' && selectedNavItem2 === 'keyword' && (
            <div style={BlockContainer}>
              <div style={Block}><div>Keyword</div></div>
              <div style={Block}><div>Keyword Ranking</div></div>
            </div>
          )}
          { selectedNavItem === 'link-2' && selectedNavItem2 === 'index' && (
            <div style={BlockContainer2}>
              <div>
                <div style={BlockLabel}>감정 지표</div>
                <div style={Block2}>Index</div>
              </div>
              <div>
                <div style={BlockLabel}>상담 만족도 그래프</div>
                <div style={Block2}>Plot Graph</div>
              </div>
            </div>
          )}
          <PrevNextContainer style={{marginBottom: "110px"}}>
            <ButtonLargeOutline style={{fontSize: "var(--body-4)", borderRadius: "4px", marginRight:"5px"}}>이전으로</ButtonLargeOutline>
            <ButtonLargePrimary style={{fontSize: "var(--body-4)", borderRadius: "4px"}} onClick={() => {navigate('/check')}}>다른 상담 확인하기</ButtonLargePrimary>
          </PrevNextContainer>
    </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--background-5, #fafaff);
`;
const Title = styled.p`
  margin: 0;
  margin-top: 80px;
  color: var(--neutral-100, #030303);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Title */
  font-family: TypoPRO Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.72px;
`;
const Desc = styled.p`
  margin: 0;
  margin-top: 16px;
  color: var(--neutral-80, #333);
  text-align: center;

  /* Body/Body4/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const BlockLabel = {
  fontWeight: "bold",
  fontSize: "var(--body-3)",
  marginBottom: 11
}
const BlockContainer = {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-evenly", 
  alignItems: "center", 
  backgroundColor: "white", 
  border: "1px solid var(--neutral-20)", 
  width: 1039, 
  height: 667, 
  borderBottomLeftRadius: 8, 
  borderBottomRightRadius: 8, 
  marginBottom: 108,
}
const BlockContainer2 = {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-evenly", 
  alignItems: "flex-end", 
  backgroundColor: "white", 
  border: "1px solid var(--neutral-20)", 
  width: 1039, 
  height: 667, 
  borderBottomLeftRadius: 8, 
  borderBottomRightRadius: 8, 
  marginBottom: 108,
}
const Block = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white", 
  border: "1px solid var(--neutral-20)", 
  width: 475, 
  height: 582, 
  borderRadius: 8
}
const Block2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white", 
  border: "1px solid var(--neutral-20)", 
  width: 475, 
  height: 516, 
  borderRadius: 8,
  marginBottom: 39,
}
const Summary = {
  backgroundColor: "var(--neutral-80)", 
  color: "white", 
  paddingLeft: 80, 
  paddingRight: 80, 
  paddingTop: 40, 
  paddingBottom: 40, 
  borderRadius: 8 
}