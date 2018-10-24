# HytechMusic

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* * * * 

## Individual Activity: Part 1
* Alter the HTML template for the app.component (app.component.ts).
* Notice that there is an array of albums, you'll need to use *ngFor to iterate through each album.
* Make it look as close to the .png file within the repository.
* For the tracklist, take note of the fact that there's an array of song strings (so the tracks). You'll need to use the *ngFor directive to iterate through the tracks.
* You should include the BUY button at the bottom left side of the album view.
    * the BUY button should be disabled if the user owns the album (use the "[disable]" directive on the button to do this)

* * * *

## Individual Activity: Part 2
* Add a an @input called "nowPlaying" that's a string to the album-header
* Add a reference to this new "nowPlaying" input in the album-header's template so that it will be displayed
    * This means that you'll use this syntax: `{{}}`
    * You'll do this inside the album-header.component.html file
* Add a variable called "currentPlayingSong" that's a string to app.components.ts
* Using two way binding, pass the "currentPlayingSong" from the app.components.ts into the "nowPlaying" input in album header.
    * As a reminder, this is two way binding syntax: `[()]`
    * You'll be adding this logic to the app.component.html file (you should have the `<app-album-header>` tags at the top)