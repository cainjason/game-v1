import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
            <h2> Grant A.M.E. </h2>
            <h3>
                <FiberManualRecordIcon />
                Jason Cain
            </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: gray;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 65px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 6);
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: gray;
        font-size: 50px;
        background-color: white;
        border-radius: 999px;
        margin-left: 10px;
        cursor: pointer;
        :hover {
            opacity: 0.8;
        }
    }
`;

const SidebarInfo = styled.div``;