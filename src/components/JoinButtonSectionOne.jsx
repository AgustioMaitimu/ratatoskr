'use client';

import React from 'react';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

function JoinButtonSectionOne() {
  return (
    <Button
      to="join"
      smooth
      duration={1000}
      className="rounded-full bg-blue-500 px-8 py-4 text-xl font-light text-white"
    >
      Join private alpha
    </Button>
  );
}

export default JoinButtonSectionOne;
