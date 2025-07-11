"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type AdminUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isAdmin?: boolean;
};

type AdminSession = {
  user?: AdminUser;
};

export default function AdminDashboard() {
  const { data: session, status } = useSession() as { data: AdminSession | null; status: string };
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || !session.user?.isAdmin) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-gray-700 mb-4">
          Welcome, <strong>{session?.user?.email}</strong>!
        </p>

        {/* Replace this with your post management UI */}
        <p className="text-gray-600">Here you can manage posts, users, and more.</p>
      </div>
    </div>
  );
}
