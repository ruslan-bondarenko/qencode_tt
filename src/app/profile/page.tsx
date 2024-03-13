import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const Profile = async () => {
  const session = await getServerSession(authConfig);
  return (
    <div className="p-4 sm:p-10 flex flex-col shrink-1">
      <h1 className="text-center text-3xl mb-4 font-lora">Profile</h1>

      <div className="flex flex-col gap-10">
        <div className="flex gap-6">
          <div className="w-16 h-16 min-w-16 min-h-16 rounded-full overflow-hidden">
            {session?.user?.image ? (
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                className="!object-contain"
                src={session?.user?.image}
                alt="avatar"
              />
            ) : (
              <div className="bg-tone-300 w-full h-full"></div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-900 text-2xl">{session?.user?.name}</h2>
            <div className="text-gray-300 text-m">{session?.user?.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
