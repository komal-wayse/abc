using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using FinTech_Website.Models;

namespace FinTech_Website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class watchlist5Controller : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public watchlist5Controller(IConfiguration configuration)
        {
            _configuration = configuration;

        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"SELECT  NSEAnalysisData.SYMBOL, NSEAnalysisData.CLOSE1 , NSEAnalysisData.Per_chng_1D,NSEAnalysisData.link ,watchlist7.W1_ID 
FROM NSEAnalysisData
INNER JOIN watchlist7 ON NSEAnalysisData.SYMBOL=watchlist7.W5_SYMBOL
AND TIMESTAMP1 in (select Max(TIMESTAMP1) from dbo.NSEAnalysisData SYMBOL) ORDER BY W1_ID

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
        [HttpPost]
        public JsonResult Post(watchlist1 watch)
        {
            string query = @"
             insert into dbo.watchlist7(W5_SYMBOL) values (
               '" + watch.SYMBOL + @"'
                    )

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
            return new JsonResult("added successfully");
        }
        [HttpDelete("{W1_ID}")]

        public JsonResult Delete(int W1_ID)
        {
            string query = @"
                      delete from dbo.watchlist7
                      where W1_ID = " + W1_ID + @"
                       

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

            return new JsonResult("Delete Successfully");
        }
    }
}