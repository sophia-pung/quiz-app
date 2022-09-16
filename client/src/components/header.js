const Header = (props) => {

  let message;
  if (props.user) {
    message = `Welcome to the game: ${props.user}`;
  } else {
    message = `Welcome to the game.`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;