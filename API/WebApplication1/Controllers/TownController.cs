using Microsoft.AspNetCore.Mvc;
using WebApplication1.ViewModels;

namespace WebApplication1.Controllers {


    [ApiController]
    [Route("api/[controller]")]
    public class TownController : ControllerBase {


        public static List<Town> _MesVilles = new List<Town>();

        private readonly ILogger<TownController> _logger;

        public TownController(ILogger<TownController> logger) {
            _logger = logger;
        }


        private static int MaxTownId = 0;
        [HttpPost()]
        public void PostData([FromBody] Town town) {
            town.Id = ++MaxTownId;
            _MesVilles.Add(town);
        }

        [HttpGet]
        public IEnumerable<Town> Get() {
            return _MesVilles;
        }

        [HttpGet("{id}")]
        public Town Get(int id) {
            return _MesVilles.Single(v=>v.Id == id);
        }


    }
}
