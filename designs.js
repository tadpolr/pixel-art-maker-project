// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const tableCanvas = $( "#pixel_canvas" )

function makeGrid() {
    const row = $( "#input_height" ).val();
    const column = $( "#input_width" ).val();

    tableCanvas.children().remove()

    for( let i = 1; i <= row; i++ ){
        tableCanvas.append( "<tr></tr>" )
    };

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

tableCanvas.on( "click", "td", function(){
    const selectedColor = $( "#colorPicker" ).val();
    $( this ).css( "background-color", selectedColor )
});

tableCanvas.on( "dblclick", "td", function(){
    $( this ).css( "background-color", "transparent" )
})