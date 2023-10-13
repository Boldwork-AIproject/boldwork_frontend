import React from "react";
import { useParams } from "react-router-dom";

export default function CheckCallDetail() {
  const { id } = useParams();
  return <div>{"CheckCallDetail, id: " + id}</div>;
}
