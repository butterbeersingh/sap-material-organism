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
        'color': '
