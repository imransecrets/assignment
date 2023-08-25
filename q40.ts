// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object 
//  containing these two pieces of information. Use the function to make three dictionaries representing 
//  different albums. Print each return value to show that Objects are storing the album information correctly.
//   Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//   If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//    Make at least one new function call that includes the number of tracks on an album.


function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album: Record<string, any> = {
        artis: artist,
        titl: title
    };

    if (tracks !== undefined) {
        album.trac = tracks;
    }

    return album;
    // console.log(artist, title, tracks )
}

// Make three dictionaries representing different albums
const album1 = make_album("Taylor Swift", "Fearless");
const album2 = make_album("Ed Sheeran", "Divide", 16);
const album3 = make_album("Adele", "21", 12);

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);