using Microsoft.AspNetCore.Authorization; // Required for [Authorize]
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthMicroservice.Controllers
{

    [ApiController] // [cite: 80]
   
    [Route("api/[controller]")] // [cite: 81]

    public class SecureController : ControllerBase // [cite: 82]
    {

        [HttpGet("data")] // [cite: 84]
       
        [Authorize] // This attribute secures the endpoint [cite: 85]
       
        public IActionResult GetSecureData() // [cite: 86]
        {
            return Ok("This is protected data."); // [cite: 88]
        }
    }
}