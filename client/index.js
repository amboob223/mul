const namee = document.getElementById("name");
const image = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener("click", async (event) => {
    event.preventDefault()
    try {


        const body = new FormData();
        body.append("name", namee.value)
        body.append("image", image.files[0])

        const response = await fetch("http://localhost:5000/moo",
            {
                method: "POST",

                body: body
            })

        console.log("hih")
    } catch (error) {
        console.log(error)
    }
});