
// function for returning navbar markup
$('#navbar').html(function () {

  return `
  <nav id="nav">
  <h2 style="text-align: center;">Site map</h2>
  <h3><a id="index" href="../index.html">Home</a></h3>
  <h3 class="nav-title">Movecraft</h3>
  <ul>
  <li><a id="movecraft-controls" href="/movecraft/controls.html">Signs / Controls</a></li>
  <li><a id="movecraft-crafts" href="/movecraft/crafts.html">Craft types</a></li>
  <li><a id="movecraft-blocks" href="/movecraft/blocks.html">Valid blocks</a></li>
  </ul>
  <h3 class="nav-title">Planets</h3>
  <ul>
  <li><a id="planets-resources" href="/planets/resources.html">Resources</a></li>
  <li><a id="planets-travel" href="/planets/travel.html">Interplanetary travel</a></li>
  </ul>
  <h3 class="nav-title">Resonant</h3>
  <ul>
  <li><a id="resonant-management" href="/resonant/management.html">Generation / Storage</a></li>
  <li><a id="resonant-machines" href="/resonant/machines.html">Machines</a></li>
  </ul>
  <h3 class="nav-title">Multiblock Structures</h3>
  <ul>
  <li><a id="multiblock-machinery" href="/multiblock/machinery.html">Machinery</a></li>
  <li><a id="multiblock-weapons" href="/multiblock/weapons.html">Machines</a></li>
  </ul>
  <h3 class="nav-title">Guides</h3>
  <ul>
  <li><a id="guides-leaving-earth" href="/guides/leaving-earth.html">Getting off earth</a></li>
  <li><a id="guides-moneymaking" href="/guides/moneymaking.html">Moneymaking</a></li>
  </ul>
  </nav>
  <div style="display: flex;">
  <span><img src="/images/icons/author.png"></span><p style="font-size: large; margin-left: 10px; color: var(--signatureColour)">Written by animal AKA animalchaser</p>
  </div>
`;
})

const $disclaimer = $('#disclaimer');

$disclaimer.on('click', () => {
  $disclaimer.hide()
})