import styled from 'styled-components'

export const MainButton = styled.button`
    background-color: #004CBD;
    color: white;
    border-radius: 6px;
    border: solid 2px transparent;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    line-height: 20px;
    max-width: 197px;
    width: 100%;
    letter-spacing: 1px;
    transition: .2s all ease;

    &:hover {
        background-color: transparent;
        color: #004CBD;
        border: solid 2px #004CBD;
        transition: .2s all ease;
    }
`

export default MainButton