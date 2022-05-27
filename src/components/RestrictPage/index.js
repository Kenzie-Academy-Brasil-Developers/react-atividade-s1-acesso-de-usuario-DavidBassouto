import "./style.css";
function RestrictPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div className="Log">
          <p>Bem-vindo {user}</p>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div className="Unlog">
          <p>Você não pode acessar essa página</p>
          <button onClick={Login}>Login</button>
        </div>
      )}
    </>
  );
}

export default RestrictPage;
