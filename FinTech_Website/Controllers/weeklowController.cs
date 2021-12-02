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
    public class weeklowController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public weeklowController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select SYMBOL, CLOSE1, WEEKHIGH,Away_52WeekHigh,TIMESTAMP1
  from dbo.NSEAnalysisData where  Away_52WeekLow<5 AND CLOSE1<WEEKLOW
  AND TIMESTAMP1 in (select Max(TIMESTAMP1) from dbo.NSEAnalysisData SYMBOL)
  Order by Away_52WeekLow asc

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
