import styled from 'styled-components';
import {Props} from '.'

export const Button = styled.button<Props>`

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isHome ? 'white' : 'var(--primary)' };
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-bottom:5px;
    flex-shrink: 0;
    cursor: pointer;
    position: relative;

    &:hover, &:active {
        border-radius: 20%;
        transition: 0.2s;
        background-color: ${props=> props.isHome ? 'var(--primary)' : 'var(--discord)'}
    }
    >img{
        width:24px;
        height:24px;
    }

    &::before{
        content: '';
        width:9px;
        height:9px;
        background-color: var(--white);
        position: absolute;
        border-radius: 50%;
        left: -17px;
        top: calc(50% - 4.5px);
        display: ${props => props.hasNotifications ? 'inline' : 'none'}
        

    }
    &::after{
        content: '${(props) => props.mentions && props.mentions}';
        width: auto;
        height: 16px;
        background-color: var(--notification);
        padding: 0 4px;
        position: absolute;
        border-radius: 12px;
        border: 4px solid var(--quartenary);
        right: -4px;
        bottom: -4px;
        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
        
        text-align: center;
        font-size: 13px;
        font-weight: bold;
        color: white;

    }


  
`;
