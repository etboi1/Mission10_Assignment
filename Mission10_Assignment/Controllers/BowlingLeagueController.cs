using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mission10_Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private FoodDbContext _foodContext;
        public MarriottFoodController(FoodDbContext temp)
        {
            _foodContext = temp;
        }

        [HttpGet(Name = “GetMArriottFood”)]
        public IEnumerable<MarriottFood> Get() {
            IEnumerable<MarriotFood> foodList = _foodContext.Foods.ToList();
            return (foodList);
        }

    }
}
