var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","sister_image.jpg", "mother_image.png" , "father_image.jpg", "grandma_image.jpg", "grandpa_image.jpg"];
var names = ["Family Book","Slaariya Bane", "Shravani Bane", "Sidhesh Bane", "Supriya Bane", "Subhash Bane"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
