import {Route, Routes, Navigate} from 'react-router-dom';
import Signup from './components/Signup/indexsignup';
import VideoPlatform from './components/platform/indexplatform';
import Login from './components/Login/indexlogin';


function RedirectToPlatformIfLoggedIn({ children }) {
  const user = localStorage.getItem('authToken');

  if (user) {
    return <Navigate to="/platform" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      {/* Default route redirecting to signup */}
      <Route path="/" element={<Navigate to="/signup" />} />

      {/* Signup and Login routes */}
      <Route path="/signup" element={
        <RedirectToPlatformIfLoggedIn>
          <Signup />
        </RedirectToPlatformIfLoggedIn>
      } />

      <Route path="/login" element={
        <RedirectToPlatformIfLoggedIn>
          <Login />
        </RedirectToPlatformIfLoggedIn>
      } />

      {/* Platform route */}
      <Route path="/platform" element={<VideoPlatform />} />
    </Routes>
  );
}

export default App;
