document.addEventListener("DOMContentLoaded", function() {
    //კოდი იმისათვის რომ აიღოს ყველა ელემენტი რომელსაც აქვს კლასი cartoon
    const images = document.querySelectorAll(".cartoon");
    
    // თითო ფოტოს უმატებს click მოქმედებას
    images.forEach(image => {
        image.addEventListener("click", function() {
            // იღებს ტრაილერის url-ს, trailer ატრიბუტიდან
            const trailerUrl = this.getAttribute("trailer");
            
            // ამომწმებს არსებობს თუ არა ტრეილერის URL-ს
            if (trailerUrl) {
                const trailer = document.getElementById("trailer");
                const trailerVideo = document.getElementById("trailerVideo");
                
                // აყენეს iframe-ს src-ის ტრეილერის url-ს 
                trailerVideo.src = trailerUrl;
                
                // აჩვენებს ტრეილერს
                trailer.style.display = "block";
            } else {
                console.error("Trailer URL is missing or invalid!");
            }
        });
    });
});



// ჯავასკრიპტის კოდი სერიალების ტრაილერების საჩვენებლად
document.addEventListener("DOMContentLoaded", function() {
    //კოდი იმისათვის რომ აიღოს ყველა ელემენტი რომელსაც აქვს კლასი series
    const images = document.querySelectorAll(".series");
    
    // თითო ფოტოს უმატებს click მოქმედებას
    images.forEach(image => {
        image.addEventListener("click", function() {
            // იღებს ტრაილერის url-ს, trailer ატრიბუტიდან
            const trailerUrl = this.getAttribute("trailer");
            
            // ამომწმებს არსებობს თუ არა ტრეილერის URL-ს
            if (trailerUrl) {
                const trailer = document.getElementById("trailer");
                const trailerVideo = document.getElementById("trailerVideo");
                
                // აყენებს iframe-ს src-ის ტრეილერის url-ს 
                trailerVideo.src = trailerUrl;
                
                // აჩვენევს ტრეილერს
                trailer.style.display = "block";
            } else {
                console.error("Trailer URL is missing or invalid!");
            }
        });
    });
});


// ჯავასკრიპტის კოდი კინოს ტრეილერების გასაშვებად
document.addEventListener("DOMContentLoaded", function() {
    //კოდი იმისათვის რომ აიღოს ყველა ელემენტი რომელსაც აქვს კლასი images
    const images = document.querySelectorAll(".images");
    
    // Loop through each image and add a click event
    images.forEach(image => {
        image.addEventListener("click", function() {
            // Get the trailer URL from the data-trailer attribute
            const trailerUrl = this.getAttribute('trailer');
            
            // ამომწმებს არსებობს თუ არა ტრეილერის URL-ს
            if (trailerUrl) {
                const trailer = document.getElementById("trailer");
                const trailerVideo = document.getElementById("trailerVideo");
                
                // აყენებს iframe-ს src-ის ტრეილერის url-ს
                trailerVideo.src = trailerUrl;
                
                // აჩვენევს ტრეილერს
                trailer.style.display = "block";
            } else {
                console.error("Trailer URL is missing or invalid!");
            }
        });
    });
});



