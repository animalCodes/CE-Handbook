
// function for returning navbar markup
$('#navbar').html(function () {

  return `
  <nav id="nav">
  <h2 style="text-align: center;">Site map</h2>
  <h3><a id="index" href="../index.html">Home</a></h3>
  <h3 class="nav-title">Movecraft</h3>
  <ul>
  <!-- //* movecraft controls -->
  <li><a id="movecraft-controls" href="movecraft/controls.html">Signs / Controls</a>
  <ul id="movecraft-controls-ul" class="dropdown">
  <li><a href="movecraft/controls.html#compass">Compass control</a></li>
  <li><a href="movecraft/controls.html#gears">Gear control</a></li>
  <li><a href="movecraft/controls.html#direct">Direct control</a></li>
  <li><a href="movecraft/controls.html#pilot">Pilot signs</a></li>
  <li><a href="movecraft/controls.html#helm">Helm sign</a></li>
  <li><a href="movecraft/controls.html#cruise">Cruise signs</a></li>
  <li><a href="movecraft/controls.html#release">Release sign</a></li>
  <li><a href="movecraft/controls.html#secure">Pilot: sign</a></li>
  </ul>
  </li>
  <!-- //* movecraft craftypes -->
  <li><a id="movecraft-crafts" href="movecraft/crafts.html">Craft types</a>
  <ul id="movecraft-crafts-ul" class="dropdown">
  <li><a href="movecraft/crafts.html#starfighter">Starfighter</a></li>
  <li><a href="movecraft/crafts.html#cargoshuttle">Cargoshuttle</a></li>
  <li><a href="movecraft/crafts.html#starship">Starship</a></li>
  <li><a href="movecraft/crafts.html#freighter">Freighter</a></li>
  <li><a href="movecraft/crafts.html#dreadnaught">Dreadnaught</a></li>
  <li><a href="movecraft/crafts.html#station">Station</a></li>
  <li><a href="movecraft/crafts.html#startitan">StarTitan</a></li>
  <li><a href="movecraft/crafts.html#airship">Airship</a></li>
  <li><a href="movecraft/crafts.html#plane">Plane</a></li>
  <li><a href="movecraft/crafts.html#tank">Tank</a></li>
  <li><a href="movecraft/crafts.html#train">Train</a></li>
  <li><a href="movecraft/crafts.html#landtitan">LandTitan</a></li>
  <li><a href="movecraft/crafts.html#ship">Ship</a></li>
  <li><a href="movecraft/crafts.html#skiff">Skiff</a></li>
  <li><a href="movecraft/crafts.html#submarine">Submarine</a></li>
  </ul>
  <!-- //* movecraft blocks -->
  <li><a id="movecraft-blocks" href="movecraft/blocks.html">Valid blocks</a></li>
  </ul>
  <h3 class="nav-title">Planets</h3>
  <ul>
  <!-- //* planet resources -->
  <li><a id="planets-resources" href="planets/resources.html">Resources</a></li>
  <!-- //* interplanetary travel -->
  <li><a id="planets-travel" href="planets/travel.html">Interplanetary travel</a></li>
  </ul>
  </nav>
  <div style="display: flex;">
  <span><img src="/images/icons/author.png" style="margin: 16px;"></span><p style="color: var(--signatureColour)">Written by <br>animal</p>
  </div>
  `;
  /*
  <h3 class="nav-title">Resonant</h3>
  <ul>
  <!-- //* resonant management -->
  <li><a id="resonant-management" href="resonant/management.html">Generation / Storage</a></li>
  <!-- //* resonant machinery -->
  <li><a id="resonant-machines" href="resonant/machines.html">Machines</a></li>
  </ul>
  <h3 class="nav-title">Multiblock Structures</h3>
  <ul>
  <!-- //* multiblock machinery -->
  <li><a id="multiblock-machinery" href="multiblock/machinery.html">Machinery</a></li>
  <!-- //* multiblock automation -->
  <li><a id="multiblock-automation" href="multiblock/automation.html">Automation</a></li>
  <!-- //* multiblock weapons -->
  <li><a id="multiblock-weapons" href="multiblock/weapons.html">Weapons</a></li>
  </ul>
  <h3 class="nav-title">Guides</h3>
  <ul>
  <!-- //* leaving earth guide -->
  <li><a id="guides-leaving-earth" href="guides/leaving-earth.html">Getting off earth</a></li>
  <!-- //* moneymaking guide -->
  <li><a id="guides-moneymaking" href="guides/moneymaking.html">Moneymaking</a></li>
  </ul>
*/
})

// disclaimer stuff
const $disclaimer = $('#disclaimer');

$disclaimer.html(
  `
  <h3>Please note that this site was designed on a desktop for desktops, and while I have tried to make it respond to smaller screen sizes it may render oddly on mobile devices, you have been warned! (tap to dismiss)
  </h3>
`
)

$disclaimer.on('click', () => {
  $disclaimer.hide()
})







input = document.getElementById('text').value;
output = document.getElementById('output');

// start process of removing duplicates by splitting string into array of <td>(data)</td> sets
console.log('starting to remove duplicates');
let duplicates = input.split(/, /g) // regex to find all occurances of ', '
let removeduplicates = [];
// loop through duplicates, if the element is NOT found in removeduplicates then push that element into it
duplicates.forEach((d) => {
  if (!removeduplicates.includes(d)) {
    console.log(`Pushing: ${d}`);
    removeduplicates.push(`${d}`)
  }
})
// remove any elements that have the substring 'copper' in them
console.log('removing copper entries')
let nocopper = [];
removeduplicates.forEach((d) => {
  if (!d.includes('copper')) {
    nocopper.push(d);
  }
})
console.log('formatting.');
let format = nocopper.toString()
// replace all occurances of ',' with </td><br><td>
const replace = format.replace(/,/g, '&lt;/td&gt;<br>&lt;td&gt;')
// add <td> and </td> to start and end of string respectively
let final = `&lt;td&gt;${replace}&lt;/td&gt;`;
// and breath..
output.innerHTML = final;