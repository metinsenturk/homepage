import { Link } from 'gatsby'
import styled from 'styled-components'

const InternalLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :visited {
    color: inherit;
    }
`

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover {
    opacity: 0.3;
    text-decoration: none;
    }
`;

export {CardLink, InternalLink};