

const data = [
      {
        category: "Movie",
        genre: "Action",
        img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        title: "Avengers: Endgame",
        rating: 8.4,
        releaseDate: "2019-04-26",
        description: "The Avengers embark on a final mission to undo Thanos' destruction and restore peace to the universe.",
        cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
      },
      {
        category: "Series",
        genre: "Romance",
        img: "https://resizing.flixster.com/Zdvk-xZ3cN7uIJGvqPcuAijAb1U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOWQyNzdiMGEtZmZhYi00YmZjLTkxZDktNDFlMjFhNjZkZmYwLmpwZw==",
        title: "Bridgerton",
        rating: 7.3,
        releaseDate: "2020-12-25",
        description: "In 19th-century London, a group of high-society debutantes navigate the complexities of love, friendship, and family.",
        cast: ["Phoebe Dynevor", "Regé-Jean Page", "Jonathan Bailey"]
      },
      {
        category: "Anime",
        genre: "Comedy",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/OnePunchMan_manga_cover.png/220px-OnePunchMan_manga_cover.png",
        title: "One Punch Man",
        rating: 8.8,
        releaseDate: "2019-04-09",
        description: "Saitama, a hero who can defeat any opponent with a single punch, seeks meaning in a world full of powerful monsters and villains.",
        cast: ["Makoto Furukawa", "Kaito Ishikawa", "Yūki Kaji"]
      },
      {
        category: "Movie",
        genre: "Horror",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        title: "Get Out",
        rating: 7.7,
        releaseDate: "2017-02-24",
        description: "A young African-American man visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"]
      },
      {
        category: "Series",
        genre: "Thriller",
        img: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==",
        title: "Stranger Things",
        rating: 8.7,
        releaseDate: "2016-07-15",
        description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.",
        cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"]
      },
      {
        category: "Anime",
        genre: "Action",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg/220px-Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
        title: "Demon Slayer",
        rating: 8.7,
        releaseDate: "2019-04-06",
        description: "A young boy becomes a demon slayer after his family is slaughtered by demons, and his younger sister is turned into one.",
        cast: ["Natsuki Hanae", "Akari Kitō", "Hiro Shimono"]
      },
      {
        category: "Movie",
        genre: "Comedy",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Knives_Out_poster.jpeg/220px-Knives_Out_poster.jpeg",
        title: "Knives Out",
        rating: 7.9,
        releaseDate: "2019-11-27",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"]
      },
      {
        category: "Series",
        genre: "Korean",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Crash_Landing_on_You_main_poster.jpg/220px-Crash_Landing_on_You_main_poster.jpg",
        title: "Crash Landing on You",
        rating: 8.8,
        releaseDate: "2019-12-14",
        description: "A wealthy South Korean heiress lands in North Korea after a paragliding accident and meets a North Korean army officer, who decides to help her hide.",
        cast: ["Hyun Bin", "Son Ye-jin", "Seo Ji-hye"]
      },
      {
        category: "Anime",
        genre: "Romance",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
        title: "Your Name",
        rating: 8.4,
        releaseDate: "2016-08-26",
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        cast: ["Ryûnosuke Kamiki", "Mone Kamishiraishi", "Ryô Narita"]
      },
    {
        category: "Movie",
        genre: "Horror",
        img: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
        title: "A Quiet Place",
        rating: 7.5,
        releaseDate: "2018-04-06",
        description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures that hunt by sound.",
        cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"]
      },
      {
        category: "Series",
        genre: "Thriller",
        img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14413981_b_v8_ab.jpg",
        title: "Mindhunter",
        rating: 8.6,
        releaseDate: "2017-10-13",
        description: "In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
        cast: ["Jonathan Groff", "Holt McCallany", "Anna Torv"]
      },
      {
        category: "Anime",
        genre: "Action",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg",
        title: "Attack on Titan",
        rating: 8.9,
        releaseDate: "2013-04-06",
        description: "Humanity lives behind enormous walls to protect themselves from Titans, gigantic humanoid creatures. When the Titans breach the wall, humanity must fight for survival.",
        cast: ["Yūki Kaji", "Yui Ishikawa", "Marina Inoue"]
      },
      {
        category: "Anime",
        genre: "Romance",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Your_Lie_in_April_Manga_cover.png/220px-Your_Lie_in_April_Manga_cover.png",
        title: "Your Lie in April",
        rating: 8.6,
        releaseDate: "2014-10-10",
        description: "A piano prodigy who lost his ability to play after his mother's death meets a violinist girl who helps him return to music.",
        cast: ["Natsuki Hanae", "Risa Taneda", "Ayane Sakura"]
      },
      {
        category: "Series",
        genre: "Action",
        img: "https://resizing.flixster.com/qeGRjEC1edJQu8dLViQ1BXLeZos=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNzkzLndlYnA=",
        title: "Breaking Bad",
        rating: 9.5,
        releaseDate: "2008-01-20",
        description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to build a drug empire while dealing with a deteriorating personal life.",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"]
      },
      {
        category: "Anime",
        genre: "Thriller",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png/220px-Fullmetal_Alchemist_Brotherhood_key_visual.png",
        title: "Fullmetal Alchemist: Brotherhood",
        rating: 9.1,
        releaseDate: "2009-04-05",
        description: "Two brothers search for the Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
        cast: ["Romi Park", "Rie Kugimiya", "Megumi Toyoguchi"]
      },
      {
        category: "Series",
        genre: "Romance",
        img: "https://m.media-amazon.com/images/I/71f97nf-u9L._AC_UF1000,1000_QL80_.jpg",
        title: "The Crown",
        rating: 8.7,
        releaseDate: "2016-11-04",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        cast: ["Claire Foy", "Olivia Colman", "Matt Smith"]
      },
      {
        category: "Anime",
        genre: "Thriller",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Death_Note_Vol_1.jpg/220px-Death_Note_Vol_1.jpg",
        title: "Death Note",
        rating: 9.0,
        releaseDate: "2006-10-04",
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the person's name while picturing their face.",
        cast: ["Mamoru Miyano", "Kappei Yamaguchi", "Shidou Nakamura"]
      },
      {
        category: "Series",
        genre: "Korean",
        img: "https://miro.medium.com/v2/resize:fit:1000/0*zkanXvdf59YPCsx5.jpg",
        title: "Itaewon Class",
        rating: 8.7,
        releaseDate: "2020-01-31",
        description: "A determined entrepreneur starts a restaurant business in Itaewon, Seoul, but faces many hardships and challenges along the way.",
        cast: ["Park Seo-joon", "Kim Da-mi", "Yoo Jae-myung"]
      },
      {
        category: "Series",
        genre: "Korean",
        img: "https://m.media-amazon.com/images/M/MV5BNDYwODdiOTItZTExZC00ZDZjLTkyODMtMWYxODVlMjQ0YjQxXkEyXkFqcGdeQXVyNjExNTE4MzU@._V1_FMjpg_UX1000_.jpg",
        title: "Reply 1988",
        rating: 8.8,
        releaseDate: "2015-11-06",
        description: "Follows the lives of five families living on the same street in a neighborhood called Ssangmun-dong in Seoul during the late 1980s.",
        cast: ["Hyeri", "Park Bo-gum", "Go Kyung-pyo"]
      },
      {
        category: "Series",
        genre: "Korean",
        img: "https://feministasiandadcom.files.wordpress.com/2019/09/poster-hotel-del-luna.jpg?w=725",
        title: "Hotel Del Luna",
        rating: 8.7,
        releaseDate: "2019-07-13",
        description: "A hotel with a hidden secret serves as a temporary residence for ghosts who haven't yet passed on to the afterlife.",
        cast: ["IU", "Yeo Jin-goo", "Lee Do-hyun"]
      },
    
      {
        category: "Movie",
        genre: "Action",
        img: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        title: "The Dark Knight",
        rating: 9.0,
        releaseDate: "2008-07-18",
        description: "Batman faces the Joker, a criminal mastermind with a dark sense of humor, who seeks to create chaos and undermine Gotham City's moral code.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
      },
      {
        category: "Movie",
        genre: "Action",
        img: "https://m.media-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69.jpg",
        title: "John Wick",
        rating: 7.4,
        releaseDate: "2014-10-24",
        description: "A retired hitman seeks vengeance for the killing of his dog, a gift from his deceased wife, unleashing a relentless and stylish action spree.",
        cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"]
      },    
]

export default data;