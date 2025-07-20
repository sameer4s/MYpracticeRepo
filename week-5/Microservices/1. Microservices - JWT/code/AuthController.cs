using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using JwtAuthMicroservice.Models; 

namespace JwtAuthMicroservice.Controllers
{
   
    [ApiController] 
  
    [Route("api/[controller]")] 
    
    public class AuthController : ControllerBase 
    {
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

       
        [HttpPost("login")] 
        
        public IActionResult Login([FromBody] LoginModel model) 
        {
            if (IsValidUser(model)) 
            {
                var token = GenerateJwtToken(model.Username); 
                return Ok(new { Token = token }); 
            }
            return Unauthorized(); 
        }

        private bool IsValidUser(LoginModel model)
        {
            return model.Username == "testuser" && model.Password == "password123";
        }

       
        private string GenerateJwtToken(string username) 
        {
             var claims = new[] 
            {
                new Claim(ClaimTypes.Name, username) 
            };

            var jwtKey = _configuration["Jwt:Key"];
            var jwtIssuer = _configuration["Jwt:Issuer"]; 
            var jwtAudience = _configuration["Jwt:Audience"];
            var jwtDurationInMinutes = Convert.ToDouble(_configuration["Jwt:DurationInMinutes"]);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256); 

            var token = new JwtSecurityToken(
                issuer: jwtIssuer, 
                audience: jwtAudience, 
                claims: claims, 
                expires: DateTime.Now.AddMinutes(jwtDurationInMinutes), 
                signingCredentials: creds 
            );

            return new JwtSecurityTokenHandler().WriteToken(token); 
        }
    }
}