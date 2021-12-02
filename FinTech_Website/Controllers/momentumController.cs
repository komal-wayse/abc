using Microsoft.AspNetCore.Http;
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
    public class momentumController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public momentumController(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select top(10)  ID,SYMBOL, CLOSE1, Per_chng_1D, Avg_Price_5days,Relative_Volume,TIMESTAMP1 
            from dbo.NSEAnalysisData where Relative_Volume>1.5 AND Per_chng_1D>5
            AND TIMESTAMP1 in (select Max(TIMESTAMP1) from dbo.NSEAnalysisData SYMBOL)
            Order by Relative_Volume desc"
;
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
