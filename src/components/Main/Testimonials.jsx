import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Billy",
      quote: "This app changed my life! Discipline forever!",
      avatar: "https://avatars.mds.yandex.net/i?id=05b5f589413f956ed23cc6800bc7ffef594d8526-8973599-images-thumbs&n=13",
    },
    {
      name: "Ryan Gosling",
      quote: "The best motivation I’ve ever had. Thank you Van!",
      avatar: "https://media2.popsugar-assets.com/files/thumbor/GaCkgPXZ7EIXLc-J-XAG7BZDnO4=/fit-in/728xorig/2016/05/12/714/n/1922398/35a58aeb_edit_img_image_14344989_1463069195_RySQ/i/Ryan-Gosling-Talking-About-His-Daughters-GMA-2016.jpg",
    },
    {
      name: "Tokayev334",
      quote: "I wake up, I lift, I train, I repeat!",
      avatar: "https://avatars.mds.yandex.net/i?id=77f3a03e84b768bacd0563d4754b8948c0022aca-4987739-images-thumbs&n=13",
    },
    {
      name: "Brandon",
      quote: "Gachi fitness is the only way to true gains!",
      avatar: "https://steamuserimages-a.akamaihd.net/ugc/1836919545464687140/31F118CA36DACBB3FB3D5BF644B7DFB1C1B51041/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6">
      <h2 className="text-3xl font-bold text-center text-rainbow mb-6">
        ⭐ Testimonials ⭐
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full border-4 border-rainbow mb-4"
              onError={(e) => (e.target.src = "/avatars/default.png")} 
            />
            <p className="text-lg text-white">"{t.quote}"</p>
            <h3 className="mt-2 text-yellow-400 font-bold">- {t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
