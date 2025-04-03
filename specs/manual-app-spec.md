I'd like to generate a project spec sheet with a clear todo list following the following content

# Daily journaling app

An offline first web app using service workers built with ReactJS, using PouchDB as the browser database.

## Data model

Each entry is composed of the following data:

- Primary mood: Good, neutral, bad
- Secondary mood: Each primary mood allows selecting one or more secondary moods, such as Excited, Energetic, Joyful, Proud, Happy.
- Description: A free-text multiline entry to add as much details as necessary.
- Behavioral activation: A one-liner entry to choose an action to do the next day.
- Behavioral activation timestamp: A date entry for the action on the next day.
- Behavioral activation done: A boolean indicating whether the user has done the previous' day's activation

## Pages

### Main Page

The main page should be a list of all existing entries, with a create new entry button at the top right.

Entries should be displayed in descending order, grouped by week.

A button to indicate "I did it!" on the behavioral activation, disabled if it is done.

### Add Page (Modal dialog)

The new entry button should open a modal dialog to create a new entry.

Choosing a primary mood should show a list of secondary moods.

### Edit Page (Modal Dialog)

Editing an entry from the main page should load the same modal as the Add Page, allowing editing of existing entires.