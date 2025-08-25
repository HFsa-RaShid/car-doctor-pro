"use client";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
// import toast from 'react-hot-toast';

import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialSignIn = () => {
    const router=useRouter();
    const session = useSession();
    const handleSocialSignIn = (provider) => {
        const result =  signIn(provider, {redirect: false});

    };
     if(session?.status==='authenticated'){
        router.push('/');
        // toast.success('Successfully Logged In');
        }
    return (
        <div>
            <div className="flex justify-center gap-4 mt-3">
              <button  className="p-2 border rounded-full hover:bg-gray-100">
                <FaFacebookF className="text-blue-600" />
              </button>
              <button onClick={()=>handleSocialSignIn('github')} className="p-2 border rounded-full hover:bg-gray-100">
                <FaGithub className="text-blue-700" />
              </button>
              <button onClick={()=>handleSocialSignIn('google')} className="p-2 border rounded-full hover:bg-gray-100">
                <FaGoogle className="text-red-500" />
              </button>
            </div>
        </div>
    );
};

export default SocialSignIn;