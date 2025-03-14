import { useLocation } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AuthForm isLogin={isLogin} />
    </div>
  );
}