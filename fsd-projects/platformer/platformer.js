$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(100, 650, 40, 10, "blue")
   createPlatform(200, 550, 50, 10, "green")
   createPlatform(300, 450, 40, 10, "red")
   createPlatform(400, 350, 40, 10, "orange")
   createPlatform(500, 350, 40, 10, "brown")
   
  
   // TODO 3 - Create Collectables
   createCollectable("steve", 200, 170, 0.1, 1)
   createCollectable("steve", 100, 170, 0.1, 1)
   createCollectable("steve", 300, 170, 0.1, 1)
    
    // TODO 4 - Create Cannons
   createCannon("top", 200, 2000)
   createCannon("right", 200, 2000)
   createCannon("left", 200, 2000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
