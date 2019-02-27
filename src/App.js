import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`

const App = ({ text, ...rest }) => {
    return (
        <Wrapper>
            <Title>{text}</Title>
        </Wrapper>
    )
}

App.propTypes = {
    text: PropTypes.string,
}

App.defaultProps = {
    text: 'Elvin boilerplate react with styled components :)',
}

export default App
