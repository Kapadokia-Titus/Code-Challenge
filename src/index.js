// inits
const url="http://localhost:3000/images/"; 
const btn= document.getElementById('like-button'); 
let likesCount = document.getElementById('like-count'); 
const comments= document.getElementById('comments-list');
let count =0;

//create main method
function init(){
    //get data function
    getData(1);
    // add comment
    addComment(1);

}

// executing this file once loaded
document.addEventListener('DOMContentLoaded', init);


// method for posting data to the UI
function getData(id){

    //create a fetch request
    fetch(`${url}${id}`)
    .then(response =>response.json())
    .then(data=>{
        //get do elements
        document.getElementById('card-title').textContent= data.title;  
        document.getElementById('card-image').src = data.image;
        //set the count coming from the data
        count += data.likes;
        likesCount.textContent = count; 

        // reset the inner text
        comments.innerHTML =""

        //map comments
        comments.innerHTML = data.comments.map(comment =>`<li> ${comment.content}</li>`)
        .join(" ")
        
    })
}

// increase like count
function increaseCount() {
    count++;
    likesCount.innerHTML = count;
}

// submit a comment
function addComment(id){
    //get data from the form input
    let form = document.getElementById('comment-form')
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        // get comment from the form
        let value = document.getElementById('comment').value;

        // setting up the value to the list
        comments.innerHTML += `<li> ${value}</li>`;

        //set an empty value
        form.reset();
    })
  
}
