import React from 'react';
import { useFlowAuth } from '~/lib/contexts/FlowAuthContext';
import { Button } from '~/components/ui/Button';
import { LoadingDots } from '~/components/ui/LoadingDots';

export const WalletLogin: React.FC = () => {
  const { login, isLoading, error } = useFlowAuth();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 py-12 gap-12">
      
      {/* Left Side: Visual Image */}
      <div className="flex justify-center items-center">
        <img
          src="/duable_landing.png"
          alt="Duable Dashboard"
          className="max-w-[500px] w-full rounded-lg shadow-xl"
        />
      </div>

      {/* Right Side: Duable Content + Flow Connect Button */}
      <div className="flex flex-col justify-center items-start max-w-xl space-y-6 px-4">
        {/* Duable Logo */}
        <img src="/duable_logo2.png" alt="Duable Logo" className="w-36" />

        {/* Duable Content */}
        <h1 className="text-3xl font-bold text-gray-900">Duable AI – Build Web3 Application on Blockchain</h1>

        <p className="text-base text-gray-600">
          Accelerate your development with powerful AI tools that generate code intelligently and efficiently. Enjoy secure Web3 authentication for seamless and trusted user access.
          Easily create and deploy smart contracts through intuitive workflows.
        </p>

        <p className="text-lg text-[#2563EB] font-medium">
          Duable is building the future of Web3 applications on the blockchain.
        </p>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 w-full">
            <p className="font-medium">Connection Failed</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Flow Connect Button */}
        <Button
          onClick={login}
          disabled={isLoading}
          className="w-full"
          variant={'gradient'}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <LoadingDots text={''} />
              <span>Connecting...</span>
            </div>
          ) : (
            'Connect Flow Wallet'
          )}
        </Button>

        <p className="text-sm text-gray-500">
          By connecting, you agree to our Terms of Service and Privacy Policy. Your wallet will remain secure and
          private.
        </p>
      </div>
    </div>
  );
};
