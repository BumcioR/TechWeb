
<script>
        function addMovie() {
            var movieTitle = document.getElementById("inputTitle").value;
            var movieYear = document.getElementById("inputYear").value;
            var movieActors = document.getElementById("inputActors").value;

            var movieTitle = document.getElementById("inputTitle").value;
            if (movieTitle=="" || movieYear=="" || movieActors==""){
                alert ("nie wszystkie pola są wypełnione")
            }

            //sprawdzenie czy wszystko jest wypełnione
            var li = document.createElement("li");
            li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
            document.getElementById("moviesList").appendChild(li);

        function deleteMovie() {
            var checkedBoxes = document.querySelectorAll("input[type='chckbox']:checked");
            for (var i = 0; i<checkedBoxes.lenght; i++) {
                document.getElementById("moviesList")
            }
        }

            //console.log("Title: " + movieTitle + ", " + movieYear + ", " + movieActors);
            //allert ("Hello!");
            //console.log("Hello World!");
        }
    </script>