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
        'background-color': '#4f46e5',
        'color': '#fff',
        'width': 40,
        'height': 40,
        'font-size': '10px'
      }
    },
    {
      selector: 'edge',
      style: {
        'label': 'data(label)',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'line-color': '#999',
        'target-arrow-color': '#999',
        'font-size': '8px',
        'text-background-color': '#fff',
        'text-background-opacity': 1,
        'text-background-padding': '2px'
      }
    },
    {
      selector: '#MARA',
      style: {
        'background-color': '#dc2626',
        'width': 80,
        'height': 80
      }
    }
  ],

  layout: {
    name: 'cose',
    animate: true
  }
});
