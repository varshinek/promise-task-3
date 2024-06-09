document.querySelector("button").addEventListener("click",result);

var container = document.createElement("div")
container.className = "container";

var row = document.createElement("div");
row.className = "row";

var div = document.createElement("div")
div.className = "main";

async function result()
{
    div.innerHTML = "";
    try{
        var ask = document.getElementById("book").value;

        var data = await fetch(`https://gutendex.com/books/?search=${ask}`)
        var res = await data.json();
        console.log(res);

        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = 
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">Book Name : ${res.results[0].title}</h5>
                <p class="card-text">Author Name : ${res.results[0].authors[0].name}</p>
                <p class="card-text">Author year : ${res.results[0].authors[0].birth_year} - ${res.results[0].authors[0].death_year}</p>
                <p class="card-text">Language :  ${res.results[0].languages[0]}</p>
                <p class="card-text">Description :  ${res.results[0].subjects[0]}</p>
                <p class="card-text">Download Count :  ${res.results[0].download_count}</p>
            </div>
        </div>`    

        div.append(col);
        row.append(div);
        container.append(row);
        document.body.append(container)

    }
    catch{
        console.log("error");
    }
}