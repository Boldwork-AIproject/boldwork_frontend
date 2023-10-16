import React from 'react';
import { AvatarIcon } from "../styledComponents"

const msgBubble = {
    maxWidth: "508px",
    margin: "24px 0 0 0",
    padding: "24px",
    backgroundColor: "var(--primary-100)",
    color: "white",
    fontSize: "var(--body-3)",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-3%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "right",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "center",
    width: "1040px",
}

const ChatMessagePurple = ({ content, name, dateTime, avatar }) => {
    return (
    <div style={BlobContainer}>
        <div style={msgBubble}>
            {content}
        </div>
    
        <div style={msgLabel}>
            <span style={msgLabelName}>{name}</span>
            <span style={msgLabelDateTime}>{dateTime}</span>
            <AvatarIcon />
        </div>
    </div>
    );
  };
  
  export default ChatMessagePurple
