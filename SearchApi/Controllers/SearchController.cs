using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SearchApi.Controllers
{
    public class SearchController : ControllerBase
    {
        [HttpGet]
        [Route("GetSearchData")]
        [AllowAnonymous]
        public IActionResult GetSearchData()
        {
            // Sample JSON data (replace this with your actual data or fetch data from a source)
            var jsonData = new[]
            {
                new { userId = 1, id = 1,
                    title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", 
                    body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" },
                new { userId = 1, id = 2, 
                    title = "qui est esse", 
                    body = "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" }
            };

            return Ok(jsonData);
        }
    }
}
