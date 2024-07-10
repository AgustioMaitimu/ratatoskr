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

function JoinButtonHeader() {
  return (
    <Button
      to="join"
      smooth
      duration={1000}
      className="rounded-full bg-blue-500 px-5 py-3 font-light text-white"
    >
      Join private alpha
    </Button>
  );
}

export default JoinButtonHeader;
