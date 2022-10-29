// variable for an API key
const api_key_superhero = "125347296980189"

// variable for base url
// https://www.superheroapi.com/api.php/125347296980189/644/powerstats
const baseURL_superhero = "https://www.superheroapi.com/api.php"


// adding values to superhero biography
function firstsuperHero_bio(superhero_charid, superhero_info){
    // url api call  
        const url = `${baseURL_superhero}/${api_key_superhero}/${superhero_charid}/${superhero_info}`

    // Make our API url request
        $.ajax(url)
        .then((superhero_bio) => {
        console.log(superhero_bio)
    
    // specify main element to input data
        const $main = $(".SuperHero_1")
        $main.empty()
     // list information on application   
        $main.html(`<h3>Super Hero 1 Bio: </h3>
    <p>Super Hero 1 Hero Name: ${superhero_bio.name}</p>
    <h3>Super Hero 1 Powerstats: </h3>
            <p>Strength: ${superhero_bio.strength}</p>
            <p>Defense: ${superhero_bio.durability}</p>
            <p>Intelligence: ${superhero_bio.intelligence}</p>
            <p>Combat: ${superhero_bio.combat}</p>
            <p>Speed: ${superhero_bio.speed}</p>`)
    })}
// Enter Superhero Charid and event listener
$(".first_superhero_submit").on("click", (event) =>{
    // prevent refresh if submit button in input element is selected again
    event.preventDefault()
    // grab text from the inputs elements using .val() method
    const inputText_charid = $(".first_superhero_selection").val()
    const inputText_superhero_info = $(".first_superhero_info_enter").val()
    // update screen with inputted text from the input element
    firstsuperHero_bio(inputText_charid, inputText_superhero_info)
})

// adding values to superhero biography
function secondsuperHero_bio(superhero_charid, superhero_info){
    // url api call 
        const url = `${baseURL_superhero}/${api_key_superhero}/${superhero_charid}/${superhero_info}`

    // make second api url call
        $.ajax(url)
        .then((superhero_bio) => {
        console.log(superhero_bio)
    
    // specify second main element to input data
        const $main = $(".SuperHero_2")
        $main.empty()

        // when calling the data from the data file we need to capitalize the .methods attached to the movie object
        // in other works movie.Title, movie.Poster
        $main.html(`<h3>Super Hero 2 Bio: </h3>
    <p>Super Hero 2 Hero Name: ${superhero_bio.name}</p>
    <h3>Super Hero 2 Powerstats: </h3>
            <p>Strength: ${superhero_bio.strength}</p>
            <p>Defense: ${superhero_bio.durability}</p>
            <p>Intelligence: ${superhero_bio.intelligence}</p>
            <p>Combat: ${superhero_bio.combat}</p>
            <p>Speed: ${superhero_bio.speed}</p>`)
        

})
}
// Enter Superhero Charid and event listener
$(".second_superhero_submit").on("click", (event) =>{
    // prevent refresh if submit button in input element is selected again
    event.preventDefault()
    // grab text from the inputs elements using .val() method
    const inputText_charid = $(".second_superhero_selection").val()
    const inputText_superhero_info = $(".second_superhero_info_enter").val()
    // update screen with inputted text from the input element
    secondsuperHero_bio(inputText_charid, inputText_superhero_info)
})/*
// Enter hero id and ("powerstats") (superman = 644)
const hero1 = new firstsuperHero_bio(644, "powerstats")
// Enter hero id and ("powerstats") (502  = one punch man)
const hero2 = new secondsuperHero_bio(502, "powerstats")
*/

function superHero_fight(superhero1_charid, superhero1_info, superhero2_charid, superhero2_info){
        
        // url api calls
        const url_hero1 = `${baseURL_superhero}/${api_key_superhero}/${superhero1_charid}/${superhero1_info}`
        const url_hero2 = `${baseURL_superhero}/${api_key_superhero}/${superhero2_charid}/${superhero2_info}`
    // ajax calls for superhero fighting each other
        $.ajax(url_hero1)
        .then((superhero1_info) => {
            $.ajax(url_hero2)
        .then((superhero2_info) => {

            // create areas to output results
            const $main = $(".Superhero_Fight")
            const $body_superhero_fight_zone = $(".superhero_fight_zone")
            const $body_superhero_fight_zone1 = $(".superhero_fight_zone1")
            const $body_superhero_fight_zone2 = $(".superhero_fight_zone2")
            const $body_superhero_fight_zone3 = $(".superhero_fight_zone3")
            const $superhero_fight_end = $(".superhero_fight_end")
            $main.empty()
            $main.html(`<h1>Super Hero Fight Begin!!!!</h1>`)


            // comparing strengths
            if((superhero1_info.strength > superhero2_info.strength) || (superhero1_info.combat > superhero2_info.combat)){
                $body_superhero_fight_zone.html(`<h3>The superhero ${superhero1_info.name} is stronger than ${superhero2_info.name} at 
                ${superhero1_info.strength} and ${superhero1_info.combat} in comparison to ${superhero2_info.strength} and ${superhero2_info.combat}</h3>`)
            }
            else if((superhero1_info.strength < superhero2_info.strength) || (superhero1_info.combat < superhero2_info.combat)){
                $body_superhero_fight_zone.html(`<h3>The superhero ${superhero1_info.name} is stronger than ${superhero2_info.name} at 
                ${superhero2_info.strength} and ${superhero2_info.combat} in comparison to ${superhero1_info.strength} and ${superhero1_info.combat}</h3>`)}
            else if((superhero1_info.strength === superhero2_info.strength) || (superhero1_info.combat === superhero2_info.combat)){
                $body_superhero_fight_zone.html(`<h3>The superhero ${superhero1_info.name} has the same strength as ${superhero2_info.name} at 
                ${superhero1_info.strength} in comparison to ${superhero2_info.strength}</h3>`)}
            // comparing speeds
            if(superhero1_info.speed > superhero2_info.speed){
                $body_superhero_fight_zone1.html(`<h3>The superhero ${superhero1_info.name} is faster than ${superhero2_info.name} at 
                ${superhero1_info.speed} in comparison to ${superhero2_info.speed}</h3>`)
            }
            else if(superhero1_info.speed < superhero2_info.speed){
                $body_superhero_fight_zone1.html(`<h3>The superhero ${superhero1_info.name} is faster than ${superhero2_info.name} at 
                ${superhero2_info.speed} in comparison to ${superhero1_info.speed}</h3>`)}
            else if(superhero1_info.speed === superhero2_info.speed){
                $body_superhero_fight_zone1.html(`<h3>The superhero ${superhero1_info.name} has the same speed as ${superhero2_info.name} at 
                ${superhero1_info.speed} in comparison to ${superhero2_info.speed}</h3>`)}
            // comparing intelligence
            if(superhero1_info.intelligence > superhero2_info.intelligence){
                $body_superhero_fight_zone2.html(`<h3>The superhero ${superhero1_info.name} is smarter than ${superhero2_info.name} at 
                ${superhero1_info.intelligence} in comparison to ${superhero2_info.intelligence}</h3>`)
            }
            else if(superhero1_info.intelligence < superhero2_info.intelligence){
                $body_superhero_fight_zone2.html(`<h3>The superhero ${superhero2_info.name} is smarter than ${superhero1_info.name} at 
                ${superhero2_info.speed.intelligence} in comparison to ${superhero1_info.intelligence}</h3>`)}
            else if(superhero1_info.intelligence === superhero2_info.intelligence){
                $body_superhero_fight_zone2.html(`<h3>The superhero ${superhero1_info.name} has the same intelligence level as ${superhero2_info.name} at 
                ${superhero1_info.intelligence} in comparison to ${superhero2_info.intelligence}</h3>`)}
            // comparing durability
            if(superhero1_info.durability > superhero2_info.durability){
                $body_superhero_fight_zone3.html(`<h3>The superhero ${superhero1_info.name} is more durability than ${superhero2_info.name} at 
                ${superhero1_info.durability} in comparison to ${superhero2_info.durability}</h3>`)
            }
            else if(superhero1_info.durability < superhero2_info.durability){
                $body_superhero_fight_zone3.html(`<h3>The superhero ${superhero2_info.name} is more durability than ${superhero1_info.name} at 
                ${superhero2_info.durability} in comparison to ${superhero1_info.durability}</h3>`)}
            else if(superhero1_info.durability === superhero2_info.durability){
                $body_superhero_fight_zone3.html(`<h3>The superhero ${superhero1_info.name} has the same durability level as ${superhero2_info.name} at 
                ${superhero1_info.durability} in comparison to ${superhero2_info.durability}</h3>`)}
            // comparing totals of heros
                const superhero1_total = (superhero1_info.strength + superhero1_info.combat + superhero1_info.intelligence + superhero1_info.durability + superhero1_info.speed)
                const superhero2_total = (superhero2_info.strength + superhero2_info.combat + superhero2_info.intelligence + superhero2_info.durability + superhero2_info.speed)

            if(superhero1_total > superhero2_total){
                $superhero_fight_end.html(`<h1>The superhero ${superhero1_info.name} is better than ${superhero2_info.name} at 
                ${superhero1_total} in comparison to ${superhero2_total}. Superhero ${superhero1_info.name} wins!!!!!</h1>`)
            }
            else if(superhero1_total < superhero2_total){
                $superhero_fight_end.html(`<h1>The superhero ${superhero2_info.name} is more durability than ${superhero1_info.name} at 
                ${superhero1_total} in comparison to ${superhero2_total}. Superhero ${superhero2_info.name} wins!!!!!</h1>`)}
            else if(superhero1_total === superhero2_total){
                $superhero_fight_end.html(`<h1>The superhero ${superhero1_info.name} is better than ${superhero2_info.name} at 
                ${superhero1_total} in comparison to ${superhero2_total}. Both Superhero's ${superhero1_info.name} & ${superhero2_info.name} wins!!!!!</h1>`)}

        })
    })

}

// Enter Superhero Charid and event listener
$(".hero_fight_submit").on("click", (event) =>{
    // prevent refresh if submit button in input element is selected again
    event.preventDefault()
    // grab text from the inputs elements using .val() method
    const inputText_charid_superhero1 = $(".first_superhero_selection").val()
    const inputText_superhero1_info = $(".first_superhero_info_enter").val()
    const inputText_charid_superhero2 = $(".second_superhero_selection").val()
    const inputText_superhero2_info = $(".second_superhero_info_enter").val()
    // update screen with inputted text from the input element
    superHero_fight(inputText_charid_superhero1, inputText_superhero1_info, inputText_charid_superhero2, inputText_superhero2_info)
    // clear content
    $(".first_superhero_selection").val(null)
    $(".first_superhero_info_enter").val(null)
    $(".second_superhero_selection").val(null)
    $(".second_superhero_info_enter").val(null)
})
