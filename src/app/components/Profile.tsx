import React from 'react';
import { User, Calendar, Heart, Activity } from 'lucide-react';

interface ProfileProps {
  firstName: string;
  lastName: string;
  age: number;
  birthDate: string;
  sex: string;
  timestamp: String;
  status: string;
}

const Profile: React.FC<ProfileProps> = ({ 
  firstName, 
  lastName, 
  age, 
  birthDate, 
  sex,
  timestamp,
  status 
}) => {
  return (
    <div className="max-w-2xl bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg border border-slate-200">
      <div className="p-[2rem]">
        {/* Header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <h2 className="font-semibold text-3xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Profile Details
          </h2>
        </div>

        {/* Profile Content */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-slate-500">Last updated {timestamp.toLocaleString()}</p>
          </div>
          {/* Name Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Full Name</p>
              <p className="text-lg font-semibold text-slate-800">
                {firstName} {lastName}
              </p>
            </div>
          </div>

          {/* Age Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <Activity className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Age</p>
              <p className="text-lg font-semibold text-slate-800">{age} years</p>
            </div>
          </div>

          {/* Birth Date Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amber-50 rounded-xl">
              <Calendar className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Birth Date</p>
              <p className="text-lg font-semibold text-slate-800">{birthDate}</p>
            </div>
          </div>

          {/* Sex & Status Section */}
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-rose-50 rounded-xl">
              <Heart className="w-6 h-6 text-rose-600" />
            </div>
            <div className="flex space-x-8">
              <div>
                <p className="text-sm font-medium text-slate-500">Sex</p>
                <p className="text-lg font-semibold text-slate-800">{sex}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Status</p>
                <p className="text-lg font-semibold text-slate-800">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;