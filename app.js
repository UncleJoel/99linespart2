document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");
    let buttext = document.createTextNode("Sing!")
    document.body.appendChild(button);
    button.appendChild(buttext);

    button.addEventListener("click", function () {

        // array of friends
        let friends = ["Josh", "Joel", "Kelsy", "Lauren", "Nathan"];
        // creates elements for friends names
        for (let i = 0; i < friends.length; i++) {
            const div = document.createElement("div");
            const name = document.createElement("h3");

            document.body.appendChild(div);
            div.className = "friends"
            div.innerHTML = "<h3 class = 'name'>" + friends[i].toUpperCase() + "</h3>";

            for (let y = 99; y > 0; y--) {
                //the if statement checks for the last iteration and changes the song to singular 
                if (y === 1) {
                    const p = document.createElement("p");
                    p.innerHTML = y + " line of code in the file, " + y + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
                    div.appendChild(p);
                } else {
                    const p = document.createElement("p");
                    p.innerHTML = y + " lines of code in the file, " + y + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (y - 1) + " lines of code in the file";
                    div.appendChild(p);
                }
            };
        };

    });
});
