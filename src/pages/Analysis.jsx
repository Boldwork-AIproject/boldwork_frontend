import axios from "../axios.js";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styledComponents";
import { Nav } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ChatMessagePurple from "../components/ChatMessagePurple";
import ChatMessageWhite from "../components/ChatMessageWhite";
import Player from "../components/Player";
import { PrevNextContainer, ButtonLargePrimary, ButtonLargeOutline } from "../styledComponents";
import ScoreBoxes from '../components/scoreBoxes';
import Table from '../components/table';
import { LineChart } from '@mui/x-charts';
import TextSphere from "../components/TextSphere";

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

  // change type to role
  // create dateTime (date + timestamp)
  // 

  const { id } = useParams();
  const [inferredData, setInferredData] = useState({
    "audio_file": "",
    "messages": [
      {
        "role": "",
        "text": "",
        "timestamp": "",
      },
    ],
    "badwords": 0,
    "keywords": [],
    "whole_keywords": [],
    "sentiment": [],
    "favorable_tone_score": 0,
    "speech_participation_score": 0,
    "summary": "",
    "consultant_name": "",
    "customer_name": "",
    "previous_sentiment": []
  });
  
  const [conversationData, setConversationData] = useState([
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
  ]);

  const [date, setDate] = useState('2023. 10. 12 ');

  const formatTimeStamp = (timestamp) => {
    const timeStamp = date + timestamp;
    return timeStamp;
  }

  const dataset = [
    {
      date: "2022.08.15",
      score: 82
    },
    {
      date: "2022.09.21",
      score: 70
    },
    {
      date: "2022.10.05",
      score: 90
    },
    {
      date: "2022.11.25",
      score: 59
    },
    {
      date: "2023.01.18",
      score: 87
    },
  ]

  const column = [
    { id: "date", header: "상담일시", accessorFn: row => row.date },
    { id: "name", header: "상담사", accessorFn: row => row.name },
    {
      id: "emotion",
      header: "감정지표",
      accessorFn: row => row.emotion,
    }
  ]

  const emotion_data = [
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
      emotion: "보통"
    },
    {
      id: 2,
      date: "2022.10.05",
      name: "김철수",
      emotion: "양호"
    },
    {
      id: 3,
      date: "2022.11.25",
      name: "오미향",
      emotion: "주의"
    }
  ];

  const keyword_column = [
    {
      id: "rank",
      header: "순위",
      accessorFn: row => row.rank,
    },
    {
      id: "word",
      header: "단어",
      accessorFn: row => row.word,
    },
    {
      id: "freq",
      header: "빈도(회)",
      accessorFn: row => row.freq,
    },
    {
      id: "fluc",
      header: "증가율(%)",
      accessorFn: row => row.fluc,
    }
  ]
  const [keywordData, setKeywordData] = useState([
    {
      id: 0,
      rank: 1,
      word: "보험료",
      freq: 15,
      fluc: 50,
    },
    {
      id: 1,
      rank: 2,
      word: "건강",
      freq: 12,
      fluc: 75,
    },
    {
      id: 2,
      rank: 3,
      word: "자동차",
      freq: 8,
      fluc: 50,
    },
    {
      id: 3,
      rank: 4,
      word: "교통사고",
      freq: 6,
      fluc: 80,
    },
    {
      id: 4,
      rank: 5,
      word: "주소지 이전",
      freq: 4,
      fluc: 60,
    },
    {
      id: 5,
      rank: 6,
      word: "계약금",
      freq: 2,
      fluc: 50,
    },
    {
      id: 6,
      rank: 7,
      word: "계약해지",
      freq: 1,
      fluc: 100,
    }
  ]);

  const keywords = inferredData.keywords;

  const getKeywordsData = () => {
    const mappedKeywordData = keywords.map((keywordArray, index) => {
      const word = keywordArray[0];
      const freq = keywordArray[1];
      const fluc = keywordArray[2];
    
      return {
        id: index,
        rank: index + 1,
        word: word,
        freq: freq,
        fluc: fluc,
      };
    });
    setKeywordData(mappedKeywordData);
  }

  useEffect(() => {
    getKeywordsData();
  }, [keywordData])

  const getConversationData = async() => {
    try {
      const response = await axios.get(`/check/${id}`, {
        headers: {
          'Accept': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
      });
      console.log('Conversation data retrieved successfully', response.data);
      const { data } = response.data;
      // set variables
      setInferredData({
        "audio_file": data.audio_file,
        "messages": data.messages,
        "badwords": data.badwords,
        "keywords": data.keywords,
        "whole_keywords": data.whole_keywords,
        "sentiment": data.sentiment,
        "favorable_tone_score": data.favorable_tone_score,
        "speech_participation_score": data.speech_participation_score,
        "summary": data.summary,
        "consultant_name": data.consultant_name,
        "customer_name": data.customer_name,
        "previous_sentiment": data.previous_sentiment
      });
  
    } catch (error) {
      console.error('Error retrieving conversation data: ', error);
    } 
  }
  
  useEffect(() => {
    getConversationData();
  }, [id]);

  useEffect(() => {
    console.log("Inferred data:", inferredData);
    const { messages, customer_name, consultant_name } = inferredData;

    const transformedData = messages.map(({ role, text, timestamp }) => ({
      content: text,
      name: role === "SPEAKER 1" ? consultant_name : customer_name,
      dateTime: timestamp,
      avatar: "avatar1.png", // Assuming avatar is constant or has a default value
      type: role === "SPEAKER 1" ? "consultant" : "customer",
    }));
    
    setConversationData(transformedData);
  }, [inferredData]);

  useEffect(() => {
    console.log("Conversation Data: ", conversationData);
  }, [conversationData]);
  
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

      { selectedNavItem === 'link-1' && (
      <div style={{marginBottom: 60}}>
            {conversationData.map((message, index) => (
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

      { selectedNavItem === 'link-1' && <Player audio_file={inferredData.audio_file} />}
      { selectedNavItem === 'link-2' && (
        
          <div class="customer-consultation-info" style={{display: "flex", flexDirection: "column", maxWidth: 1040, marginBottom: 61}}>
            <div class="customer-info" style={{marginTop: 40, marginBottom: 61}}>
              <div style={{fontSize: "var(--body-4)", color: "#666666"}}>2023. 09. 02 16:01</div>
              <h2 style={{marginTop: 8, fontWeight: "bold"}}>
                <span style={{color: "var(--primary-100)"}}>{inferredData.customer_name}</span>
                <span style={{marginLeft: 8}}>고객님과의 콜상담</span>
              </h2>
              <div>
                <span style={{ marginTop: 24, fontWeight: "bold" }}>AI 요약</span>
                <span style={{ marginLeft: 14 }}>요약내용은 더 정확하게 편집이 가능합니다.</span>
              </div>
            </div>
            <div style={{marginBottom: "-40px"}}><Player audio_file={inferredData.audio_file}/></div>
            <h3 style={{fontWeight: "bold", marginBottom: 15}}>한줄 요약</h3>
            <div style={Summary}>{inferredData.summary}</div>
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
            <div style={Block}>
              <TextSphere whole_keywords={inferredData.whole_keywords}/>
            </div>
            <div style={Block}>
              <Table data={keywordData} columns={keyword_column} />
            </div>
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
                    <div style={{ height: "105px" }}>
                      <span style={{ fontSize: "81px", fontWeight: "bold", height: "69px", letterSpacing: "-1.5px" }}>87</span>
                      <span style={{ fontSize: "31px", paddingLeft: "1px" }}>점</span>
                    </div>
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
  flexDirection: "column",
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
  justifyContent: "center",
  alignItems: "center",
  width: 455,
  height: 190,
}
const Block4 = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  width: 130,
  height: 160,
}
const Block5 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  width: 260,
  height: 150,
  paddingLeft: 25,
}
const Block6 = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",

  width: 409,
  height: 280,
  borderRadius: 8,
  marginBottom: 32,
  padding: 10,
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