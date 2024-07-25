import theLastOfUs from "../assets/images/the-last-of-us.jpeg";
import shogub from "../assets/images/shogun.jpeg";
import fallout from "../assets/images/fallout.jpeg";
import masterOfTheAir from "../assets/images/master-of-the-air.jpeg";
import strangerThings from "../assets/images/strangerThings.jpg";
import halo from "../assets/images/halo.jpeg";
import silo from "../assets/images/silo.jpeg";
import reacher from "../assets/images/reacher.jpeg";

export default function showsCardInfo() {
  return [
    {
      category: "New Release",
      movies: [
        {
          id: 1,
          title: "The Last of Us",
          img: theLastOfUs,
          date: 1673760769000,
          rate: 8.7,
          review: 550000,
          season: 1,
          des: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-black-6",
          mainColor: "bg-yellow-200",
        },
        {
          id: 2,
          title: "Shōgun",
          img: shogub,
          date: 1709011969000,
          rate: 8.7,
          review: 156000,
          season: 1,
          des: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          geners: ["Adventure", "Drama", "History"],
          color: "from-black-6",
          mainColor: "bg-teal-700",
        },
        {
          id: 3,
          title: "Fallout",
          img: fallout,
          date: 1712727169000,
          rate: 8.4,
          review: 231000,
          season: 1,
          des: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-cyan-950",
          mainColor: "bg-[#CBC2AF]",
        },
        {
          id: 4,
          title: "Masters of the Air",
          img: masterOfTheAir,
          date: 1706247169000,
          rate: 7.8,
          review: 51000,
          season: 1,
          des: "During World War II, five miles above the ground and behind enemy lines, ten men inside an aluminum bomber known as a Flying Fortress battle antiaircraft fire and unrelenting flocks of German fighters.",
          geners: ["Action", "Drama", "Thriller"],
          color: "from-black-6",
          mainColor: "bg-sky-200",
        },
      ],
    },
    {
      category: "Trending Now",
      movies: [
        {
          id: 5,
          title: "Stranger Things",
          img: strangerThings,
          date: 1468557169000,
          rate: 8.7,
          review: 1400000,
          season: 4,
          des: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
          geners: ["Drama", "Fantasy", "Horror"],
          color: "from-black-6",
          mainColor: "bg-red-45/30",
        },

        {
          id: 6,
          title: "Halo",
          img: halo,
          date: 1648096369000,
          rate: 7.3,
          review: 97000,
          season: 2,
          des: "With the galaxy on the brink of destruction, Master Chief John-117 leads his team of Spartans against the alien threat known as the Covenant.",
          geners: ["Action", "Adventure", "Sci-Fi"],
          color: "from-teal-950",
          mainColor: "bg-[#D5C5A3]",
        },
        {
          id: 7,
          title: "Reacher",
          img: reacher,
          date: 1643952769000,
          rate: 8,
          review: 220000,
          season: 2,
          des: "Itinerant former military policeman Jack Reacher solves crimes and metes out his own brand of street justice. Based on the novels by Lee Child.",
          geners: ["Action", "Crime", "Drama"],
          color: "from-black-6",
          mainColor: "bg-teal-950",
        },
        {
          id: 8,
          title: "Silo",
          img: silo,
          date: 1683264769000,
          rate: 8.1,
          review: 130000,
          season: 1,
          des: "Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.",
          geners: ["Drama", "Mystry", "Sci-Fi"],
          color: "from-orange-500/70",
          mainColor: "bg-black-6",
        },
      ],
    },
    {
      category: "Most Populars",
      movies: [
        {
          id: 9,
          title: "The Last of Us",
          img: theLastOfUs,
          date: 1673760769000,
          rate: 8.7,
          review: 550000,
          season: 1,
          des: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-black-6",
          mainColor: "bg-yellow-200",
        },
        {
          id: 10,
          title: "Shōgun",
          img: shogub,
          date: 1709011969000,
          rate: 8.7,
          review: 156000,
          season: 1,
          des: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          geners: ["Adventure", "Drama", "History"],
          color: "from-black-6",
          mainColor: "bg-teal-700",
        },
        {
          id: 11,
          title: "Fallout",
          img: fallout,
          date: 1712727169000,
          rate: 8.4,
          review: 231000,
          season: 1,
          des: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-cyan-950",
          mainColor: "bg-[#CBC2AF]",
        },
        {
          id: 12,
          title: "Masters of the Air",
          img: masterOfTheAir,
          date: 1706247169000,
          rate: 7.8,
          review: 51000,
          season: 1,
          des: "During World War II, five miles above the ground and behind enemy lines, ten men inside an aluminum bomber known as a Flying Fortress battle antiaircraft fire and unrelenting flocks of German fighters.",
          geners: ["Action", "Drama", "Thriller"],
          color: "from-black-6",
          mainColor: "bg-sky-200",
        },
      ],
    },
    {
      category: "Top 250 movies",
      movies: [
        {
          id: 13,
          title: "Stranger Things",
          img: strangerThings,
          date: 1468557169000,
          rate: 8.7,
          review: 1400000,
          season: 4,
          des: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
          geners: ["Drama", "Fantasy", "Horror"],
          color: "from-black-6",
          mainColor: "bg-red-45/30",
        },

        {
          id: 14,
          title: "Halo",
          img: halo,
          date: 1648096369000,
          rate: 7.3,
          review: 97000,
          season: 2,
          des: "With the galaxy on the brink of destruction, Master Chief John-117 leads his team of Spartans against the alien threat known as the Covenant.",
          geners: ["Action", "Adventure", "Sci-Fi"],
          color: "from-teal-950",
          mainColor: "bg-[#D5C5A3]",
        },
        {
          id: 15,
          title: "Reacher",
          img: reacher,
          date: 1643952769000,
          rate: 8,
          review: 220000,
          season: 2,
          des: "Itinerant former military policeman Jack Reacher solves crimes and metes out his own brand of street justice. Based on the novels by Lee Child.",
          geners: ["Action", "Crime", "Drama"],
          color: "from-black-6",
          mainColor: "bg-teal-950",
        },
        {
          id: 16,
          title: "Silo",
          img: silo,
          date: 1683264769000,
          rate: 8.1,
          review: 130000,
          season: 1,
          des: "Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.",
          geners: ["Drama", "Mystry", "Sci-Fi"],
          color: "from-orange-500/70",
          mainColor: "bg-black-6",
        },
      ],
    },
    {
      category: "Drama",
      movies: [
        {
          id: 17,
          title: "The Last of Us",
          img: theLastOfUs,
          date: 1673760769000,
          rate: 8.7,
          review: 550000,
          season: 1,
          des: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-black-6",
          mainColor: "bg-yellow-200",
        },
        {
          id: 18,
          title: "Shōgun",
          img: shogub,
          date: 1709011969000,
          rate: 8.7,
          review: 156000,
          season: 1,
          des: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          geners: ["Adventure", "Drama", "History"],
          color: "from-black-6",
          mainColor: "bg-teal-700",
        },
        {
          id: 19,
          title: "Fallout",
          img: fallout,
          date: 1712727169000,
          rate: 8.4,
          review: 231000,
          season: 1,
          des: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-cyan-950",
          mainColor: "bg-[#CBC2AF]",
        },
        {
          id: 20,
          title: "Masters of the Air",
          img: masterOfTheAir,
          date: 1706247169000,
          rate: 7.8,
          review: 51000,
          season: 1,
          des: "During World War II, five miles above the ground and behind enemy lines, ten men inside an aluminum bomber known as a Flying Fortress battle antiaircraft fire and unrelenting flocks of German fighters.",
          geners: ["Action", "Drama", "Thriller"],
          color: "from-black-6",
          mainColor: "bg-sky-200",
        },
      ],
    },
    {
      category: "Comedy",
      movies: [
        {
          id: 21,
          title: "The Last of Us",
          img: theLastOfUs,
          date: 1673760769000,
          rate: 8.7,
          review: 550000,
          season: 1,
          des: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-black-6",
          mainColor: "bg-yellow-200",
        },
        {
          id: 22,
          title: "Shōgun",
          img: shogub,
          date: 1709011969000,
          rate: 8.7,
          review: 156000,
          season: 1,
          des: "When a mysterious European ship is found marooned in a nearby fishing village, Lord Yoshii Toranaga discovers secrets that could tip the scales of power and devastate his enemies.",
          geners: ["Adventure", "Drama", "History"],
          color: "from-black-6",
          mainColor: "bg-teal-700",
        },
        {
          id: 23,
          title: "Fallout",
          img: fallout,
          date: 1712727169000,
          rate: 8.4,
          review: 231000,
          season: 1,
          des: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
          geners: ["Action", "Adventure", "Drama"],
          color: "from-cyan-950",
          mainColor: "bg-[#CBC2AF]",
        },
        {
          id: 24,
          title: "Masters of the Air",
          img: masterOfTheAir,
          date: 1706247169000,
          rate: 7.8,
          review: 51000,
          season: 1,
          des: "During World War II, five miles above the ground and behind enemy lines, ten men inside an aluminum bomber known as a Flying Fortress battle antiaircraft fire and unrelenting flocks of German fighters.",
          geners: ["Action", "Drama", "Thriller"],
          color: "from-black-6",
          mainColor: "bg-sky-200",
        },
      ],
    },
  ];
}
