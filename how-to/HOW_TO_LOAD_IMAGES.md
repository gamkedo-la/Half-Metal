# HOW TO LOAD IMAGES

### Step 1: Add your image to the `images` folder

Simply add your file in the folder and be sure to follow the established naming conventions (e.g., `my_image.png`).

Normally, we'll use `.png` files for our `images` folder.

### Step 2: Create an `img` element

Next, open `js/general/ImageLoading.js`. At the top of the file add a variable to store the `img` element for your image.

    var myImagePic = document.createElement("img");

### Step 3: Add your image to the `imageList`

In the same file, look for the `imageList` inside `loadImages()`. Add a new entry to this array, containing your `img` element and file name.

    { varName:  myImagePic, theFile:  "my_image.png" },

If your image is only used for a tile, use the worldType property instead:

    { worldType:  MY_TILE_TYPE, theFile:  "my_image.png" },

### Step 4: Test your image in a Game Object

Finally, add your image to a game object (for example, the EnemyClass of the PlayerClass)

    this.image = myImagePic;

If the Game Object's draw() method is already built, it should display your image just fine.

If not, you can quickly test it out with the following code:

    this.draw = function () {

        drawBitmapCenteredWithRotation(this.image,this.x, this.y, 0);

    };
