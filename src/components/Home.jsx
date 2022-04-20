import React, { useState } from 'react'
import Wheel from '@uiw/react-color-wheel'
import { Modal } from 'react-bootstrap'
import './home.modules.css'
export default function Home () {
  const [toggleShow, setToggleShow] = useState(false)

  const show = () => {
    setToggleShow(!toggleShow)
  }

  function Demo () {
    const [hsva, setHsva] = useState({ h: 10, s: 10, v: 68, a: 1 })
    return (
      <Wheel
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsva })
        }}
      />
    )
  }

  return (
    <>
      <nav class='navbar'>
        <div class='navbar__container'>
          <a href='#start' id='navbar__logo'>PERCEPTION</a>
          <div class='navbar__toggle' id='mobile-menu'>
            <span class='bar' /> <span class='bar' />
            <span class='bar' />
          </div>
          <ul class='navbar__menu'>
            <li class='navbar__item'>
              <a href='#start' class='navbar__links' id='start-page'>Start</a>
            </li>
            <li class='navbar__item'>
              <a href='#mechanics' class='navbar__links' id='mechanics-page'>Mechanics</a>
            </li>
            <li class='navbar__item'>
              <a href='#activation' class='navbar__links' id='propertes-page'>Activation</a>
            </li>
            <li class='navbar__item'>
              <a href='#channels' class='navbar__links' id='channels-page'>Channels</a>
            </li>
            <li class='navbar__item'>
              <a href='#complement' class='navbar__links' id='complement-page'>Complement</a>
            </li>
            <li class='navbar__item'>
              <a
                href='#facts' class='navbar__links' id='facts-page'
              >Facts
              </a>
            </li>
            <li class='navbar__btn'>
              <a href='#emergence' class='button' id='emergence-page'>Emergence</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class='hero' id='start'>
        <div class='hero__container'>

          <h1 class='hero__heading' id='yes'>Using your <span>colors</span></h1>
          <p class='hero__description'>Opponent Process Theory</p>
          <button class='main__btn'><a href='#mechanics'>Discover</a></button>
        </div>
      </div>

      <div class='main' id='mechanics'>
        <div class='main__container'>
          <div class='main__content'>
            <h1>Color Processing</h1>
            <h2>Rods & Cones</h2>
            <p>Rods ➜ specialized receptors for low light levels</p>
            <p>Cones ➜ specialized receptors for high light levels</p>

            <p>The retina has far fewer short-wavelength-sensitive cones (<span>blue</span>) than middle or long-wavelength-sensitive cones</p>
            <button class='main__btn'><a href='#activation'>Next</a></button>
          </div>
          <div class='main__img--container'>
            <div id='card-op'>

              <img class='graph' src='https://rockcontent.com/wp-content/uploads/2014/05/FovealResponseCurves.png' />
            </div>
          </div>
        </div>
      </div>

      <div class='main' id='activation'>
        <div class='main__container'>
          <div class='main__img--container'>
            <div class='main__img--card'><i class='fas fa-layer-group' /></div>
          </div>
          <div class='main__content'>
            <h1>Activating Channel Properties</h1>
            <h2>Differences ➜ NOT absolute values</h2>
            <p>Contrast arrises because the visual system is better at determining the differences between patches of light but not how much light is physically present (Ware 69)</p>
            <button class='main__btn'><a href='#channels'>Chromatic Contrast</a></button>
          </div>
        </div>
        <div class='divider' />
        <div class='main__container'>
          <div class='main__img--container'>

            <div class='main__img--longCard' id='card-redgreen'><i class='fas fa-layer-group' />

              <div class='line2'>
                <div id='linegrey1' />
                <div id='linegrey2' />
              </div>
            </div>
            <div class='main__img--longCard' id='card-yellowblue'><i class='fas fa-layer-group' />
              <div class='line2'>
                <div id='lineyellow1' />
                <div id='lineyellow2' />
              </div>
            </div>
            <div class='main__img--longCard' id='card-blackwhite'><i class='fas fa-layer-group' />
              <div class='line2'>
                <div id='lineblack1' />
                <div id='lineblack2' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='main' id='channels'>
        <div class='main__container'>
          <div class='main__content'>
            <h1>Color-opponent Channels</h1>
            <h2><span id='blackdiv'> black</span> ➜ <span id='whitediv'> white</span> </h2>
            <h2>red ➜ green </h2>
            <h2>yellow ➜ blue </h2>

            <p>Chromatic Contrast occurs in red-green and yellow-blue channels</p>
            <p>Brightness Contrast occurs in black and white channel</p>
            <p>Simultaneous Contrast ➜ distortion of a color patch appearance due to its surroundings</p>
            <button class='main__btn'><a href='#complement'>Next</a></button>
          </div>
          <div class='main__img--container'>
            <div class='main__img--card'><i class='fas fa-layer-group' /></div>
          </div>
        </div>
      </div>

      {/* Complementary Section */}
      <div class='main' id='complement'>
        <div class='main__container'>
          <div>
            <div class='wheelpos'>
              <Demo />
            </div>
          </div>
          <div class='main__content'>
            <h2>Complementary Colors</h2>
            <h1>Use one predominantly and the second as accent</h1>
            <p>Color contrast is greatest when colors are at the opposite end of the color wheel</p>
            <button class='main__btn'><a href='#emergence'>Next</a></button>
          </div>
        </div>
      </div>

      <div class='main' id='emergence'>
        <div class='main__container'>
          <div class='main__content'>
            <h1>Emergence is the most powerful method of capturing attention.</h1>
            <h2>The Orienting Response</h2>
            <p>The things that most powerfully elicit the orienting response are not simply things that move, but things that emerge into the visual field. We rapidly become habituated to simple motion; otherwise, every blade of grass moving would startle us" (Ware 36)</p>
            <button class='main__btn' onClick={show}>Beware</button>
            <Modal id='fullScreenModalId' show={toggleShow} dialogClassName='fullscreen-modal'>
              <Modal.Footer>
                <button class='main__btn' id='modal-button' onClick={show}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </div>
          <div class='main__img--container'>
            <div class='main__img--card' id='card-2'>
              <i class='fas fa-users' />
            </div>
          </div>
          {/* style={{ overflow: 'scroll', maxHeight: '725px' }} */}
        </div>
      </div>

      {/* Services Section */}
      <div class='services' id='facts'>
        <h1>Fast Facts</h1>
        <div class='services__wrapper'>
          <div class='services__card'>
            <h2>Visibility Enhancements</h2>
            <p>Visibility enhancements are NOT symmetric. Increasing the size of a symbol will be stand out more than a decrease in size vs the norm. An increase in contrast will be more distinct than a decrease in contrast. </p>
          </div>
          <div class='services__card'>
            <h2>Feature Channels</h2>
            <p>
              The more the background varies in a particular feature channel (color, texture, orientation), the larger the difference required to make a feature distinct.
            </p>
          </div>
          <div class='services__card'>
            <h2>Tunability</h2>
            <p>Tunability is not an all-or-nothing property of graphic symbols. A symbol can be made to stand out in only a single feature channel or through a combination of them.</p>
          </div>
          <div class='services__card'>
            <h2>Pop Out</h2>
            <p>The simple features that lead to pop-out are color, orientation, size, motion, and stereoscopic depth.</p>
          </div>
        </div>
      </div>

      <div class='footer__container'>
        <button class='main__btn' id='final'><a href='#'>Top</a></button>

        <div class='footer__links' />
        <section class='social__media'>
          <div class='social__media--wrap'>
            <div class='footer__logo'>
              <a href='/' id='footer__logo'>PERCEPTION</a>
            </div>
            <p class='website__rights'>© PERCEPTION 2022. All rights reserved</p>
          </div>
        </section>
      </div>
    </>
  )
}
