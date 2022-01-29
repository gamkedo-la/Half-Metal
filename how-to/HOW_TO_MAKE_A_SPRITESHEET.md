# HOW TO MAKE A SPRITE SHEET

A sprite sheet is a useful tool for laying out all the animations for a game character/object. It's essentially just one big image that contains a set of animation frames.

To make use of a sprite sheet in _Half-Metal_, you'll first have to make the indiviual sprites, pack them together, and then load it into the game and the corresponding Game Object.

## Why Sprite Sheets?

Sprite sheets are great because they can reduce the time to load your games images. Rather than loading each frame individually, they can be loaded in one batch.

They also function as a convenient reference source, allowing us to see all the frames of animation at once and spot inconsistencies (a nice little bonus).

## How Are Sprite Sheets Used?

Sprite sheets are used in code by assigning coordinates (_x and y values_) and dimensions (_height and width values_) to each frame.

When rendering a frame, you can instruct the code to look at smaller slices of the sheet based on those coordinates/dimensions.

For example, if you had a sprite sheet with lots of frames that were 16x16 in size and the first frame was located at the top-left corner, then the frame coordinates/dimensions for frame #1 would look something like this:

    {x: 0, y: 0, w: 16, h: 16}

The exact way you will render that frame will depend on the `draw()` code you're using, but in _Half-Metal_, that job will normally be handled by the `SpriteSheetAnimatorClass`.

## Making a Sprite Sheet

To build your own sprite sheets, I recommend following this guide found here: https://www.codeandweb.com/texturepacker/tutorials/how-to-create-a-sprite-sheet

For creating the actual pixel art, I normally use [aseprite](https://www.aseprite.org/), but you're welcome to use anything else that you like.

## Packing Sprite Sheets

Packing the sprites involves placing them all in the same map together and getting the coordinates/dimensions for each frame.

To pack sprites, I like to use [TexturePacker](https://www.codeandweb.com/texturepacker), but there's other equivalent software out there that can get the job done.

The first guide I linked to in this document should also contain instructions on packing/exporting the sheet. But once you have that done, you should have a single sprite sheet and a set of coordinates/dimensions.

The actual numbers will vary but they will be important in telling the code where to find each frame on your sheet.

## Using Sprite Sheets in Code

Provided you have added in your sheet as an image (`how-to/HOW_TO_LOAD_IMAGES.md`), simply add your sheet to a Game Object's `image` property (e.g., `this.image = mySheet`).

Finally, check out the guide in `how-to/HOW_TO_ANIMATE.md` to see more information on rendering the frames of your sheet with the `SpriteSheetAnimatorClass`.

## Where to Put Your Frame Data

We've recently added a file for holding the data of each frame in our spritesheets (`js/FrameData.js`). This file contains a global array called FRAME_DATA in which you'll place the object that represents your sprite animations.

Each entry in the FRAME_DATA array is an object with an identifier for one of our Game Objects. The example below features the frame data for the LEAPER enemy:

    FRAME_DATA = {
        [LEAPER]: {
            "walk-right": [
                { x: 0, y: 0, w: 16, h: 16 },
                { x: 16, y: 0, w: 16, h: 16 },
            ],
            "walk-left": [
                { x: 16 * 2, y: 0, w: 16, h: 16 },
                { x: 16 * 3, y: 0, w: 16, h: 16 },
            ],
            "walk-down": [
                { x: 16 * 4, y: 0, w: 16, h: 16 },
                { x: 16 * 5, y: 0, w: 16, h: 16 },
            ],
            "walk-up": [
                { x: 16 * 6, y: 0, w: 16, h: 16 },
                { x: 16 * 7, y: 0, w: 16, h: 16 },
            ],
            "leap-right": [{ x: 0, y: 32, w: 16, h: 16 }],
            "leap-left": [{ x: 16, y: 32, w: 16, h: 16 }],
            "leap-down": [{ x: 16 * 2, y: 32, w: 16, h: 16 }],
            "leap-up": [{ x: 16 * 3, y: 32, w: 16, h: 16 }],
        },
    }

You can find the list of identifiers to use in our `general/Constants.js` file.
