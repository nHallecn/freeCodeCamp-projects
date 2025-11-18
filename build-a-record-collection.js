const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    }
    else if (prop === "tracks") {
        if (!records[id].hasOwnProperty('tracks')) {
            records[id]['tracks'] = [];
        }
        records[id]['tracks'].push(value);
    }
    else if (prop !== "tracks") {
        records[id][prop] = value;
    }

    return records;
}

console.log("Initial Collection:");
console.log(JSON.stringify(recordCollection, null, 2));

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 2548, 'year', '1986');
updateRecords(recordCollection, 5439, 'tracks', 'Take A Chance On Me');
updateRecords(recordCollection, 2548, 'tracks', 'Wanted Dead or Alive');
updateRecords(recordCollection, 1245, 'tracks', '');
updateRecords(recordCollection, 2468, 'artist', '');

console.log("\nFinal Updated Collection:");
console.log(JSON.stringify(recordCollection, null, 2));
