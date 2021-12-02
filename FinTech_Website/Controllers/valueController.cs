using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace Corporate_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class valueController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public valueController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select TOP(5) SYMBOL,market_value, CLOSE1
  from dbo.NSEAnalysisData where  CLOSE1>200
  AND TIMESTAMP1 in (select Max(TIMESTAMP1) from dbo.NSEAnalysisData SYMBOL)
  Order by market_value desc 
 ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DatabaseAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

    }
}