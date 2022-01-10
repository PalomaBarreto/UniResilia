import styled from "styled-components";

const Loading = styled.div `
    border: 16px solid #2A1A5E;
    border-top: 16px solid #f45905;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default Loading;