// 'use client';
// import { useEffect, useState } from 'react';
// import ContributionsTable from '../component/ContributionsTable';
// import Navbar from '../component/Header';
// import Footer from '../component/Footer';

// export default function CollectorPage() {
//   const [members, setMembers] = useState([
//     { name: 'Sharjeel Ahmed', image: '/images/sharjeel.jpg', daily: {} },
//     { name: 'Mubeen Khuwaja', image: '/images/mubeen.jpg', daily: {} },
//     { name: 'Ahmed 3', image: '/images/ahmed.jpg', daily: {} },
//     { name: 'Muntaha Maqsood', image: '/images/maqsood.jpg', daily: {} },
//     { name: 'Ali Ahmed', image: '/images/ahmed.jpg', daily: {} },
//     { name: 'Hamza Khuwaja', image: '/images/hamza.jpg', daily: {} },
//     { name: 'Mutaqi Khuwaja', image: '/images/mutaqi.jpg', daily: {} },
//     { name: 'Ahmed 2', image: '/images/ahmed.jpg', daily: {} },
//     { name: 'Mubeen 2', image: '/images/mubeen.jpg', daily: {} },
//     { name: 'Mubeen 3', image: '/images/mubeen.jpg', daily: {} },
//   ]);

//   const [currentUser, setCurrentUser] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedUser = localStorage.getItem('current_user');
//       if (savedUser) setCurrentUser(savedUser);
  
//       const savedMembers = localStorage.getItem('committee_members');
//       if (savedMembers) {
//         setMembers(JSON.parse(savedMembers));
//       }
//     }
//   }, []);

//   const currentMonth = new Date().toLocaleString('default', { month: 'long' });

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-semibold text-indigo-600 mb-2">Welcome Dear {currentUser} ❤️</h1>

//         {/* Month Heading */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center p-2 rounded-lg mb-6">
//           <span className="text-lg"> Month: {currentMonth}</span>
//         </div>

//         {/* Contributions Table */}
//         <ContributionsTable
//           members={members}
//           setMembers={setMembers}
//           disabled={false} // Editable mode
//           currentMonth={currentMonth}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }





























































'use client';
import { useEffect, useState } from 'react';
import ContributionsTable from '../component/ContributionsTable';
import Navbar from '../component/Header';
import Footer from '../component/Footer';

export default function CollectorPage() {
  const [members, setMembers] = useState([
    { name: 'Sharjeel Ahmed', image: '/images/sharjeel.jpg', daily: {} },
    { name: 'Mubeen Khuwaja', image: '/images/mubeen.jpg', daily: {} },
    { name: 'Ahmed 3', image: '/images/ahmed.jpg', daily: {} },
    { name: 'Muntaha Maqsood', image: '/images/maqsood.jpg', daily: {} },
    { name: 'Ali Ahmed', image: '/images/ahmed.jpg', daily: {} },
    { name: 'Hamza Khuwaja', image: '/images/hamza.jpg', daily: {} },
    { name: 'Mutaqi Khuwaja', image: '/images/mutaqi.jpg', daily: {} },
    { name: 'Ahmed 2', image: '/images/ahmed.jpg', daily: {} },
    { name: 'Mubeen 2', image: '/images/mubeen.jpg', daily: {} },
    { name: 'Mubeen 3', image: '/images/mubeen.jpg', daily: {} },
  ]);

  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('current_user');
      if (savedUser) setCurrentUser(savedUser);
    }
  }, []);

  const months = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' , 'January', 'February', 'March'];

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-indigo-600 mb-2">Welcome Dear {currentUser} ❤️</h1>

        {months.map((month) => {
          const savedMembers = typeof window !== 'undefined' ? localStorage.getItem(`committee_members_${month}`) : null;
          const initialMembers = savedMembers ? JSON.parse(savedMembers) : members;

          return (
            <div key={month} className="mb-10">
              <h2 className="text-xl font-bold text-indigo-700 mb-4">{month}</h2>
              <ContributionsTable
                members={initialMembers}
                setMembers={(updatedMembers) => {
                  setMembers(updatedMembers);
                  localStorage.setItem(`committee_members_${month}`, JSON.stringify(updatedMembers));
                }}
                disabled={false}
                currentMonth={month}
                storageKey={`committee_members_${month}`}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}



























































// 'use client';
// import { useEffect, useState } from 'react';
// import ContributionsTable from '../component/ContributionsTable';
// import Navbar from '../component/Header';
// import Footer from '../component/Footer';

// export default function CollectorPage() {
//   const [members, setMembers] = useState([]);
//   const [currentUser, setCurrentUser] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch members from the serverless function
//     async function fetchMembers() {
//       try {
//         const res = await fetch('/api/members');
//         if (!res.ok) {
//           throw new Error('Failed to fetch members');
//         }
//         const data = await res.json();
//         setMembers(data);
//       } catch (error) {
//         console.error('Error fetching members:', error);
//       }
//     }

//     fetchMembers();

//     // Access localStorage only on the client side
//     if (typeof window !== 'undefined') {
//       const savedUser = localStorage.getItem('current_user');
//       if (savedUser) setCurrentUser(savedUser);
//     }
//   }, []);

//   const updateMembers = async (updatedMembers: any) => {
//     setMembers(updatedMembers);

//     // Send updated data to the serverless function
//     try {
//       const res = await fetch('/api/members', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedMembers),
//       });
//       if (!res.ok) {
//         throw new Error('Failed to update members');
//       }
//     } catch (error) {
//       console.error('Error updating members:', error);
//     }
//   };

//   const currentMonth = new Date().toLocaleString('default', { month: 'long' });

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
//           Welcome Dear {currentUser || 'Guest'} ❤️
//         </h1>

//         {/* Month Heading */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center p-2 rounded-lg mb-6">
//           <span className="text-lg"> Month: {currentMonth}</span>
//         </div>

//         {/* Contributions Table */}
//         <ContributionsTable
//           members={members}
//           setMembers={updateMembers} // Update members on the server
//           disabled={false} // Editable mode
//           currentMonth={currentMonth}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }