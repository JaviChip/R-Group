export default function ProfileCard({ profileData }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden border-4 border-blue-300">
            <img
              src={profileData.profilePic}
              alt={`${profileData.firstName} ${profileData.lastName}`}
              className="object-cover"
            />
          </div>
          <h1 className="mt-4 text-xl font-bold text-yellow-500">
            {profileData.firstName} {profileData.lastName}
          </h1>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  // Simulate fetching data from a database
  const profileData = {
    firstName: "Jane",
    lastName: "Doe",
    profilePic: "/default-profile.jpg",
  };

  return {
    props: { profileData },
  };
}
