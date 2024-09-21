import { ReactNode } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    navigate('/');
    return null;
  }

  return <div>{children}</div>;
};

export default AuthProvider;
