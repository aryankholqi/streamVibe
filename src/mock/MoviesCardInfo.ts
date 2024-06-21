import hitMan from "../assets/images/Hit-man.jpeg";
import theFallGuy from "../assets/images/the-fall-guy.jpeg";
import boyKillsWorld from "../assets/images/boy-kills-world.jpg";
import civilWar from "../assets/images/civil-war.jpeg";
import dunePart2 from "../assets/images/dune-part2.jpeg";
import Ghostbusters from "../assets/images/ghostbusters-Frozen-Empire.jpg";
import godzillaMinesOne from "../assets/images/godzilla-minus-one.jpeg";
import badBoysRideOrDie from "../assets/images/badBoys-rideOrDie.jpeg";
import oblivion from "../assets/images/oblivion.jpg";
import spiderMan from "../assets/images/spider-man.jpeg";
import mazeRunner from "../assets/images/the-maze-runner.jpg";
import theHungerGames from "../assets/images/the-hunger-games.jpg";

export default function MoviesCardInfo() {
  return [
    {
      category: "New Release",
      movies: [
        {
          title: "Hit Man",
          img: hitMan,
          date: "24 May 2024",
          rate: "7",
          review: "46K",
          dec: "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
          geners: [{ gen: "Comedy" }, { gen: "Crime" }, { gen: "Romance" }],
          color: "from-yellow-600",
          mainColor: "bg-red-45/50",
        },
        {
          title: "The Fall Guy",
          img: theFallGuy,
          date: "12 March 2024",
          rate: "7",
          review: "104K",
          dec: "A down-and-out stuntman must find the missing star of his ex-girlfriend's blockbuster film.",
          geners: [{ gen: "Action" }, { gen: "Comedy" }, { gen: "Drama" }],
          color: "from-blue-800",
          mainColor: "bg-green-900/60",
        },
        {
          title: "Boy Kills World",
          img: boyKillsWorld,
          date: "26 April 2024",
          rate: "6.4",
          review: "16K",
          dec: "A fever dream action film that follows Boy, a deaf person with a vibrant imagination. When his family is murdered, he is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
          geners: [{ gen: "Action" }, { gen: "Crime" }, { gen: "Thriller" }],
          color: "from-red-45/50",
          mainColor: "bg-black-6/50",
        },
        {
          title: "Civil War",
          img: civilWar,
          date: "12 April 2024",
          rate: "7.2",
          review: "115K",
          dec: "A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
          geners: [
            { gen: "Action" },
            { gen: "Adventure" },
            { gen: "Thriller" },
          ],
          color: "from-gray-600",
          mainColor: "bg-green-900/90",
        },
      ],
    },
    {
      category: "Trending Now",
      movies: [
        {
          title: "Dune: Part Two",
          img: dunePart2,
          date: "16 April 2024",
          rate: "8.6",
          review: "453K",
          dec: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Drama" }],
          color: "from-black-6",
          mainColor: "bg-orange-600",
        },

        {
          title: "Ghostbusters: Frozen Empire",
          img: Ghostbusters,
          date: "29 March 2024",
          rate: "6.1",
          review: "51K",
          dec: "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second ice age.",
          geners: [{ gen: "Adventure" }, { gen: "Comedy" }, { gen: "Fantasy" }],
          color: "from-blue-900",
          mainColor: "bg-orange-100/80",
        },
        {
          title: "Godzilla Minus One",
          img: godzillaMinesOne,
          date: "1 December 2023",
          rate: "7.8",
          review: "121K",
          dec: "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Drama" }],
          color: "from-green-700/50",
          mainColor: "bg-slate-900",
        },
        {
          title: "Bad Boys: Ride or Die",
          img: badBoysRideOrDie,
          date: "22 May 2024",
          rate: "7",
          review: "21K",
          dec: "This Summer, the world's favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miami's finest are now on the run.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Comedy" }],
          color: "from-black-6",
          mainColor: "bg-gray-400",
        },
      ],
    },
    {
      category: "Most Populars",
      movies: [
        {
          title: "Oblivion",
          img: oblivion,
          date: "12 April 2013",
          rate: "7",
          review: "555k",
          dec: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
          color: "from-blue-900",
          mainColor: "bg-red-45/50",
        },
        {
          title: "Spider-Man: Across the Spider-Verse",
          img: spiderMan,
          date: "30 May 2023",
          rate: "8.6",
          review: "379k",
          dec: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
          geners: [
            { gen: "Animation" },
            { gen: "Action" },
            { gen: "Adventure" },
          ],
          color: "from-red-45/80",
          mainColor: "bg-green-900/60",
        },
        {
          title: "The Maze Runner",
          img: mazeRunner,
          date: "19 September 2014",
          rate: "6.8",
          review: "514k",
          dec: "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
          geners: [{ gen: "Action" }, { gen: "Mystery" }, { gen: "Sci-Fi" }],
          color: "from-green-900",
          mainColor: "bg-blue-900/50",
        },
        {
          title: "The Hunger Games",
          img: theHungerGames,
          date: "12 April 2013",
          rate: "7.2",
          review: "1M",
          dec: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
          color: "from-red-60/40",
          mainColor: "bg-green-900/60",
        },
      ],
    },
    {
      category: "Top 250 movies",
      movies: [
        {
          title: "Oblivion",
          img: oblivion,
          date: "12 April 2013",
          rate: "7",
          review: "555k",
          dec: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
          color: "from-blue-900",
          mainColor: "bg-red-45/50",
        },
        {
          title: "Spider-Man: Across the Spider-Verse",
          img: spiderMan,
          date: "30 May 2023",
          rate: "8.6",
          review: "379k",
          dec: "Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
          geners: [
            { gen: "Animation" },
            { gen: "Action" },
            { gen: "Adventure" },
          ],
          color: "from-red-45/80",
          mainColor: "bg-green-900/60",
        },
        {
          title: "The Maze Runner",
          img: mazeRunner,
          date: "19 September 2014",
          rate: "6.8",
          review: "514k",
          dec: "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow runners for a shot at escape.",
          geners: [{ gen: "Action" }, { gen: "Mystery" }, { gen: "Sci-Fi" }],
          color: "from-green-900",
          mainColor: "bg-blue-900/50",
        },
        {
          title: "The Hunger Games",
          img: theHungerGames,
          date: "12 April 2013",
          rate: "7.2",
          review: "1M",
          dec: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
          geners: [{ gen: "Action" }, { gen: "Adventure" }, { gen: "Sci-Fi" }],
          color: "from-red-60/40",
          mainColor: "bg-green-900/60",
        },
      ],
    },
  ];
}
