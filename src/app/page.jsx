"use client"
import LoginPage from "@/component/login";

export default function Home() {
  return (
    <div className="relative">
      <button>TEST</button>
      <div className="absolute flex mx-auto h-screen">
        <LoginPage />
      </div>
    </div>
  );
}
