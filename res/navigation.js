
document.querySelector('navbar').innerHTML = `
  <a href="#top" id="up" aria-hidden="true"><h4>To top ^</h4></a>
  <nav>
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
  <!--
  <strike>
  <li><a id="planets-info" href="../planets/info.html">Information</a></li>
  </strike>
  -->
  <!-- //* interplanetary travel -->
  <li><a id="planets-travel" href="../planets/travel.html">Interplanetary travel</a>
  <ul id="planets-travel-ul" class="dropdown">
  <li><a href="#orbit">Getting to orbit</a></li>
  <li><a href="#radon">Crystalized radon</a></li>
  <li><a href="#tsigns">Teleport signs</a></li>
  <li><a href="#orbits">Orbit names</a></li>
  </ul>
  </li>
  </ul>
  <h3 class="nav-title">Resonant</h3>
  <ul>
  <!-- //* resonant basics -->
  <li><a id="resonant-basics" href="../resonant/basics.html">Basics</a>
  <ul id="resonant-basics-ul" class="dropdown">
  <li><a href="#cable">Cables</a></li>
  <li><a href="#corners">Corners</a></li>
  <li><a href="#splitters">Splitters</a></li>
  <li><a href="#pstation">Power Stations</a></li>
  </ul>
  </li>
  <!-- //* resonant management -->
  <li><a id="resonant-management" href="../resonant/management.html">Generation / Storage</a>
  <ul id="resonant-management-ul" class="dropdown">
  <li><a href="#battery">Battery</a></li>
  <li><a href="#capacitor">Capacitor</a></li>
  <li><a href="#combustion">Combustion generator</a></li>
  <li><a href="#solar">Solar panel</a></li>
  <li><a href="#wind">Wind turbine</a></li>
  <li><a href="#hydro">Hydropower generator</a></li>
  <li><a href="#geothermal">Geothermal generator</a></li>
  </ul>
  </li>
  <!-- //* resonant machinery -->
  <li><a id="resonant-machines" href="../resonant/machines.html">Machines</a>
  <ul id="resonant-machines-ul" class="dropdown">
  <li><a href="#vacuum">Vacuum</a></li>
  <li><a href="#radar">Radar</a></li>
  <li><a href="#coil">Tesla coil</a></li>
  <li><a href="#converter">Prismatic converter</a></li>
  <li><a href="#refinery">Materials refinery</a></li>
  <li><a href="#smeltery">Arc smeltery</a></li>
  <li><a href="#press">Machine press</a></li>
  </ul>
  </li>
  </ul>
  <h3 class="nav-title">Structures</h3>
  <ul>
  <!-- //* Gadgets -->
  <li><a id="structures-gadgets" href="../structures/gadgets.html">Gadgets</a>
  <ul id="structures-gadgets-ul" class="dropdown">
  <li><a href="#crafter">Clockwork crafter</a></li>
  <li><a href="#filter">Hopper filter</a></li>
  <li><a href="#chamber">Aero-Electrolysis chamber</a></li>
  <li><a href="#cryovault">CryoVault</a></li>
  <li><a href="#teleporter">Optical teleporter</a></li>
  <li><a href="#mbeam">Mining beam</a></li>
  <li><a href="#shield">Shields</a></li>
  </ul>
  </li>
  <!-- //* Weapons -->
  <strike>
  <li><a id="structures-weapons" href="../structures/weapons.html">Weapons</a></li>
  </strike>
  </ul>
  <h3 class="nav-title">Guides</h3>
  <ul>
  <!-- //* Getting started -->
  <li><a id="guides-starting" href="../guides/starting.html">Getting started</a></li>
  </ul>
  </nav>
  `;

// mobile-only disclaimer
const disclaimer = document.getElementById('disclaimer');

disclaimer.innerHTML = `
  <h3>Please note that this site was designed on a desktop for desktops, and while I have tried to make it respond to smaller screen sizes it may render oddly on mobile devices, if elements render oddly I suggest switching to landscape mode, you have been warned! (tap to dismiss)
  </h3>
`

disclaimer.addEventListener('click', () => {
  disclaimer.style.display = "none";
})