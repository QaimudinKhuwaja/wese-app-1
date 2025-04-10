'use client';
import { useEffect, useState } from 'react';
import ContributionsTable from '../component/ContributionsTable';
import Navbar from '../component/Header';
import Footer from '../component/Footer';

interface Member {
  name: string;
  image: string;
  daily: { [key: string]: boolean };
}

export default function ViewerPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure this code runs only on the client side
      const savedData = localStorage.getItem('committee_members');
      if (savedData) {
        setMembers(JSON.parse(savedData));
      }

      const user = localStorage.getItem('current_user');
      setCurrentUser(user);

      setIsMounted(true); // Mark the component as mounted
    }
  }, []);

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {/* Render only after the component has mounted */}
        {isMounted && (
          <h1 className="text-2xl font-semibold text-indigo-600 mb-2">
            Welcome Dear {currentUser || 'Guest'} ❤️
          </h1>

        )}

        {/* Month Heading */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center p-2 rounded-lg mb-6">
          
        </div>
         <h1>Aba Sangat hin page ta hali working the hala paye meharbani kara hamza kha screenshot watho ta hali twha kha khabar pai je weendi ta twha je wese ketri paid the aa.</h1>
        {/* Contributions Table */}
        <ContributionsTable
          members={members}
          setMembers={() => {}} // No-op function since editing is disabled
          disabled={true} // View-only mode
          currentMonth={currentMonth}
        />
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

// export default function ViewerPage() {
//   const [members, setMembers] = useState([]);
//   const [currentUser, setCurrentUser] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch members from the serverless function
//     async function fetchMembers() {
//       const res = await fetch('/api/members');
//       const data = await res.json();
//       setMembers(data);
//     }

//     fetchMembers();

//     // Access localStorage only on the client side
//     if (typeof window !== 'undefined') {
//       const savedUser = localStorage.getItem('current_user');
//       setCurrentUser(savedUser);
//     }
//   }, []);

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
//           setMembers={() => {}} // No-op function since editing is disabled
//           disabled={true} // View-only mode
//           currentMonth={currentMonth}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }