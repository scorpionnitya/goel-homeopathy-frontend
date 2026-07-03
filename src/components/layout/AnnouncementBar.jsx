import Marquee from "react-fast-marquee";

function AnnouncementBar() {
  return (
    <div className="bg-green-600 py-2 overflow-hidden">
      <Marquee speed={45} gradient={false} pauseOnHover>

        <div className="mx-6 bg-white rounded-full px-8 py-2 font-semibold text-green-700 shadow-md whitespace-nowrap">
          📢 MOHAN HOMEO STORE IS NOW ONLINE • 💚 50+ YEARS OF TRUST • 🚚 FAST DELIVERY • 📍 DELIVERING ACROSS MEERUT
        </div>

      </Marquee>
    </div>
  );
}

export default AnnouncementBar;