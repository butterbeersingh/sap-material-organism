var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: [
    // Nodes
    { data: { id: 'MARA', label: 'MARA\nBasic Data' } },
    { data: { id: 'MARC', label: 'MARC\nPlant Data' } },
    { data: { id: 'MARD', label: 'MARD\nStorage Location' } },
    { data: { id: 'MBEW', label: 'MBEW\nValuation Data' } },
    { data: { id: 'MVKE', label: 'MVKE\nSales Data' } },

    // Edges
    { data: { source: 'MARA', target: 'MARC', label: 'MATNR' } },
    { data: { source: 'MARC', target: 'MARD', label: 'MATNR + WERKS' } },
    { data: { source: 'MARA', target: 'MBEW', label: 'MATNR + BWKEY' } },
    { data: { source: 'MARA', target: 'MVKE', label: 'MATNR' } }
  ],

  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'shape': 'ellipse',
        'padding': '12px',
        'width': 'label',
        'height': 'label',
        'text-wrap': 'wrap',
        'text-max-width': '90px',
        'background-color': '#4f46e5',
        'color': '#fff',
        'font-size': '11px',
        'font-weight': 'bold'
      }
    },
    {
      selector: '#MARA',
      style: {
        'background-color': '#dc2626',
        'font-size': '12px'
      }
    },
    {
      selector: '.selected',
      style: {
        'border-width': 3,
        'border-color': '#facc15',
        'background-color': '#1d4ed8'
      }
    },
    {
      selector: 'edge',
      style: {
        'label': 'data(label)',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'line-color': '#9ca3af',
        'target-arrow-color': '#9ca3af',
        'font-size': '9px',
        'color': '#111',
        'text-background-color': '#fff',
        'text-background-opacity': 1,
        'text-background-padding': '3px'
      }
    }
  ],

  layout: {
    name: 'cose',
    animate: true
  }
});


// Hover interaction
cy.on('mouseover', 'node', function (evt) {
  evt.target.animate(
    { style: { 'transform': 'scale(1.1)' } },
    { duration: 150 }
  );
});

cy.on('mouseout', 'node', function (evt) {
  evt.target.animate(
    { style: { 'transform': 'scale(1)' } },
    { duration: 150 }
  );
});

// Click selection
cy.on('tap', 'node', function (evt) {
  cy.nodes().removeClass('selected');
  evt.target.addClass('selected');
});
