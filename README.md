# assignment-5-barangezenoglu1
assignment-5-barangezenoglu1 created by GitHub Classroom

## What is this project ?
It's a basic tracks and album listing app which developed by spotify web api. Checkout spotify for developers in https://developer.spotify.com/. Login and register controlled by Firebase.

## What can be done with this app ? 

-Register

-Login

-Logout

-List playlists, tracks and albums

-Search tracks and albums by name

-Like tracks

-Edit current user profile

-Change theme


## Getting Started
First, download packages and dependencies with :

### `npm install`

After that start the Metro :

### `npx react-native start`

Last, start your application:

### `npx react-native run-android`

## Packages

- @react-native-async-storage/async-storage
- @react-navigation/bottom-tabs
- @react-navigation/native
- @react-navigation/native-stack
- @reduxjs/toolkit
- react-native-vector-icons
- react-redux
- react-native-firebase/auth
## Folder Structure
    ├── android                 # Android bundle
    ├── ios                     # IOS bundle
    ├── node_modules            # Node module Files
    ├── src                     # Source files 
    │   ├── api                 # spotify api
    │   ├── assets              # Project asset files
    │   ├── components          # Components
    │   └── data                # Json server
    │   ├── features            # Redux slices
    │   └── hooks               # Custom hooks
    │   └── screens             # Screens files
    │   └── screenshots         # Screenshots
    │   └── store               # Redux reducers
    
## Spotify Api
```
export const getSpotifyToken = async () => {
  const res = await fetch(`${apiPrefix}/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64credentials} `,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const json = await res.json();
  return  json
 
};
```
The code above creates a bearer token for make requests to spotify API. 
    
## Screens 

- Login Screens

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Login.png?raw=true" alt="Login" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Register.png?raw=true" alt="Register" width="200" height="400" style="padding-right:10px" />
</p>

If you registered or logged you will redirect to home page when app open until you logout. Register and login is managing by Firebase auth.

- Home Screen

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Playlists.png?raw=true" alt="Playlist" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/PlaylistDark.png?raw=true" alt="Playlist Dark" width="200" height="400" style="padding-right:10px" />
</p>

You can see the playlist on home screen. The playlists are my own playlist in spotify. https://open.spotify.com/user/5zehz3orf3kps30zxcrxhgiqj

- Search Screen

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Search.png?raw=true" alt="EmptySearch" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Search2.png?raw=true" alt="InputSearch" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Search3.png?raw=true" alt="SearchDark" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Search2Dark.jpeg?raw=true" alt="InputSearchDark" width="200" height="400" style="padding-right:10px" />
</p>

You can use bottom navigation for open search screen. In this screen you can list tracks with input and type. I didn't find query for filtering by music types in spotify API, so thats why I used track and album for filtering.

- Playlist Detail

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/PlaylistDetail.png?raw=true" alt="Detail" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/PlaylistDetailDark.png?raw=true" alt="DetailDark" width="200" height="400" style="padding-right:10px" />
</p>

You can open playlist detail screen with click or press to a playlist. 

- Profile

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/Profile.png?raw=true" alt="Profile" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/ProfileDark.png?raw=true" alt="ProfileDark" width="200" height="400" style="padding-right:10px" />
</p>

In profile screen you can change theme with switch, edit user info and logout and go to liked tracks. If you edit user, the global user data , async storage data and firebase will update. After the logout you will redirect to login page.

- Liked Tracks

<p align="middle">
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/LikedTracks.png?raw=true" alt="Liked" width="200" height="400" style="padding-right:10px" />
<img src="https://github.com/patika-218-akbank-reactnative-bootcamp/assignment-5-barangezenoglu1/blob/develop/src/ScreenShots/LikedDark.png?raw=true" alt="LikedDark" width="200" height="400" style="padding-right:10px" />
</p>

In liked tracks screen you can find liked tracks.
