import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: gray;
    flex: 0.3;
    border-top: 1px solid gray;
    max-width: 260px;
    margin-top: 65px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;