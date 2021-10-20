import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CirecleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }
`;