'use strict';

// Make Enzyme functions available in all test files without importing
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 adapter
import Adapter from 'enzyme-adapter-react-16';
// Generate snapshots using Enzyme's shallow or full DOM rendering
import enzymeToJson from 'enzyme-to-json';
// Set up emotion serializer
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

Enzyme.configure({ adapter: new Adapter() });

global.enzymeToJson = enzymeToJson;
global.mount = mount;
global.render = render;
global.shallow = shallow;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

expect.addSnapshotSerializer(
  createSerializer(
    emotion
    // Default
    // function classNameReplacer(className, index) {
    //   return `emotion-${index}`
    // }
    //
    // Override
    // {
    //   classNameReplacer(className, index) {
    //     return `my-new-class-name-${index}`;
    //   }
    // }
  )
);
