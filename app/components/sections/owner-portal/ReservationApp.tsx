import React from "react";
import {
  Search,
  Calendar,
  FileText,
  MessageSquare,
  MoreHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";

export default function ReservationApp() {
  return (
    <div className="bg-gray-900 text-white min-h-screen max-w-sm mx-auto font-sans">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 flex-1">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-gray-400 text-sm">Search</span>
        </div>
      </div>

      {/* Reservations Section */}
      <div className="px-4 mb-6">
        <h2 className="text-white text-lg font-medium mb-4">Reservations</h2>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            width={2071}
            height={1381}
            alt="Modern house with pool"
            className="w-full h-40 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">01</span>
              </div>
              <div>
                <h3 className="text-white font-medium">Cornem Town</h3>
                <p className="text-gray-300 text-xs">rented by: XYZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Guests Section */}
      <div className="px-4 mb-6">
        <h2 className="text-white text-lg font-medium mb-4">Upcoming guests</h2>

        {/* Guest 1 - Sarah Johnson */}
        <div className="bg-gray-800 rounded-lg p-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">SJ</span>
            </div>
            <div>
              <h3 className="text-white font-medium">Sarah Johnson</h3>
              <p className="text-gray-400 text-sm">2 points</p>
            </div>
          </div>
          <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded font-medium">
            NEW
          </span>
        </div>

        {/* Guest 2 - Michael Chen */}
        <div className="bg-gray-800 rounded-lg p-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <div>
              <h3 className="text-white font-medium">Michael Chen</h3>
              <p className="text-gray-400 text-sm">3 points</p>
            </div>
          </div>
          <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded font-medium">
            FOR GUEST
          </span>
        </div>

        {/* Guest 3 - Emma Rodriguez */}
        <div className="bg-gray-800 rounded-lg p-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">ER</span>
            </div>
            <div>
              <h3 className="text-white font-medium">Emma Rodriguez</h3>
              <p className="text-gray-400 text-sm">Suite & Spa</p>
            </div>
          </div>
          <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded font-medium">
            NEW
          </span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-gray-900 border-t border-gray-800">
        <div className="flex items-center justify-around py-3">
          <div className="flex flex-col items-center">
            <Calendar className="w-5 h-5 text-teal-500 mb-1" />
            <span className="text-teal-500 text-xs font-medium">
              Reservation
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FileText className="w-5 h-5 text-gray-500 mb-1" />
            <span className="text-gray-500 text-xs">Service</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageSquare className="w-5 h-5 text-gray-500 mb-1" />
            <span className="text-gray-500 text-xs">News</span>
          </div>
          <div className="flex flex-col items-center">
            <MoreHorizontal className="w-5 h-5 text-gray-500 mb-1" />
            <span className="text-gray-500 text-xs">More</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full overflow-hidden mb-1">
              <User className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-gray-500 text-xs">Profile</span>
          </div>
        </div>
      </div>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}
