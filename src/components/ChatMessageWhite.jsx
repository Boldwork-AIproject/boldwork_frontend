import React, { useEffect, useState } from 'react';
import { AvatarIcon } from "../styledComponents"

const msgBubble = {
    maxWidth: "508px",
    margin: "24px 0 0 0",
    padding: "24px",
    backgroundColor: "white",
    color: "var(--neutral-60)",
    fontSize: "var(--body-3)",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "right",
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    border: "1px solid var(--neutral-10)"
}

const msgLabel = {
    marginTop: "16px",
    width: "226px",
    height: "32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const msgLabelName = {
    fontSize: "16px",
    color: "var(--neutral-80)"
}

const msgLabelDateTime = {
    fontSize: "14px",
    color: "var(--neutral-40)"
}

const BlobContainer = {
    display: "flex", 
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "center",
    width: "1040px",
}

const ChatMessageWhite = ({ content, name, dateTime, avatar }) => {
    return (
    <div style={BlobContainer}>
        <div style={msgLabel}>
            <AvatarIcon />
            <span style={msgLabelName}>{name}</span>
            <span style={msgLabelDateTime}>{dateTime}</span>
        </div>

        <div style={msgBubble}>
            {content}
        </div>
    </div>
    );
};
  
  export default ChatMessageWhite
