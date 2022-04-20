import React from 'react'
import './home.modules.css'
import { redirectUri } from '../config'

const Login = ({ handleToken }) => {
  return (
    <>
      <nav class='navbar'>
        <div class='navbar__container'>

          <img id='logos' style={{ marginTop: '10px', marginRight: '0px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbH0hWF1rkYu60Rtw_gLvdQ6ucY6NLOIQfZujewdXsGy60FPn-xZTyhPo89m9gu0N6wA&usqp=CAU' />

          <div class='navbar__toggle' id='mobile-menu'>
            <span class='bar' /> <span class='bar' />
            <span class='bar' />
          </div>
          <ul class='navbar__menu'>
            <li class='navbar__item'>
              <a href='#home' class='navbar__links' id='home-page'>Are</a>
            </li>
            <li class='navbar__item'>
              <a href='#about' class='navbar__links' id='about-page'>You</a>
            </li>
            <li class='navbar__item'>
              <a
                href='#services' class='navbar__links' id='services-page'
              >Ready to
              </a>
            </li>
            <li class='navbar__item'>
              <a
                href='#services' class='navbar__links' id='services-page'
              > to
              </a>
            </li>
            <li class='navbar__btn'>
              <a target='_blank' class='button' id='signup' rel='noreferrer'><img style={{ height: '39px', width: '39px', marginTop: '0px', marginRight: '17px' }} src='https://www.pinclipart.com/picdir/big/522-5228327_cartoon-black-cat-face-clipart-cartoon-black-cats.png' />
                Visualize
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class='hero' id='home'>
        <div class='hero__container'>
          <h1 class='hero__heading'>Welcome to <span>Color Theory</span></h1>
          <p class='hero__description'>This will be a demonstration about things about color</p>
          <button class='main__btn' onClick={handleToken}>

            <a
              className='btn btn--loginApp-link'
              href={`${window.location}#`}
            >
              Login to Color
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
