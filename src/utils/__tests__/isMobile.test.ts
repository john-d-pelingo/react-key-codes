import { isMobile } from '../isMobile'

import botsAndCrawlersUserAgentSamples from './__mocks__/bots-and-crawlers-user-agent-samples.json'
import desktopUserAgentSamples from './__mocks__/desktop-user-agent-samples.json'
import eReadersUserAgentSamples from './__mocks__/e-reader-user-agent-samples.json'
import gameConsoleUserAgentSamples from './__mocks__/game-console-user-agent-samples.json'
import mobileUserAgentSamples from './__mocks__/mobile-user-agent-samples.json'
import setTopBoxUserAgentSamples from './__mocks__/set-top-box-user-agent-samples.json'
import tabletUserAgentSamples from './__mocks__/tablet-user-agent-samples.json'

describe('utils - isMobile', () => {
  function shouldReturnThatItIsNotMobile(notMobileUserAgentSample: string) {
    it('should return that it is not mobile', () => {
      expect(isMobile(notMobileUserAgentSample)).toBe(false)
    })
  }

  describe('desktops', () => {
    for (let ii = 0; ii < desktopUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(desktopUserAgentSamples[ii])
    }
  })

  describe.skip('game consoles', () => {
    for (let ii = 0; ii < gameConsoleUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(gameConsoleUserAgentSamples[ii])
    }
  })

  describe.skip('set top boxes', () => {
    for (let ii = 0; ii < setTopBoxUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(setTopBoxUserAgentSamples[ii])
    }
  })

  describe('tablets', () => {
    for (let ii = 0; ii < tabletUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(tabletUserAgentSamples[ii])
    }
  })

  describe.skip('e-readers', () => {
    for (let ii = 0; ii < eReadersUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(eReadersUserAgentSamples[ii])
    }
  })

  describe('bots and crawlers', () => {
    for (let ii = 0; ii < botsAndCrawlersUserAgentSamples.length; ii++) {
      shouldReturnThatItIsNotMobile(botsAndCrawlersUserAgentSamples[ii])
    }
  })

  function shouldReturnThatItIsMobile(mobileUserAgentSample: string) {
    it('should return that it is not mobile', () => {
      expect(isMobile(mobileUserAgentSample)).toBe(true)
    })
  }

  describe('mobiles', () => {
    for (let ii = 0; ii < mobileUserAgentSamples.length; ii++) {
      shouldReturnThatItIsMobile(mobileUserAgentSamples[ii])
    }
  })
})
