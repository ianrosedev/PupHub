import React, { Component } from 'react';
import handleWindowResize from '../../hocs/handleWindowResize/handleWindowResize';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

export class NavBar extends Component {
  state = {
    isDropdownOpen: false
  };

  burgerClose = () => (
    this.setState({
      isDropdownOpen: false
    })
  );

  burgerToggle = () => (
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }))
  );

  render() {
    const style = {
      base: {
        ul: {
          fontSize: '1.5rem'
        },
        li: {
          display: 'inline-block',
          marginRight: '2vw',
          [`@media (max-width: ${sizes.small})`]: {
            margin: 0,
            padding: 5,
            borderTop: `1px solid ${colors.primary}`
          }
        },
        a: {
          textDecoration: 'none',
          color: 'white'
        },
        active: {
          borderBottom: (window.innerWidth > Number(sizes.small.slice(0, -2))) ?
            '2px solid white' : 'none'
        }
      },
      navWide: {
        display: 'block',
        [`@media (max-width: ${sizes.small})`]: {
          display: 'none'
        }
      },
      navNarrow: {
        display: 'none',
        [`@media (max-width: ${sizes.small})`]: {
          display: 'block'
        },
        ul: {
          display: this.state.isDropdownOpen ? 'flex' : 'none',
          flexDirection: 'column',
          position: 'absolute',
          top: 180,
          left: 0,
          width: '100vw',
          backgroundColor: colors.primaryDark,
          borderBottom: `1px solid ${colors.primary}`,
          boxShadow: '0 3px 3px gray',
          margin: 0,
          padding: 0,
          textAlign: 'center'
        }
      }
    };

    const links = [
      <li
        key='home'
        style={style.base.li}
        onClick={this.burgerClose}
      >
        <NavLink
          exact to='/'
          style={style.base.a}
          activeStyle={style.base.active}
        >
          Home
        </NavLink>
      </li>,
      <li
        key='search'
        style={style.base.li}
        onClick={this.burgerClose}
      >
        <NavLink
          to='/search'
          style={style.base.a}
          activeStyle={style.base.active}
        >
          Search
        </NavLink>
      </li>,
      <li
        key='resources'
        style={style.base.li}
        onClick={this.burgerClose}
      >
        <NavLink
          to='/resources'
          style={style.base.a}
          activeStyle={style.base.active}
        >
          Resources
        </NavLink>
      </li>
    ];

    return (
      <nav>
        <div style={style.navWide}>
          <ul style={style.base.ul}>
            {links}
          </ul>
        </div>
        <div style={style.navNarrow}>
          <i
            className='fa fa-bars fa-2x'
            onClick={this.burgerToggle}
          >
          </i>
          <ul
            style={[style.base.ul, style.navNarrow.ul]}
          >
            {links}
          </ul>
        </div>
      </nav>
    );
  }
}

export default handleWindowResize(Radium(NavBar));
