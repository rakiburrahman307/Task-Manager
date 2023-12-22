import useAuth from "../../../Hook/useAuth";

const AudienceSection = () => {
    const {darkMode}= useAuth();
    return (
        <div className={` ${darkMode ? 'bg-gray-800' : 'bg-[#05294e]'} text-gray-800 p-8`}>
    <h2 className="text-4xl text-[#FFD700] text-center text- font-semibold mb-6">Who Can Benefit from Our Website?</h2>

    <div className="group audience-card transform hover:scale-105 transition-transform duration-300 bg-white border border-gray-300 rounded p-6 mb-4 shadow-md">
      <h3 className="text-gold-600 text-xl font-semibold mb-2">Developers</h3>
      <p>Streamline your project management and stay organized with our developer-friendly task manager.</p>
    </div>

    <div className="group audience-card transform hover:scale-105 transition-transform duration-300 bg-white border border-gray-300 rounded p-6 mb-4 shadow-md">
      <h3 className="text-gold-600 text-xl font-semibold mb-2">Corporate Professionals</h3>
      <p>Enhance your productivity and manage tasks efficiently in a corporate environment.</p>
    </div>

    <div className="group audience-card transform hover:scale-105 transition-transform duration-300 bg-white border border-gray-300 rounded p-6 mb-4 shadow-md">
      <h3 className="text-gold-600 text-xl font-semibold mb-2">Bankers</h3>
      <p>Keep track of important tasks and deadlines with our secure and reliable task management system.</p>
    </div>
  </div>
    );
}

export default AudienceSection;
