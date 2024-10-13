import NavigationMenu from './NavigationMenu';

export default function Header() {
    return (
      <header>
        <h1>BIRDWATCHING</h1>
        <img src="dove.png" alt="a simple dove logo"></img>
        <NavigationMenu />
      </header>
    );
  }