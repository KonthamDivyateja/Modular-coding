const createNavbar = () => {
  return `
    <nav style="display: flex; justify-content: space-around; padding: 10px; background-color: #333; color: white;">
      <a href="index.html" style="color: white; text-decoration: none;">Home</a>
      <a href="signup.html" style="color: white; text-decoration: none;">Signup</a>
      <a href="login.html" style="color: white; text-decoration: none;">Login</a>
      <a href="todos.html" style="color: white; text-decoration: none;">Todos</a>
      <button id="logout-btn" style="background: none; border: none; color: white; cursor: pointer;">Logout</button>
    </nav>
  `;
};

export default createNavbar;