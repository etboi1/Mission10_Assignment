using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Assignment.Data;

namespace Mission10_Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlingLeagueContext _bowlingContext;
        public BowlingLeagueController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;
        }

        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get() {
            IEnumerable<Bowler> bowlerList = _bowlingContext.Bowlers.Include(b => b.Team).Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks").ToList();
            return (bowlerList);
        }

    }
}
