import useAuth from "../../../Hook/useAuth";

const Testimonial = () => {
  const {darkMode} = useAuth();
  return (
    <div className={`${darkMode ? 'bg-gray-700' : 'bg-teal-800'} text-white p-8`}>
    <h2 className="text-4xl text-[#FFD700] font-semibold mb-8 text-center">What Users Say</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-navy-blue-900 border border-gold-500 rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
        <p className="text-lg mb-4">
          Amazing task management solution! It has significantly improved our team&apos;s collaboration and productivity.
        </p>
        <p className="text-sm italic">- John Doe, Project Manager</p>
      </div>

      <div className="bg-navy-blue-900 border border-gold-500 rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
        <p className="text-lg mb-4">
          The intuitive interface and powerful features make this the best task manager I&apos;ve ever used. Highly recommended!
        </p>
        <p className="text-sm italic">- Jane Smith, Developer</p>
      </div>
      <div className="bg-navy-blue-900 border border-gold-500 rounded-lg p-6 transition-transform duration-300 transform hover:scale-105">
        <p className="text-lg mb-4">
          The intuitive interface and powerful features make this the best task manager I&apos;ve ever used. Highly recommended!
        </p>
        <p className="text-sm italic">- Jane Smith, Developer</p>
      </div>
    </div>
  </div>
  );
};


export default Testimonial;
