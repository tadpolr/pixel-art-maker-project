// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const tableCanvas = $( "#pixel_canvas" )

function makeGrid() {
    const row = $( "#input_height" ).val();
    const column = $( "#input_width" ).val();

    // Remove existing table to create the new one.
    tableCanvas.children().remove()

    // Create all table rows.
    for( let i = 1; i <= row; i++ ){
        tableCanvas.append( "<tr></tr>" )
    }; 

    // Add columns to each row.
    $( "tr" ).each( function(){
        for( let i = 1; i <= column; i++){
            $( this ).append( "<td></td>" ) 
        }
    }) 
}

$( "input[type=submit]" ).click( function( evt ){
    evt.preventDefault()
    makeGrid()
});

// Change table cell background-color to selected color when clicked.
tableCanvas.on( "click", "td", function(){
    const selectedColor = $( "#colorPicker" ).val();
    $( this ).css( "background-color", selectedColor )
}); 

// Change table cell background-color back to transparent when double clicked.
tableCanvas.on( "dblclick", "td", function(){
    $( this ).css( "background-color", "transparent" )
}); 