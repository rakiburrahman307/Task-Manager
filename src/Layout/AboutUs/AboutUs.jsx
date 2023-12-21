
const AboutUs = () => (
  <div className="bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8">About Us</h2>

      <p className="text-lg mb-4">
        Welcome to SCC Technovision Inc., where innovation meets productivity. We are a dedicated team passionate about creating tools that empower individuals and teams to achieve their goals efficiently.
      </p>

      <p className="text-lg mb-4">
        Our mission is to provide user-friendly and powerful solutions that streamline task management, enhance collaboration, and elevate productivity. We believe in simplicity, effectiveness, and continuous improvement.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Our Team</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-2">John Doe</h4>
          <p className="text-sm text-gray-600">Co-founder & CEO</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-2">Jane Smith</h4>
          <p className="text-sm text-gray-600">Co-founder & CTO</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-2">Alice Johnson</h4>
          <p className="text-sm text-gray-600">Lead Designer</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
