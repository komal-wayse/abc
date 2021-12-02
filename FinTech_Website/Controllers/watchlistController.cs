using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace FinTech_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class watchlistController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public watchlistController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"SELECT ID,SYMBOL, CLOSE1,TIMESTAMP1
FROM [NSEDATA].[dbo].[NSEAnalysisData]
WHERE TIMESTAMP1=(
SELECT MAX(TIMESTAMP1) FROM dbo.NSEAnalysisData)

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

