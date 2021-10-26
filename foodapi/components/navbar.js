function navbar(){
    return(
    ` <div>
    <div >
        <a  href="index.html"><span class="material-icons"><h3> HOME</h3></span></a>
       
    </div>
    <div  >
        <input type="text" id="query">
        <button onclick="searchVideos()">Search </button>
      
    </div>
    <div>
        <h3><a href="getreceipeofday.html"> Reciepe of the Day</a></h3>
       <h3><a href="latestreciepe.html"> Latest Reciepe</a></h3>
       <h3><a href="#">Sign In</a></h3>
       <h3><a href="#">Sign Up</a></h3>
        <span id="username">
    </div>
</div>

</div>`)
 
}
export default navbar