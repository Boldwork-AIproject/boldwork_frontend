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

  const [selectedNavItem, setSelectedNavItem] = useState('link-1');
  const [selectedNavItem2, setSelectedNavItem2] = useState('keyword');

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

  const dataset = [
    {
      date: "2022.07.30",
      score: 70
    },
    {
      date: "2022.08.10",
      score: 55
    },
    {
      date: "2022.09.20",
      score: 62
    },
    {
      date: "2022.10.15",
      score: 86
    },
    {
      date: "2022.11.21",
      score: 63
    },
    {
      date: "2022.12.16",
      score: 59
    },
    {
      date: "2023.01.18",
      score: 73
    },
  ]

  const column = [
    { id: "date", header: "상담일시", accessorFn: row => row.date },
    { id: "name", header: "상담사", accessorFn: row => row.name },
    {
      id: "emotion",
      header: "감정지표",
      accessorFn: row => row.emotion
    }
  ]

  const [emotion_data, setData] = useState([
    {
      id: 0,
      date: "2022.08.15",
      name: "김철수",
      emotion: "양호"
    },
    {
      id: 1,
      date: "2022.09.21",
      name: "오미향",
      emotion: "주의"
    },
    {
      id: 2,
      date: "2022.08.15",
      name: "김철수",
      emotion: "양호"
    },
    {
      id: 3,
      date: "2022.09.21",
      name: "오미향",
      emotion: "주의"
    }
  ]);

  const [newDataArray, setNewDataArray] = useState([]);

  useEffect(() => {
    // Add new data to the new data array
    setNewDataArray([...newDataArray, emotion_data[emotion_data.length - 1]]);

    // If the new data array has reached four elements, replace the existing data array with this new array
    if (newDataArray.length === 4) {
      setData(newDataArray);
      setNewDataArray([]);
    }
  }, [emotion_data]);


  return (
    <>
      <Container>
        <div>{"CheckCallDetail, id: " + id}</div>
        <Title>AI Calling</Title>
        <Desc>상담 분석</Desc>
        <Nav variant="underline" activeKey={selectedNavItem} onSelect={handleNavItemClick} style={{ marginTop: "24px" }}>
          <Nav.Item>
            <Nav.Link eventKey="link-1">상담 내용</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">상담 분석</Nav.Link>
          </Nav.Item>
        </Nav>
        {selectedNavItem === 'link-1' && (
          <div style={{ marginBottom: 60 }}>
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
        {selectedNavItem === 'link-1' && <Player />}
        {selectedNavItem === 'link-2' && (

          <div class="customer-consultation-info" style={{ display: "flex", flexDirection: "column", maxWidth: 1040, marginBottom: 61 }}>
            <div class="customer-info" style={{ marginTop: 40, marginBottom: 61 }}>
              <div style={{ fontSize: "var(--body-4)", color: "#666666" }}>2023. 09. 02 16:01</div>
              <h2 style={{ marginTop: 8, fontWeight: "bold" }}>
                <span style={{ color: "var(--primary-100)" }}>권준수</span>
                <span style={{ marginLeft: 8 }}>고객님과의 콜상담</span>
              </h2>
              <div>
                <span style={{ marginTop: 24, fontWeight: "bold" }}>AI 요약</span>
                <span style={{ marginLeft: 14 }}>요약내용은 더 정확하게 편집이 가능합니다.</span>
              </div>
            </div>
            <div style={{ marginBottom: "-40px" }}><Player /></div>
            <h3 style={{ fontWeight: "bold", marginBottom: 15 }}>한줄 요약</h3>
            <div style={Summary}>주문한지 10일이 지났으나 배송지연으로 취소됨. 알림톡으로 인증번호 발송 실패 후 SMS 대체발송. 클레임 정도 상 --&gt; 하로 하향시킴. 현재 해결 완료. 조심해야 할 필요성이 보임.</div>
          </div>
        )}

        {selectedNavItem === 'link-2' && (
          <Nav variant="underline" activeKey={selectedNavItem2} onSelect={handleNavItemClick2} style={{ marginTop: "24px" }}>
            <Nav.Item>
              <Nav.Link eventKey="keyword">키워드</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="index">상담 지수</Nav.Link>
            </Nav.Item>
          </Nav>
        )}
        {selectedNavItem === 'link-2' && selectedNavItem2 === 'keyword' && (
          <div style={BlockContainer}>
            <div style={Block}><div>Keyword</div></div>
            <div style={Block}><div>Keyword Ranking</div></div>
          </div>
        )}
        {selectedNavItem === 'link-2' && selectedNavItem2 === 'index' && (
          <div style={BlockContainer2}>
            <div>
              <div style={BlockLabel}>감정 지표</div>
              <div style={Block2}>
                <div style={Block3}>
                  <div style={Block4}>
                    <div style={{ color: "#000", fontSize: "13px", fontWeight: "bold", height: "5px" }}>이번 상담 지수는..</div>
                    <span>
                      <span style={{ fontSize: "81px", fontWeight: "bold", height: "69px" }}>87</span>
                      <span style={{ fontSize: "31px", paddingLeft: "1px" }}>점</span>
                    </span>
                    <Button2>양 호</Button2>
                  </div>
                  <div style={Block5}>
                    <ScoreBoxes />
                  </div>
                </div>
                <div style={Block6}>
                  <Table data={emotion_data} columns={column} />
                </div>
              </div>
            </div>
            <div>
              <div style={BlockLabel}>상담 만족도 그래프</div>
              <div style={Block2}><LineChart
                dataset={dataset}
                xAxis={[{
                  scaleType: 'band',
                  dataKey: "date",
                  valueFormatter: (v) => v.toString(),
                }]}
                series={[
                  { curve: "linear", dataKey: "score", color: "#372FFF" }]}
                yAxis={[{ min: 20, max: 100 }]}
              />
              </div>
            </div>
          </div>
        )}
        <PrevNextContainer style={{ marginBottom: "110px" }}>
          {selectedNavItem === 'link-1' && (
            <ButtonLargeOutline style={{ fontSize: "var(--body-4)", borderRadius: "4px", marginRight: "5px" }} onClick={() => { navigate(-1) }}>이전으로</ButtonLargeOutline>
          )}
          {selectedNavItem === 'link-2' && (
            <ButtonLargeOutline style={{ fontSize: "var(--body-4)", borderRadius: "4px", marginRight: "5px" }} onClick={() => { setSelectedNavItem('link-1') }}>이전으로</ButtonLargeOutline>
          )}
          <ButtonLargePrimary style={{ fontSize: "var(--body-4)", borderRadius: "4px" }} onClick={() => { navigate('/check') }}>다른 상담 확인하기</ButtonLargePrimary>
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
const Block3 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "flex-start",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 455,
  height: 180,
}
const Block4 = {
  display: "inline-block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 130,
  height: 150,
  padding: "0% 5% 5% 5%",
}
const Block5 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 260,
  height: 150,

  borderRadius: 8,
}
const Block6 = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",

  width: 435,
  height: 290,
  borderRadius: 8,
  marginBottom: 39,
  padding: 20,
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

const Button2 = styled.button`
  display: flex;
  width: 121px;
  height: 47px;
  padding: 21.557px 19.597px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.799px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
`;