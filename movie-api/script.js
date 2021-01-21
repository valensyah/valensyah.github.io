function searchMovie(){
    $('#movie-list').html('');

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'dc01b00b',
            's' : $('#search-input').val()
        },
        success : function (result) {
            if (result.Response == "True"){
                let movies = result.Search;
                
                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4 col-sm-12 d-flex justify-content-center mt-3">
                        <div class="card" style="width: 18rem;">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year+`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+data.imdbID+`">See detail</a>
                            </div>
                        </div>
                        </div>
                    `)
                });
                $('#search-input').val('');
            }
            else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">`+ result.Error +`</h1>
                    </div>
                `)
            }
        }
    });
}

$('#search-button').on('click', function(){
    searchMovie();
});

$('#search-input').on('keyup', function(event){
    if (event.keyCode === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function (){
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': 'dc01b00b',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if( movie.Response === "True") {

                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4 col-sm-12 d-flex justify-content-center">
                                <img src="`+ movie.Poster +`" class="img-fluid">
                            </div>

                            <div class="col-md-8 col-sm-12 mt-2">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                    <li class="list-group-item">`+ movie.Year +`</li>
                                    <li class="list-group-item">`+ movie.Rated +`</li>
                                    <li class="list-group-item">`+ movie.Released +`</li>
                                    <li class="list-group-item">`+ movie.Plot +`</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);


            }
        }
    })
});
