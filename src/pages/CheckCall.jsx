import axios from "../axios.js";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../styledComponents";
import styled from "styled-components";
import filterImg from "../assets/filter.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import CheckCallBox from "../components/CheckCallBox";
import FilterModalLong from "../components/FilterModalLong";

export default function CheckCall() {
  const navigate = useNavigate();
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [totalPage, setTotalPage] = useState(4);
  const [selectedPage, setSelectedPage] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 0,
      name: "권준수",
      phone: "010-2904-4985",
      time: "2023. 09. 02 16:00",
      categories: ["반품문의", "배송지연"],
    },
    {
      id: 1,
      name: "이태성",
      phone: "010-3422-0099",
      time: "2023. 09. 02 16:02",
      categories: ["반품문의", "배송지연"],
    },
    {
      id: 2,
      name: "김영중",
      phone: "010-9182-1233",
      time: "2023. 09. 02 16:09",
      categories: ["반품문의", "배송지연"],
    },
    {
      id: 3,
      name: "권준수",
      phone: "010-2904-4985",
      time: "2023. 09. 02 16:00",
      categories: ["반품문의", "배송지연"],
    },
    {
      id: 4,
      name: "이태성",
      phone: "010-3422-0099",
      time: "2023. 09. 02 16:02",
      categories: ["반품문의", "배송지연"],
    },
    {
      id: 5,
      name: "김영중",
      phone: "010-9182-1233",
      time: "2023. 09. 02 16:09",
      categories: ["반품문의", "배송지연"],
    },
  ]);

  const handleDelete = (idToDelete) => {
    setData(data.filter((item) => item.id !== idToDelete));   
  };

  const formatDate = (creation_time) => {
    var date = creation_time.split("T")[0];
    var time = creation_time.split("T")[1].substring(0, 5);
    return date + " " + time;
  }

  // get customer data from inference
  // (after data is inferred from conversation)
  // customers must have conversation ids (i.e. 상담내역 있음)
  const getCustomerList = async (page) => {
    try {
      const response = await axios.get(`/check/?page=${page}`, {
        withCredentials: true,
      });

      console.log(response.data);
      const { message, totalPage, data: responseData } = response.data;
      const transformedData = responseData.map(({ customer_id, customer_name, customer_phone, creation_time, keyword }) => ({
        id: customer_id,
        name: customer_name,
        phone: customer_phone,
        time: formatDate(creation_time),
        categories: ["반품문의", "배송지연"],
      }));

      setData(transformedData);
      setTotalPage(totalPage);
      setPages([...Array(totalPage).keys()].map((el) => el + 1));

    } catch (error) {
      console.error('Error fetching customer list:', error);
    }
  };

  useEffect(() => {
    getCustomerList(selectedPage);
  }, [selectedPage]);

  return (
    <Container>
      {showModal ? (
        <FilterModalLong
          close={() => {
            setShowModal(false);
          }}
          saveAndClose={() => {
            setShowModal(false);
          }}
        />
      ) : null}
      <Title>Check Call</Title>
      <Desc>지난 상담 확인</Desc>
      <FilterWrapper>
        <Filter
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FilterImage src={filterImg} />
          <FilterText>전체</FilterText>
        </Filter>
      </FilterWrapper>
      <Grid>
        {data.map((el) => (
          <CheckCallBox
            name={el.name}
            phone={el.phone}
            time={el.time}
            categories={el.categories}
            onDelete={() => {handleDelete(el.id)}}
            onDetail={() => {
              navigate(`/check/${el.id}`);
            }}
          />
        ))}
      </Grid>
      <Pagination>
        <Arrow src={arrowLeft} />
        <Pages>
          {pages.map((el) =>
            el === selectedPage ? (
              <PageSelected>{el}</PageSelected>
            ) : (
              <PageUnselected
                onClick={() => {
                  setSelectedPage(el);
                }}
              >
                {el}
              </PageUnselected>
            )
          )}
        </Pages>
        <Arrow src={arrowRight} />
      </Pagination>
    </Container>
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
const FilterWrapper = styled.div`
  width: 1017.1px;
  display: flex;
  justify-content: flex-end;
  margin-top: 6.5px;
  margin-bottom: 48.99px;
`;
const Filter = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  margin-right: -4.9px;
`;
const FilterImage = styled.img`
  display: flex;
  width: 23.517px;
  height: 23.517px;
  padding: 3.02px 2.286px 3.023px 2.042px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const FilterText = styled.p`
  width: 42.134px;
  margin: 0;
  color: var(--primary-100, #372fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 13.718px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23.52px;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 19.6px;
  margin-top: 85.25px;
  margin-bottom: 79.37px;
`;
const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 14.7px;
`;
const PageSelected = styled.button`
  border: none;
  width: 24.497px;
  height: 24.497px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 4.899px;
  background: var(--primary-90, #4a42ff);
  color: var(--grayscale-0, #fff);
  text-align: center;

  /* Body4_14/B */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;
`;
const PageUnselected = styled.button`
  border: none;
  background: transparent;
  width: 24.497px;
  height: 24.497px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grayscale-60, #666);
  text-align: center;
  font-family: Pretendard;
  font-size: 13.718px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.274px;
`;
const Arrow = styled.img`
  cursor: pointer;
  width: 6.544px;
  height: 9.799px;
  flex-shrink: 0;
`;
