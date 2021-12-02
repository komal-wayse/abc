using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace FinTech_Website.Models
{
    public class watchlist1
    {
        public int W1_ID { get; set; }
        public int W2_ID { get; set; }
        public int W3_ID { get; set; }
        public int W4_ID { get; set; }
        public int W5_ID { get; set; }
        public string SYMBOL { get; set; }
        public string W1_SYMBOL { get; set; }
        public string W2_SYMBOL { get; set; }
        public string W3_SYMBOL { get; set; }
        public string W4_SYMBOL { get; set; }
        public string W5_SYMBOL { get; set; }
    }
}
