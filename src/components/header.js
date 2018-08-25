import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Logo from '../images/logo.svg'


const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  position: relative;
  overflow: hidden;
  height: ${({isHome}) => (isHome ? '70vh' : '20vh')};
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if(location.pathname !== prevProps.location.pathname ) {
      if(this.props.location.pathname === '/') {
        this.wrapper.animate([ {height: '20vh'}, { height: '70vh' } ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1
        })
      } else {
        this.wrapper.animate([{ height: '70vh' }, {height: '20vh'} ], {
           duration: 300,
           fill: 'forwards',
           easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
           iterations: 1
         })
      }
    }
  }
  
  render() {
    const { data, location } = this.props
    return (
      <div>
        <HeaderWrapper 
          isHome={location.pathname === '/'}
          ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
        >
          <Img 
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
            sizes={data.background.sizes} 
          />
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link to="/">
                <img src={Logo} alt="Level up Tuts logo"/>
              </Link>
            </h1>
            
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">page-3</Link>
                </li>
                <li>
                  <Link to="/about">page-4</Link>
                </li>
                <li>
                  <Link to="/about">page-5</Link>
                </li>
              </ul>
            </nav>
          </HeaderContainer>
        </HeaderWrapper>
      </div>
    )
  }
}


