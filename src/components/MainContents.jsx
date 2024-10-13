import React from 'react';
import WelcomeText from './WelcomeText';
import ImageSide from './ImageSide';

export default function MainContents() {
  return (
    <main className="main-contents">
      <WelcomeText />
      <ImageSide />
    </main>
  );
}