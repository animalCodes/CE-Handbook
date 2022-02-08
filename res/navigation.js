
// function for returning navbar markup
$('#navbar').html(function () {

  return `
  <a href="#body" id="top"><h4>To top ^</h4></a>
  <nav id="nav">
  <h2 style="text-align: center;">Site map</h2>
  <h3><a id="index" href="../index.html">Home</a></h3>
  <h3 class="nav-title">Movecraft</h3>
  <ul>
  <!-- //* movecraft controls -->
  <li><a id="movecraft-controls" href="../movecraft/controls.html">Signs / Controls</a>
  <ul id="movecraft-controls-ul" class="dropdown">
  <li><a href="#compass">Compass control</a></li>
  <li><a href="#gears">Gear control</a></li>
  <li><a href="#direct">Direct control</a></li>
  <li><a href="#pilot">Pilot signs</a></li>
  <li><a href="#helm">Helm sign</a></li>
  <li><a href="#cruise">Cruise signs</a></li>
  <li><a href="#release">Release sign</a></li>
  <li><a href="#secure">Pilot: sign</a></li>
  </ul>
  </li>
  <!-- //* movecraft craftypes -->
  <li><a id="movecraft-crafts" href="../movecraft/crafts.html">Craft types</a>
  <ul id="movecraft-crafts-ul" class="dropdown">
  <li><a href="#starfighter">Starfighter</a></li>
  <li><a href="#cargoshuttle">Cargoshuttle</a></li>
  <li><a href="#starship">Starship</a></li>
  <li><a href="#freighter">Freighter</a></li>
  <li><a href="#dreadnaught">Dreadnaught</a></li>
  <li><a href="#station">Station</a></li>
  <li><a href="#startitan">StarTitan</a></li>
  <li><a href="#airship">Airship</a></li>
  <li><a href="#plane">Plane</a></li>
  <li><a href="#tank">Tank</a></li>
  <li><a href="#train">Train</a></li>
  <li><a href="#landtitan">LandTitan</a></li>
  <li><a href="#ship">Ship</a></li>
  <li><a href="#skiff">Skiff</a></li>
  <li><a href="#submarine">Submarine</a></li>
  </ul>
  </li>
  <!-- //* movecraft blocks -->
  <li><a id="movecraft-blocks" href="../movecraft/blocks.html">Valid blocks</a>
  <ul id="movecraft-blocks-ul" class="dropdown">
  <li><a href="#starfighter">Starfighter</a></li>
  <li><a href="#cargoshuttle">Cargoshuttle</a></li>
  <li><a href="#starship">Starship</a></li>
  <li><a href="#freighter">Freighter</a></li>
  <li><a href="#dreadnaught">Dreadnaught</a></li>
  <li><a href="#station">Station</a></li>
  <li><a href="#startitan">StarTitan</a></li>
  <li><a href="#airship">Airship</a></li>
  <li><a href="#plane">Plane</a></li>
  <li><a href="#tank">Tank</a></li>
  <li><a href="#train">Train</a></li>
  <li><a href="#landtitan">LandTitan</a></li>
  <li><a href="#ship">Ship</a></li>
  <li><a href="#skiff">Skiff</a></li>
  <li><a href="#submarine">Submarine</a></li>
  </ul>
  </li> 
  </ul>
  <h3 class="nav-title">Planets</h3>
  <ul>
  <!-- //* planet info -->
  <strike>
  <li><a id="planets-info" href="../planets/info.html">Information</a></li>
  </strike>
  <!-- //* interplanetary travel -->
  <li><a id="planets-travel" href="../planets/travel.html">Interplanetary travel</a></li>
  </ul>
  </nav>
  <div style="display: flex;">
  <span><img src="../images/icons/author.png" style="margin: 16px;"></span><p style="color: var(--signatureColour)">Written by <br>animal</p>
  </div>
  `;
  /*
  <h3 class="nav-title">Resonant</h3>
  <ul>
  //* resonant basics
  <li><a id="resonant-basics" href="../resonant/basics.html">Basics</a></li>
  //* resonant management
  <li><a id="resonant-management" href="../resonant/management.html">Generation / Storage</a></li>
  //* resonant machinery
  <li><a id="resonant-machines" href="../resonant/machines.html">Machines</a></li>
  </ul>
  <h3 class="nav-title">Multiblock Structures</h3>
  <ul>
  //* multiblock machinery
  <li><a id="multiblock-machinery" href="../multiblock/machinery.html">Machinery</a></li>
  //* multiblock automation
  <li><a id="multiblock-automation" href="../multiblock/automation.html">Automation</a></li>
  //* multiblock weapons
  <li><a id="multiblock-weapons" href="../multiblock/weapons.html">Weapons</a></li>
  </ul>
  <h3 class="nav-title">Guides</h3>
  <ul>
  //* leaving earth guide
  <li><a id="guides-leaving-earth" href="../guides/leaving-earth.html">Getting off earth</a></li>
  //* moneymaking guide
  <li><a id="guides-moneymaking" href="../guides/moneymaking.html">Moneymaking</a></li>
  </ul>
*/
})

// disclaimer stuff
const $disclaimer = $('#disclaimer');

$disclaimer.html(
  `
  <h3>Please note that this site was designed on a desktop for desktops, and while I have tried to make it respond to smaller screen sizes it may render oddly on mobile devices, if elements render oddly I suggest switching to landscape mode, you have been warned! (tap to dismiss)
  </h3>
`
)

$disclaimer.on('click', () => {
  $disclaimer.hide()
})