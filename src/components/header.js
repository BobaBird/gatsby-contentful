import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  position: relative;
  overflow: hidden;
  height: 70vh;
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
    console.log(this.props.location.pathname);
    
  }
  
  render() {
    const { data } = this.props
    return (
      <div>
        
        <HeaderWrapper>
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


