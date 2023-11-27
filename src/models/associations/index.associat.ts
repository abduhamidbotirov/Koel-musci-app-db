import PasswordResets from "../PasswordResets/PasswordResets.model.js";
import Users from "../Users/Users.model.js";
import Albums from "../albums/albums.model.js";
import Artists from "../artists/artists.model.js";
import Interactions from "../interactions/interactions.model.js";
import PlaylistSong from "../playlist_song/playlist_song.model.js";
import Playlists from "../playlists/playlists.model.js";
import Settings from "../settings/settings.model.js";
import Songs from "../songs/songs.model.js";

Users.hasMany(Playlists, { foreignKey: 'user_id' })
Users.hasMany(Interactions, { foreignKey: 'user_id' })
Playlists.hasMany(PlaylistSong, { foreignKey: 'playlist_id' })
Artists.hasMany(Albums, { foreignKey: 'artist_id' })
Artists.hasMany(Songs, { foreignKey: 'artist_id' })
Albums.hasMany(Songs, { foreignKey: 'album_id' })
Songs.hasMany(PlaylistSong, { foreignKey: 'song_id' })

!(async () => {
    await PasswordResets.sync({ alter: true });
    await Settings.sync({ alter: true });
    await Users.sync({ alter: true });
    await Playlists.sync({ alter: true });
    await PlaylistSong.sync({ alter: true });
    await Interactions.sync({ alter: true });
    await Artists.sync({ alter: true });
    await Albums.sync({ alter: true });
    await Songs.sync({ alter: true });
})() 