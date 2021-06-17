import styled from 'styled-components'

export const Image = styled.img`
    width: ${({ modal }) => modal ? '60px' : '30px'};
    height: ${({ modal }) => modal ? '60px' : '30px'};
    margin-right: 5px;
`