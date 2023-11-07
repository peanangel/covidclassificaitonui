// function handleClick(element){
//     let end_point_url = "http://localhost:8000/api/predict"
//     var base64String = "";
//     const preview = document.querySelector('#preview')
//     let file = element.files[0];
//     let reader = new FileReader();
//     let result;
//     reader.onload = () => {
//         base64String = reader.result;
//         const image = new Image();
//         image.height = 128;
//         image.title = file.name;
//         image.src = base64String;
//         preview.append(image) 
//         console.log("htuy");
//         fetch(end_point_url, {
           
//             method: "POST",
//             body: JSON.stringify({img: base64String}),
//             headers:{"Content-type": "application/json; charset=UTF-8"}
//     }
//     )
    
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     result = json;
//     closesole.log(result);
//     };
    
//     reader.readAsDataURL(file);
    

//     }

// function handleClick(element) {
//     let end_point_url = "http://localhost:8000/api/predict";
//     var base64String = "";
//     const preview = document.querySelector('#preview');
//     let file = element.files[0];
//     let reader = new FileReader();
//     let result;

//     reader.onload = () => {
//         base64String = reader.result;
//         const image = new Image();
//         image.height = 128;
//         image.title = file.name;
//         image.src = base64String;
//         preview.append(image);

//         // Fetch data from the API
//         fetch(end_point_url, {
//             method: "POST",
//             body: JSON.stringify({ img: base64String }),
//             headers: { "Content-type": "application/json; charset=UTF-8" }
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             // Update the 'result' variable with the received data
//             result = json['result'];

//             // Display the result in the HTML
//             const pCardElement = document.querySelector('.pCard');
//             pCardElement.textContent = result.json; // Update the content of the pCard element
//             console.log(result);
//         });
//     };

//     reader.readAsDataURL(file);
// }


function handleClick(element) {
    let end_point_url = "http://localhost:8000/api/predict";
    const preview = document.querySelector('#preview');
    let file = element.files[0];
    let reader = new FileReader();

    reader.onload = () => {
        const base64String = reader.result;

        // Create a new image element
        const image = new Image();
        image.height = 128;
        image.title = file.name;
        image.src = base64String;

        // Remove any existing images in the preview element
        preview.innerHTML = '';

        // Append the new image to the preview element
        preview.appendChild(image);

        // Fetch data from the API
        fetch(end_point_url, {
            method: "POST",
            body: JSON.stringify({ img: base64String }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((response) => response.json())
        .then((json) => {
            // Get the result from the JSON response
            let result = json['result'];

            // Display the result in the HTML
            const pCardElement = document.querySelector('.pCard');
            pCardElement.textContent = result; // Update the content of the pCard element
            console.log(result);
        });
    };

    reader.readAsDataURL(file);
}
