use music

db.createCollection("songs")
db.createCollection("artists")
db.createCollection("popular_songs")

db.songs.insertMany([
    {
        title: "As It Was",
        artists: ["Harry Styles"],
        album: "Harry's House",
        duration: "2:54"
    },
    {
        title: "Heat Waves",
        artists: ["Glass Animals"],
        album: "Dreamland",
        duration: "3:44"
    },
    {
        title: "Stay",
        artists: ["The Kid Laroi and Justin Bieber"],
        album: "Stay",
        duration: "2:04"
    },
    {
        title: "About Damn Time",
        artists: ["Lizzo"],
        album: "Special",
        duration: "3:32"
    },
    {
        title: "Enemy",
        artists: ["Imagine Dragons and JID"],
        album: "Mercury - Act 1",
        duration: "3:03"
    },
    {
        title: "Levitating",
        artists: ["Dua Lipa"],
        album: "Future Nostalgia",
        duration: "3:32"
    },
    {
        title: "Montero (Call Me by Your Name)",
        artists: ["Lil Nas X"],
        album: "Montero",
        duration: "2:13"
    },
    {
        title: "We Don't Talk About Bruno",
        artists: ["Encanto Cast"],
        album: "Encanto",
        duration: "3:07"
    },
    {
        title: "Bad Habits",
        artists: ["Ed Sheeran"],
        album: "= (Equals)",
        duration: "3:52"
    },
    {
        title: "abcdefu",
        artists: ["Gabe Adams-Spalding"],
        album: "abcdefu",
        duration: "3:22"
    },
])

db.artists.insertMany([
    {
        name: "Harry Styles",
        dateOfBirth: "1994-02-01",
        genres: ["Pop", "Rock"]
    },      
    {
        name: "Glass Animals",
        dateOfBirth: "1987-03-10",
        genres: ["Indie rock", "Electronic"]
    },      
    {
        name: "The Kid Laroi",
        dateOfBirth: "2003-07-17",
        genres: ["Pop", "R&B"]
    },     
    {
        name: "Justin Bieber",
        dateOfBirth: "1994-03-01",
        genres: ["Pop", "R&B"]
    },  
    {
        name: "Lizzo",
        dateOfBirth: "1988-04-27",
        genres: ["Pop", "R&B", "Hip hop"]
    },  
    {
        name: "Imagine Dragons",
        dateOfBirth: "1998-08-01",
        genres: ["Pop rock", "Alternative rock"]
    },  
    {
        name: "JID",
        dateOfBirth: "1995-03-31",
        genres: ["Hip hop", "Alternative hip hop"]
    },  
    {
        name: "Dua Lipa",
        dateOfBirth: "1995-08-22",
        genres: ["Pop", "Dance-pop", "Electropop"]
    },  
    {
        name: "Lil Nas X",
        dateOfBirth: "1999-04-09",
        genres: ["Pop", "Hip hop", "R&B"]
    },  
    {
        name: "Ed Sheeran",
        dateOfBirth: "1991-02-17",
        genres: ["Pop", "Folk"]
    }  
])

db.popular_songs.insertMany([
    {
        title: "As It Was",
        plays: 10000000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Heat Waves",
        plays: 5000000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Stay",
        plays: 3000000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "About Damn Time",
        plays: 2000000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Enemy",
        plays: 1000000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Levitating",
        plays: 500000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Montero (Call Me by Your Name)",
        plays: 300000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "We Don't Talk About Bruno",
        plays: 200000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "Bad Habits",
        plays: 100000,
        period: "2023-01-01 to 2023-03-31"
    },      
    {
        title: "abcdefu",
        plays: 50000,
        period: "2023-01-01 to 2023-03-31"
    },
])